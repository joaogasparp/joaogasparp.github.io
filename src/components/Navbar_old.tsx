import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Aberto por padrão
  const [isMobile, setIsMobile] = useState(false);
  const [activeButtonBounds, setActiveButtonBounds] = useState<DOMRect | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // Mudado para 1024px para incluir tablets
      setIsMobile(mobile);
      // Em mobile/tablet, navbar começa fechado
      if (mobile) {
        setIsOpen(false);
      } else {
        // Em desktop, navbar fica sempre aberto
        setIsOpen(true);
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

  // Atualizar posição do indicador ativo
  useEffect(() => {
    const updateActiveButtonBounds = () => {
      const activeButton = document.querySelector(`[data-path="${location.pathname}"]`);
      if (activeButton && navRef.current) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        
        const newBounds = {
          ...buttonRect,
          x: buttonRect.x - navRect.x,
          y: buttonRect.y - navRect.y,
        } as DOMRect;
        
        setActiveButtonBounds(newBounds);
      }
    };

    if (isOpen && !isMobile) {
      // Delay maior para garantir que a animação seja visível
      setTimeout(updateActiveButtonBounds, 150);
    }
  }, [location.pathname, isOpen, isMobile]);

  // Função para capturar posição inicial quando um link é clicado
  const handleLinkClick = (targetPath: string) => {
    if (!isMobile && navRef.current && targetPath !== location.pathname) {
      setIsAnimating(true);
      
      const currentActiveButton = document.querySelector(`[data-path="${location.pathname}"]`);
      const targetButton = document.querySelector(`[data-path="${targetPath}"]`);
      
      if (currentActiveButton && targetButton && navRef.current) {
        const currentRect = currentActiveButton.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        
        // Definir posição inicial para a animação
        setActiveButtonBounds({
          ...currentRect,
          x: currentRect.x - navRect.x,
          y: currentRect.y - navRect.y,
        } as DOMRect);
      }
      
      // Reset animating state após a transição com delay duplo para efeito de retorno
      setTimeout(() => setIsAnimating(false), 400);
      setTimeout(() => setIsAnimating(true), 450);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-xl px-4">
      <div className="relative flex justify-center">
        {/* Main Navigation Container */}
        <motion.div
          className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden min-w-fit"
          initial={false}
          animate={{
            width: isOpen ? (isMobile ? '200px' : '640px') : '160px',
            height: isOpen && isMobile ? 'auto' : '56px',
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 35,
            mass: 0.6
          }}
          style={{ maxWidth: 'calc(100vw - 2rem)' }} // Garante que não vai além da tela
        >
          {/* Closed State - Single Button (apenas em mobile) */}
          <AnimatePresence>
            {!isOpen && isMobile && (
              <motion.button
                onClick={() => setIsOpen(true)}
                className="w-full h-14 px-6 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-black transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <span className="mr-3">{getCurrentLabel()}</span>
                <FiMenu size={16} />
              </motion.button>
            )}
          </AnimatePresence>

                {/* Open State - Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={navRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05, duration: 0.15 }}
                className={`relative ${
                  isMobile 
                    ? 'flex flex-col p-3 space-y-2' 
                    : 'flex items-center justify-between h-14 px-4'
                }`}
              >
                {/* Indicador animado de fundo - apenas desktop */}
                {activeButtonBounds && !isMobile && (
                  <>
                    {/* Trilha/Rastro durante animação */}
                    {isAnimating && (
                      <motion.div
                        className="absolute bg-gradient-to-r from-black/30 to-gray-800/30 rounded-lg"
                        initial={{
                          x: activeButtonBounds.x,
                          y: activeButtonBounds.y,
                          width: activeButtonBounds.width,
                          height: activeButtonBounds.height,
                          scaleX: 1,
                        }}
                        animate={{
                          scaleX: 1.2,
                          opacity: [0.3, 0.6, 0.3, 0],
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        style={{ zIndex: 0 }}
                      />
                    )}
                    
                    {/* Indicador principal */}
                    <motion.div
                      className="absolute bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-lg"
                      layoutId="activeIndicator" // Key para animação entre posições
                      initial={false}
                      animate={{
                        x: activeButtonBounds.x,
                        y: activeButtonBounds.y,
                        width: activeButtonBounds.width,
                        height: activeButtonBounds.height,
                        scale: isAnimating ? 1.05 : 1, // Corrigido: apenas dois valores
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 250,
                        damping: 20,
                        mass: 1.2,
                        duration: 0.7, // Animação mais lenta e fluida
                      }}
                      style={{ 
                        zIndex: 1,
                        boxShadow: isAnimating 
                          ? '0 6px 20px rgba(0, 0, 0, 0.25)' 
                          : '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  </>
                )}

                {isMobile ? (
                  // Layout Mobile - Vertical
                  <>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: index * 0.05,
                            type: 'spring',
                            stiffness: 500,
                            damping: 30
                          }
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`
                            block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left
                            ${isActive(item.path)
                              ? 'bg-black text-white shadow-sm'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black'
                            }
                          `}
                        >
                          {item.path === '/' ? 'Home' : item.label}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Botão fechar em mobile */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: navItems.length * 0.05 }}
                      className="pt-2 border-t border-gray-100"
                    >
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center w-full p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
                      >
                        <FiX size={16} className="mr-2" />
                        <span className="text-sm">Close</span>
                      </button>
                    </motion.div>
                  </>
                ) : (
                  // Layout Desktop - Horizontal
                  <>
                    {/* Logo JG */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 500, damping: 30 }}
                      className="flex-shrink-0 relative z-10"
                    >
                      <Link
                        to="/"
                        data-path="/"
                        onClick={() => handleLinkClick('/')}
                        className={`flex items-center justify-center w-10 h-10 font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 relative z-20 ${
                          isActive('/') 
                            ? 'bg-transparent text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' 
                            : 'bg-gradient-to-br from-black to-gray-700 text-white hover:from-gray-800 hover:to-gray-900'
                        }`}
                      >
                        JG
                      </Link>
                    </motion.div>

                    {/* Navigation Items - Horizontal Layout */}
                    <div className="flex items-center space-x-2 flex-1 justify-center overflow-hidden">
                      {navItems.slice(1).map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            x: 0,
                            transition: { 
                              delay: (index + 1) * 0.03,
                              type: 'spring',
                              stiffness: 500,
                              damping: 30
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-shrink-0 relative z-10"
                        >
                          <Link
                            to={item.path}
                            data-path={item.path}
                            onClick={() => handleLinkClick(item.path)}
                            className={`
                              block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap relative z-20
                              ${isActive(item.path)
                                ? 'bg-transparent text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-semibold'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black hover:shadow-md'
                              }
                            `}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Backdrop - apenas em mobile */}
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
