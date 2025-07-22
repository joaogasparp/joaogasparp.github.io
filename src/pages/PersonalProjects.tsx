import React from 'react';
import { FiGithub, FiExternalLink, FiCalendar, FiUsers, FiTool } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'web' | 'desktop' | 'full-stack';
  client: string;
  github?: string;
  demo?: string;
}

const PersonalProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestão Comercial",
      period: "2023-2024",
      description: "Desenvolvimento de uma aplicação desktop para gestão de inventário, vendas e clientes para pequenas empresas. Inclui relatórios automáticos e backup de dados.",
      technologies: ["Python", "Tkinter", "SQLite", "Pandas"],
      type: "desktop",
      client: "Empresa Local"
    },
    {
      id: 2,
      title: "Website Corporativo",
      period: "2022-2023",
      description: "Criação de website responsivo para empresa de serviços, incluindo catálogo de produtos, formulário de contacto e integração com redes sociais.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      type: "web",
      client: "Startup Tecnológica"
    },
    {
      id: 3,
      title: "Plataforma E-commerce",
      period: "2023",
      description: "Desenvolvimento de uma plataforma completa de e-commerce com painel administrativo, gestão de produtos e sistema de pagamentos.",
      technologies: ["React", "Django", "PostgreSQL", "Stripe"],
      type: "full-stack",
      client: "Loja Online"
    },
    {
      id: 4,
      title: "Aplicação de Monitorização",
      period: "2022",
      description: "Sistema de monitorização em tempo real para equipamentos industriais com alertas automáticos e dashboard interativo.",
      technologies: ["C++", "Qt", "MySQL", "WebSockets"],
      type: "desktop",
      client: "Indústria Manufatureira"
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'web': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'desktop': return 'bg-green-50 text-green-800 border-green-200';
      case 'full-stack': return 'bg-purple-50 text-purple-800 border-purple-200';
      default: return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'web': return 'Web';
      case 'desktop': return 'Desktop';
      case 'full-stack': return 'Full-Stack';
      default: return type;
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
              Projetos Pessoais
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Projetos desenvolvidos como freelancer entre 2020-2024, focando na resolução prática de problemas 
              reais para diversos clientes e setores de atividade.
            </p>
            <div className="w-12 h-px bg-black mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="minimal-card p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 text-xs font-medium border ${getTypeColor(project.type)}`}>
                      {getTypeLabel(project.type)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiCalendar size={14} className="mr-1" />
                    {project.period}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-black mb-3 hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                {/* Client */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FiUsers size={14} className="mr-1" />
                  {project.client}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
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
                <div className="flex space-x-4">
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

          {/* Skills Summary */}
          <motion.div variants={cardVariants} className="mt-16">
            <div className="minimal-card p-8 text-center">
              <FiTool className="mx-auto mb-4 text-black" size={48} />
              <h2 className="text-xl font-medium text-black mb-4">
                Abordagem de Desenvolvimento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <span className="text-black font-medium">01</span>
                  </div>
                  <h3 className="text-black font-medium mb-2">Análise de Requisitos</h3>
                  <p className="text-gray-600 text-sm">Compreensão detalhada das necessidades do cliente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <span className="text-black font-medium">02</span>
                  </div>
                  <h3 className="text-black font-medium mb-2">Desenvolvimento Ágil</h3>
                  <p className="text-gray-600 text-sm">Implementação iterativa com feedback contínuo</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 border flex items-center justify-center mx-auto mb-3">
                    <span className="text-black font-medium">03</span>
                  </div>
                  <h3 className="text-black font-medium mb-2">Entrega de Qualidade</h3>
                  <p className="text-gray-600 text-sm">Testes rigorosos e documentação completa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalProjects;
