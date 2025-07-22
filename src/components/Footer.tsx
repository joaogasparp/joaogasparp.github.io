import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center space-x-1 text-gray-medium text-sm">
            <span>© 2024 João Gaspar.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/joaogasparp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-medium hover:text-black transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/joaogasparp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-medium hover:text-black transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:joaogaspar003@gmail.com"
              className="text-gray-medium hover:text-black transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
