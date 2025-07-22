import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true); // Desktop sempre aberto
      } else {
        setIsOpen(false); // Mobile começa fechado
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academic-projects', label: 'Academic' },
    { path: '/personal-projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getCurrentLabel = () => {
    const current = navItems.find(item => isActive(item.path));
    return current?.label || 'Menu';
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Container principal */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden"
          animate={{
            width: isOpen ? (isMobile ? '220px' : '600px') : '160px',
            height: isOpen && isMobile ? 'auto' : '56px',
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 30
          }}
        >
          {/* Estado fechado - apenas mobile */}
          {!isOpen && isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-14 px-6 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              <span className="mr-3">{getCurrentLabel()}</span>
              <FiMenu size={16} />
            </button>
          )}

          {/* Estado aberto */}
          {isOpen && (
            <div className={`${isMobile ? 'flex flex-col p-3 space-y-2' : 'flex items-center h-14 px-4'}`}>
              {isMobile ? (
                // Layout Mobile - Vertical
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block px-4 py-3 rounded-lg text-sm font-medium transition-colors w-full text-left
                        ${isActive(item.path)
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-2 border-t border-gray-100">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-full p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
                    >
                      <FiX size={16} className="mr-2" />
                      <span className="text-sm">Close</span>
                    </button>
                  </div>
                </>
              ) : (
                // Layout Desktop - Horizontal
                <>
                  {/* Logo JG */}
                  <Link
                    to="/"
                    className={`
                      flex items-center justify-center w-10 h-10 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 mr-4
                      ${isActive('/') 
                        ? 'bg-black text-white' 
                        : 'bg-gradient-to-br from-black to-gray-700 text-white hover:from-gray-800'
                      }
                    `}
                  >
                    JG
                  </Link>

                  {/* Navegação horizontal */}
                  <div className="flex items-center space-x-2 flex-1 justify-center">
                    {navItems.slice(1).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`
                          px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap relative
                          ${isActive(item.path)
                            ? 'bg-black text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                          }
                        `}
                      >
                        {item.label}
                        
                        {/* Indicador ativo simples */}
                        {isActive(item.path) && (
                          <motion.div
                            className="absolute inset-0 bg-black rounded-lg -z-10"
                            layoutId="activeTab"
                            transition={{ 
                              type: 'spring', 
                              stiffness: 400, 
                              damping: 30 
                            }}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>

        {/* Backdrop mobile */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              className="fixed inset-0 bg-black/10 backdrop-blur-sm -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
