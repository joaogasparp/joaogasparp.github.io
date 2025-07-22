import React, { useState } from 'react';
import { FiMail, FiUser, FiMessageCircle, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // EmailJS configuration placeholders - to be configured later
  const EMAIL_SERVICE_ID = 'your_service_id'; // Replace with actual service ID
  const EMAIL_TEMPLATE_ID = 'your_template_id'; // Replace with actual template ID
  const EMAIL_USER_ID = 'your_user_id'; // Replace with actual user ID

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'A enviar mensagem...'
    });

    try {
      // EmailJS integration
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'João Gaspar',
        },
        EMAIL_USER_ID
      );

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Obrigado pelo contacto.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente ou contacte diretamente via email.'
      });
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'joaogaspar003@gmail.com',
      href: 'mailto:joaogaspar003@gmail.com'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: '/in/joaogasparp',
      href: 'https://linkedin.com/in/joaogasparp/'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@joaogasparp',
      href: 'https://github.com/joaogasparp'
    },
    {
      icon: FiMapPin,
      label: 'Localização',
      value: 'Portugal',
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos <span className="text-primary">Conversar</span>
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Tem um projeto em mente? Quer discutir uma oportunidade? 
              Ou simplesmente quer dizer olá? Adoraria ouvir de si!
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FiMessageCircle className="mr-3 text-primary" size={24} />
                  Envie uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="O seu nome"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Escreva a sua mensagem aqui..."
                    />
                  </div>

                  {/* Status Message */}
                  {status.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center p-4 rounded-lg ${
                        status.type === 'success' ? 'bg-green-500/20 text-green-300' :
                        status.type === 'error' ? 'bg-red-500/20 text-red-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}
                    >
                      {status.type === 'success' && <FiCheckCircle className="mr-2" size={18} />}
                      {status.type === 'error' && <FiAlertCircle className="mr-2" size={18} />}
                      {status.type === 'loading' && (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-300 mr-2"></div>
                      )}
                      {status.message}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    {status.type === 'loading' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <FiSend size={18} />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informações de Contacto
                </h2>
                <p className="text-white/70 mb-8">
                  Prefere contactar diretamente? Pode encontrar-me através dos seguintes meios:
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{item.label}</h3>
                          <p className="text-white/70 text-sm">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Vamos Colaborar!
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Estou sempre interessado em novos projetos desafiantes e 
                  oportunidades de colaboração.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Seja para desenvolvimento web, aplicações desktop, ou consultoria técnica, 
                  vamos discutir como posso ajudar a tornar a sua visão realidade.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
