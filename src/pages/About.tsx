import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    'Resolução de problemas',
    'Comunicação eficaz',
    'Trabalho em equipa',
    'Adaptabilidade',
    'Pensamento crítico',
    'Gestão de tempo'
  ];

  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Fluente' },
    { name: 'Espanhol', level: 'Conversacional' }
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-black mb-4">
              Sobre Mim
            </h1>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <div className="minimal-card p-8 rounded-none border-l-4 border-black">
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Profissional versátil com background sólido em <strong className="text-black">Engenharia Informática e Telemática</strong>, 
                  focado em soluções técnicas estruturadas.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Proativo, com forte capacidade de adaptação e comunicação, sempre em busca de novos desafios 
                  que permitam aplicar e expandir conhecimentos técnicos.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Experiência em desenvolvimento de software, gestão de projetos e trabalho colaborativo, 
                  com foco na entrega de soluções de qualidade.
                </p>
              </div>
            </motion.div>

            {/* Skills & Languages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Soft Skills */}
              <motion.div variants={itemVariants}>
                <div className="minimal-card p-6 h-full">
                  <h2 className="text-xl font-medium text-black mb-6">
                    Competências
                  </h2>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-black mr-3"></div>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants}>
                <div className="minimal-card p-6 h-full">
                  <h2 className="text-xl font-medium text-black mb-6">
                    Idiomas
                  </h2>
                  <div className="space-y-4">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="text-gray-600">{lang.name}</span>
                        <span className="text-black bg-gray-100 px-3 py-1 text-sm">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CV Download */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="minimal-card p-8">
                <h2 className="text-xl font-medium text-black mb-4">
                  Curriculum Vitae
                </h2>
                <p className="text-gray-600 mb-6">
                  Descarregue o meu CV para uma visão completa da experiência e formação.
                </p>
                <a
                  href="/cv_en.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 glass-button text-black hover:text-black transition-all duration-200"
                >
                  <FiDownload className="mr-2" size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
