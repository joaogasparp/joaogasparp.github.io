import React from 'react';
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress';
}

const AcademicProjects: React.FC = () => {
  // Placeholder projects - can be updated later
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestão Académica",
      year: "2023",
      description: "Desenvolvimento de uma aplicação web para gestão de estudantes, disciplinas e notas. Implementação de autenticação, dashboard administrativo e relatórios.",
      technologies: ["React", "Node.js", "MySQL", "TypeScript"],
      status: "completed"
    },
    {
      id: 2,
      title: "Algoritmos de Otimização",
      year: "2022",
      description: "Implementação e análise comparativa de algoritmos genéticos para resolução de problemas de otimização combinatória.",
      technologies: ["Python", "NumPy", "Matplotlib", "Pandas"],
      status: "completed"
    },
    {
      id: 3,
      title: "Rede de Sensores IoT",
      year: "2023",
      description: "Projeto de uma rede de sensores IoT para monitorização ambiental com transmissão de dados em tempo real.",
      technologies: ["C++", "Arduino", "MQTT", "InfluxDB"],
      status: "in-progress"
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
              Projetos Académicos
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Uma seleção dos projetos mais relevantes desenvolvidos durante o percurso académico, 
              demonstrando aplicação prática de conhecimentos teóricos.
            </p>
            <div className="w-12 h-px bg-black mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="minimal-card p-6 h-full"
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                  }`}>
                    {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiCalendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-black mb-3 hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      <FiGithub size={16} />
                      <span>Código</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      <FiExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div variants={cardVariants} className="text-center mt-12">
            <div className="minimal-card p-6 max-w-md mx-auto">
              <FiCode className="mx-auto mb-3 text-black" size={32} />
              <p className="text-gray-600 text-sm">
                <strong className="text-black">Nota:</strong> Esta secção será atualizada com projetos reais conforme disponibilizados. 
                Os projetos apresentados são exemplos representativos do tipo de trabalho académico desenvolvido.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicProjects;
