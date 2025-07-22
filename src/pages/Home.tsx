import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
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
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="body-text-light text-lg tracking-wide uppercase mb-4">
              Hello, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="heading-primary text-5xl md:text-7xl text-black mb-6"
          >
            João
          </motion.h1>

          {/* Education & Location */}
          <motion.div
            variants={itemVariants}
            className="mb-12 space-y-2"
          >
            <p className="heading-secondary text-xl md:text-2xl text-gray-700">
              Masters in Informatics and Telecommunications Engineering
            </p>
            <p className="body-text-light text-base tracking-wide uppercase">
              Aveiro, Portugal
            </p>
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
                  className="social-link"
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
