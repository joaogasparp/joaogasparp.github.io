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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-primary">Experiência</span> Profissional
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Percurso profissional marcado pela versatilidade, foco na qualidade e 
              constante aprendizagem em diferentes contextos e tecnologias.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full"></div>

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
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white/10 z-10"></div>

                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="glass-card p-8 rounded-2xl">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'work' 
                              ? 'bg-green-500/20 text-green-300' 
                              : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {exp.type === 'work' ? 'Emprego' : 'Freelance'}
                          </span>
                          <div className="flex items-center text-white/60 text-sm">
                            <FiCalendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>

                        <div className="flex items-center text-primary font-medium text-lg mb-2">
                          <FiBriefcase size={18} className="mr-2" />
                          {exp.company}
                        </div>

                        <div className="flex items-center text-white/60 text-sm">
                          <FiMapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <FiTrendingUp className="mr-2 text-primary" size={18} />
                          Principais Conquistas
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-white/70 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <FiCode className="mr-2 text-primary" size={18} />
                          Tecnologias Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
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
            <div className="glass-card p-8 rounded-2xl text-center">
              <FiUsers className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-2xl font-bold text-white mb-4">
                Competências Desenvolvidas
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl mx-auto mb-8">
                A experiência profissional permitiu desenvolver não apenas competências técnicas sólidas, 
                mas também capacidades essenciais como gestão de projetos, comunicação com clientes 
                e adaptação a diferentes contextos de trabalho.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiBriefcase className="text-primary" size={24} />
                  </div>
                  <h3 className="text-white font-semibold">Gestão de Projetos</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiUsers className="text-primary" size={24} />
                  </div>
                  <h3 className="text-white font-semibold">Relacionamento com Clientes</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiCode className="text-primary" size={24} />
                  </div>
                  <h3 className="text-white font-semibold">Desenvolvimento Técnico</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiTrendingUp className="text-primary" size={24} />
                  </div>
                  <h3 className="text-white font-semibold">Melhoria Contínua</h3>
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
