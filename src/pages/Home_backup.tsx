import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/joaogasparp',
      label: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/joao-gaspar',
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:joaogaspar003@gmail.com',
      label: 'Send Email'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
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
              className="group inline-flex items-center px-6 py-3 glass-button text-black hover:text-black transition-all duration-200 font-medium"
            >
              <span>Saber Mais</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
            </Link>
            
            <a
              href="/cv_en.pdf"
              download
              className="group inline-flex items-center px-6 py-3 glass-button text-black hover:text-black transition-all duration-200 font-medium"
            >
              <FiDownload className="mr-2" size={16} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-medium hover:text-black transition-colors duration-200 hover:scale-110 transform"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
