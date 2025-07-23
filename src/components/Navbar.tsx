import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [indicator, setIndicator] = useState<{ x: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academic-projects', label: 'Academic' },
    { path: '/personal-projects', label: 'Personal' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Atualizar posição do indicador ativo
  useEffect(() => {
    const updateIndicator = () => {
      if (!isMobile && navRef.current) {
        const activeButton = document.querySelector(`[data-path="${location.pathname}"]`);
        if (activeButton) {
          const buttonRect = activeButton.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();
          setIndicator({
            x: buttonRect.x - navRect.x,
            width: buttonRect.width
          });
        }
      }
    };
    setTimeout(updateIndicator, 80);
  }, [location.pathname, isMobile]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[9999]">
        <div className="px-2 py-3">
          <motion.div
            className="mx-auto max-w-5xl bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl relative"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={navRef}
            style={{ minHeight: 64 }}
          >
            {/* Glass indicator */}
            {!isMobile && indicator && (
              <motion.div
                className="absolute top-2 bottom-2 bg-white/60 backdrop-blur-md rounded-xl z-0 border border-white/30 shadow"
                initial={false}
                animate={{
                  x: indicator.x,
                  width: indicator.width,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                  mass: 1,
                }}
              />
            )}
            <div className="flex items-center justify-between px-4 py-2 relative">
              {/* Logo JG */}
              <motion.div
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/"
                  data-path="/"
                  className={`flex items-center justify-center w-12 h-12 font-bold text-lg rounded-xl transition-all duration-300 relative z-10
                    ${isActive('/') ? 'text-black' : 'text-black hover:text-gray-600'}`}
                  style={{ background: 'none', boxShadow: 'none' }}
                >
                  JG
                </Link>
              </motion.div>

              {/* Menu Desktop */}
              {!isMobile && (
                <div className="flex items-center space-x-1">
                  {navItems.slice(1).map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.07 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ position: 'relative' }}
                    >
                      <Link
                        to={item.path}
                        data-path={item.path}
                        className={`relative px-5 py-2 rounded-xl text-base font-medium transition-all duration-300 z-10
                          ${isActive(item.path) ? 'text-black' : 'text-black hover:text-gray-600'}`}
                        style={{ background: 'none', boxShadow: 'none', overflow: 'hidden', minWidth: 80 }}
                      >
                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Menu Mobile Button */}
              {isMobile && (
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl bg-gray-100 text-black hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiX size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
              {isMobile && isOpen && (
                <motion.div
                  className="border-t border-gray-200 bg-white"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`
                            block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                            ${isActive(item.path)
                              ? 'text-white bg-black shadow-md'
                              : 'text-black hover:text-gray-600 hover:bg-gray-100'
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </nav>

      {/* Backdrop Mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
