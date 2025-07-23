import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    }
  };

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      userId
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Accent color bar */}
      <div className="w-16 h-2 rounded-full mb-8 mx-auto" style={{ background: '#6366f1' }} />
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="heading-primary text-4xl md:text-5xl text-black mb-6">
              Get In Touch
            </h1>
            <p className="body-text-light text-lg max-w-2xl mx-auto">
              Let's discuss opportunities and bring ideas to life
            </p>
          </motion.div>

            <motion.div variants={itemVariants} className="mb-8 text-center">
            <span
              className="inline-block px-4 py-2 rounded-full font-medium text-base"
              style={{
              background: 'rgba(99, 102, 241, 0.1)',
              color: 'rgb(99, 102, 241)'
              }}
            >
              Open to work and collaborations
            </span>
            </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h2 className="heading-secondary text-2xl text-black mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <FiMail className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="body-text font-medium text-black">Email</p>
                    <a href="mailto:joaogaspar003@gmail.com" className="body-text text-gray-600 hover:text-black transition-colors">
                      joaogaspar003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="body-text font-medium text-black">Location</p>
                    <p className="body-text text-gray-600">Aveiro, Portugal</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <FiGithub className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="body-text font-medium text-black">GitHub</p>
                    <a href="https://github.com/joaogasparp" target="_blank" rel="noopener noreferrer" className="body-text text-gray-600 hover:text-black transition-colors">
                      github.com/joaogasparp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <FiLinkedin className="text-xl text-black" />
                  </div>
                  <div>
                    <p className="body-text font-medium text-black">LinkedIn</p>
                    <a href="https://linkedin.com/in/joaogasparp" target="_blank" rel="noopener noreferrer" className="body-text text-gray-600 hover:text-black transition-colors">
                      linkedin.com/in/joaogasparp/
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block body-text font-medium text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all body-text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block body-text font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all body-text"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block body-text font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all body-text resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors body-text font-medium disabled:opacity-60"
                  disabled={status === 'sending'}
                >
                  <FiSend size={16} />
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
                {status === 'success' && (
                  <div className="text-green-600 text-center font-medium mt-2">Message sent successfully!</div>
                )}
                {status === 'error' && (
                  <div className="text-red-600 text-center font-medium mt-2">Failed to send message. Please try again.</div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
