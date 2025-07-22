import React from 'react';
import { FiCalendar, FiMapPin, FiBriefcase, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Marketing & IT",
      company: "AETTUA",
      location: "Aveiro, Portugal",
      period: "2023 - Presente",
      type: "work",
      description: "Responsável pela gestão das redes sociais e manutenção do website da empresa, contribuindo para o aumento da presença digital e engagement com clientes.",
      achievements: [
        "Gestão de múltiplas plataformas de redes sociais",
        "Manutenção e otimização do website corporativo",
        "Criação de conteúdo digital estratégico",
        "Análise de métricas de engagement e crescimento"
      ],
      technologies: ["WordPress", "Adobe Creative Suite", "Google Analytics", "Social Media Management"]
    },
    {
      id: 2,
      title: "Desenvolvedor Freelancer",
      company: "Trabalho Independente",
      location: "Remoto",
      period: "2020 - 2024",
      type: "freelance",
      description: "Desenvolvimento de soluções web e desktop personalizadas para diversos clientes, aplicando metodologias ágeis e foco na satisfação do cliente.",
      achievements: [
        "Entrega de +10 projetos web e desktop",
        "Implementação de metodologias ágeis",
        "Manutenção de relacionamentos de longo prazo com clientes",
        "Diversificação de competências técnicas"
      ],
      technologies: ["Python", "C++", "React", "Django", "HTML/CSS", "JavaScript", "SQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-black mb-4">
              Experiência Profissional
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Percurso profissional marcado pela versatilidade, foco na qualidade e 
              constante aprendizagem em diferentes contextos e tecnologias.
            </p>
            <div className="w-12 h-px bg-black mx-auto mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-200 h-full"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black border-4 border-white z-10"></div>

                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="minimal-card p-6">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 text-xs font-medium border ${
                            exp.type === 'work' 
                              ? 'bg-green-50 text-green-800 border-green-200' 
                              : 'bg-blue-50 text-blue-800 border-blue-200'
                          }`}>
                            {exp.type === 'work' ? 'Emprego' : 'Freelance'}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <FiCalendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-lg font-medium text-black mb-2">
                          {exp.title}
                        </h3>

                        <div className="flex items-center text-black font-medium mb-2">
                          <FiBriefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>

                        <div className="flex items-center text-gray-500 text-sm">
                          <FiMapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-black font-medium mb-3 flex items-center">
                          <FiTrendingUp className="mr-2 text-black" size={16} />
                          Principais Conquistas
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                              <div className="w-2 h-2 bg-black mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-black font-medium mb-3 flex items-center">
                          <FiCode className="mr-2 text-black" size={16} />
                          Tecnologias Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden lg:block lg:w-2/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div variants={cardVariants} className="mt-16">
            <div className="minimal-card p-8 text-center">
              <FiUsers className="mx-auto mb-4 text-black" size={48} />
              <h2 className="text-xl font-medium text-black mb-4">
                Competências Desenvolvidas
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                A experiência profissional permitiu desenvolver não apenas competências técnicas sólidas, 
                mas também capacidades essenciais como gestão de projetos, comunicação com clientes 
                e adaptação a diferentes contextos de trabalho.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <FiBriefcase className="text-black" size={20} />
                  </div>
                  <h3 className="text-black font-medium">Gestão de Projetos</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <FiUsers className="text-black" size={20} />
                  </div>
                  <h3 className="text-black font-medium">Relacionamento com Clientes</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <FiCode className="text-black" size={20} />
                  </div>
                  <h3 className="text-black font-medium">Desenvolvimento Técnico</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <FiTrendingUp className="text-black" size={20} />
                  </div>
                  <h3 className="text-black font-medium">Melhoria Contínua</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
