import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/joaogasparp',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/joaogasparp/',
      label: 'LinkedIn'
    },
    {
      icon: FiMail,
      href: 'mailto:joaogaspar003@gmail.com',
      label: 'Email'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight"
        >
          João Gaspar
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-medium mb-8 font-light"
        >
          Engenheiro Informático e Telemático
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base text-gray-medium mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Versátil e proativo, focado em soluções técnicas estruturadas. 
          Experiência em desenvolvimento web, desktop e práticas ágeis.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Link
            to="/about"
            className="group inline-flex items-center px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-medium"
          >
            <span>Saber Mais</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </Link>
          
          <a
            href="/cv_en.pdf"
            download
            className="group inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-200 font-medium"
          >
            <FiDownload className="mr-2" size={16} />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-black transition-colors duration-200"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
