import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiExternalLink, FiUsers, FiCalendar } from 'react-icons/fi';

const AcademicProjects: React.FC = () => {
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

  const projects = [
    {
      title: "KeyVaults: Web Application",
      course: "User Interface Design",
      period: "2024",
      description: "Desenvolvimento de uma aplicação web de livraria gamificada, com quizzes, missões, loja virtual e integração de perfis de utilizador.",
      technologies: ["Python (Flask)", "HTML", "CSS", "JavaScript"],
      features: [
        "Sistema de login e registo de utilizadores",
        "Quizzes interativos com feedback imediato",
        "Loja virtual com carrinho de compras",
        "Missões e recompensas gamificadas",
        "Gestão de perfil de utilizador",
        "Página de livestreams e integração de conteúdos multimédia"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/IHC/P/assignment2",
      demo: "",
      teamSize: "3 membros"
    },
    {
      title: "Dark Night: Game",
      course: "Introdução à Computação Gráfica",
      period: "2024",
      description: "Desenvolvimento de uma experiência 3D interativa baseada em WebGL, com modelos, sons e interações em tempo real, simulando um ambiente noturno com elementos de terror.",
      technologies: ["JavaScript", "Three.js", "WebGL", "HTML5", "CSS3"],
      features: [
        "Renderização 3D em tempo real com Three.js",
        "Modelos 3D customizados (GLB/GLTF)",
        "Ambiente sonoro imersivo",
        "Interações com objetos e personagens",
        "Efeitos visuais de iluminação e sombras",
        "Interface web responsiva"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/ICG/projeto",
      demo: "",
      teamSize: "1 membro"
    },
    {
      "title": "Gas Station: Management Application",
      "course": "Base de Dados",
      "period": "2024",
      "description": "Aplicação desktop para gestão de um posto de combustível, incluindo funcionalidades de registo, login, gestão de funcionários, stocks, encomendas e perfis, com interface gráfica e integração com base de dados.",
      "technologies": ["C#", ".NET Windows Forms", "SQL Server"],
      "features": [
        "Autenticação de utilizadores (login e registo)",
        "Gestão de funcionários e perfis",
        "Gestão de stocks de combustível",
        "Criação e visualização de encomendas",
        "Interface gráfica intuitiva",
        "Integração com base de dados relacional",
        "Documentação e apresentação do projeto"
      ],
      "github": "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/BD/P/projeto/APFT_107708_107961",
      "demo": "",
      "teamSize": "2 membros"
    },
    {
      "title": "Database Design and Modeling Project",
      "course": "Base de Dados",
      "period": "2024",
      "description": "Projeto focado na análise, modelação e documentação de requisitos para um sistema de gestão de postos de combustível, incluindo diagramas ER, DER e documentação de requisitos.",
      "technologies": ["SQL", "Modelagem ER", "Ferramentas de diagramas (Visio, PDF)"],
      "features": [
        "Levantamento e documentação de requisitos",
        "Criação de diagramas Entidade-Relacionamento (ER)",
        "Desenvolvimento de Diagramas de Entidade-Relacionamento Estendido (DER)",
        "Documentação detalhada do esquema de dados",
        "Geração de diagramas e documentação em múltiplos formatos (JPG, PDF, VSDX)"
      ],
      "github": "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/BD/P/projeto/APFE_107708_107961",
      "demo": "",
      "teamSize": "2 members"
    },
    {
      title: "SO Memory Management Simulator",
      course: "Sistemas de Operação",
      period: "2023",
      description: "Simulator for memory management techniques and process control in operating systems, including buddy system, first-fit, and swapping algorithms.",
      technologies: ["C++", "CMake", "Linux"],
      features: [
        "Buddy system memory allocation and deallocation",
        "First-fit memory allocation and deallocation",
        "Process Control Table (PCT) management",
        "Swapping and memory fragmentation simulation",
        "Command-line interface for simulation control",
        "Extensive modular codebase with unit tests"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/SO/P/somm23-so1g3-main",
      demo: "",
      teamSize: "6 members"
    },
    {
      "title": "DetiShop: Secure Web Application",
      "course": "Segurança Informática e nas Comunicações",
      "period": "2023",
      "description": "Enhancement of the DetiShop e-commerce platform with advanced security features, including secure authentication, encrypted database, and compliance with security standards.",
      "technologies": ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
      "features": [
        "Secure user authentication and password management",
        "Encrypted database for sensitive data",
        "Role-based access control",
        "Security compliance checklist (ASVS)",
        "User activity logging and monitoring"
      ],
      "github": "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/SIO/P/2nd-project-group_41",
      "demo": "",
      "teamSize": "4 members"
    },
    {
      "title": "DetiShop: Web Application",
      "course": "Segurança Informática e nas Comunicações",
      "period": "2023",
      "description": "Development of an e-commerce web application for DETI, featuring user authentication, product catalog, shopping cart, and order management.",
      "technologies": ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
      "features": [
        "User registration and authentication",
        "Product browsing and search",
        "Shopping cart and checkout process",
        "Order history and user profiles",
        "Forum for user discussions"
      ],
      "github": "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/SIO/P/1st-project-group_41-main",
      "demo": "",
      "teamSize": "4 members"
    },
    {
      title: "IA DigDug",
      course: "Inteligência Artificial",
      period: "2023",
      description: "Clone do clássico DigDug para ensino de IA, onde agentes inteligentes controlam o personagem principal enfrentando inimigos em um ambiente 2D. Inclui visualizador, servidor, cliente e agente AI customizável.",
      technologies: ["Python", "Pygame", "Asyncio", "Websockets", "Flask", "SQLAlchemy"],
      features: [
        "Agente AI customizável para jogar DigDug",
        "Servidor de jogo assíncrono",
        "Visualizador gráfico em tempo real com Pygame",
        "Sistema de pontuação e ranking persistente (Flask + SQLite)",
        "Interface web para visualização de scores",
        "Suporte a múltiplos jogadores/instâncias"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/IA/P/digdug",
      demo: "",
      teamSize: "2 membros"
    },
    {
      title: "PetsPortal: Mobile App",
      course: "Análise de Sistemas",
      period: "2023",
      description: "Aplicação mobile desenvolvida em Flutter para conectar donos de animais a petsitters, com funcionalidades de chat, localização, perfis e publicações.",
      technologies: ["Flutter", "Dart", "Google Maps API", "HTTP", "SQLite (API Python Flask para backend)"],
      features: [
        "Login e registo de utilizadores",
        "Chat entre utilizadores e petsitters",
        "Mapa interativo para localização de petsitters",
        "Perfis personalizados para utilizadores e petsitters",
        "Publicação de fotos e mensagens",
        "Integração com backend em Python Flask"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/2semestre/AS/P/Projeto",
      demo: "",
      teamSize: "4 membros"
    },
    {
      title: "Word Ladder: Busca e Transformação de Palavras",
      course: "Algoritmos e Estruturas de Dados",
      period: "2022",
      description: "Desenvolvimento de uma solução para o problema Word Ladder, utilizando algoritmos de busca e manipulação eficiente de listas de palavras.",
      technologies: ["C", "Makefile"],
      features: [
        "Implementação do algoritmo Word Ladder",
        "Leitura e processamento de grandes listas de palavras",
        "Otimização de busca entre palavras",
        "Automação de compilação e execução com Makefile"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/1semestre/AED/TA2",
      demo: "",
      teamSize: "3 membros"
    },
    {
      title: "Análise de Algoritmos e Geração de Gráficos",
      course: "Algoritmos e Estruturas de Dados",
      period: "2022",
      description: "Projeto focado na análise de desempenho de algoritmos clássicos, geração de gráficos comparativos e otimização de código em C.",
      technologies: ["C", "Makefile", "MATLAB"],
      features: [
        "Implementação e análise de algoritmos clássicos",
        "Medição de tempo de execução dos algoritmos",
        "Geração automática de gráficos de desempenho",
        "Automação de compilação e testes com Makefile"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/1semestre/AED/TA1",
      demo: "",
      teamSize: "3 membros"
    },
    {
      "title": "Contador de Ténis Digital",
      "course": "Laboratórios de Sistemas Digitais",
      "period": "2022",
      "description": "Implementação de um sistema digital completo para contagem e gestão de jogos de ténis, incluindo lógica de jogo, sets, tie-break e interface com displays.",
      "technologies": ["VHDL", "Quartus", "FPGA"],
      "features": [
        "FSMs para gestão de jogos, sets e tie-break",
        "Divisores de clock e debounce de botões",
        "Decodificador para display de 7 segmentos",
        "Testbenches para validação das FSMs",
        "Relatório técnico detalhado e documentação"
      ],
      "github": "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LSD/P/ProjetoFinal",
      "demo": "",
      "teamSize": "2 membros"
    },
    {
      "title": "Temporizador Digital",
      "course": "Laboratórios de Sistemas Digitais",
      "period": "2022",
      "description": "Desenvolvimento de um temporizador digital em VHDL, incluindo contadores, divisores de frequência e decodificadores para display de 7 segmentos.",
      "technologies": ["VHDL", "Quartus", "FPGA"],
      "features": [
        "Contador decrescente de 16 valores",
        "Divisor de frequência configurável",
        "Geração de sinais de blink",
        "Decodificador para display de 7 segmentos",
        "Testbench para validação funcional"
      ],
      "github": "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LSD/P/Mini-Projeto",
      "demo": "",
      "teamSize": "2 membros"
    },
    {
      title: "Caderneta de Cromos Digital",
      course: "Laboratórios de Informática",
      period: "2022",
      description: "Desenvolvimento de uma aplicação web para gestão de coleções de cromos, com autenticação de utilizadores, uploads de imagens, e interface moderna responsiva.",
      technologies: ["Python", "CherryPy", "SQLite", "HTML", "CSS", "JavaScript", "jQuery"],
      features: ["Registo, login e logout de utilizadores com tokens", "Gestão de coleções e cromos com uploads de imagens", "Validação de tokens e permissões de acesso", "Interface responsiva e navegação dinâmica", "Integração com base de dados SQLite"],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LI/TrabalhoFinal/labi2022g10",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "TCP Client-Server Communication Library",
      course: "Laboratórios de Informática",
      period: "2022",
      description: "Implementação de funções universais para comunicação entre cliente e servidor via sockets TCP, com suporte a envio e receção de mensagens em formato JSON e tratamento de erros.",
      technologies: ["Python", "Sockets", "JSON"],
      features: ["Envio e receção exata de dados em sockets TCP", "Transmissão de dicionários como objetos JSON com prefixo de tamanho", "Funções universais para comunicação robusta", "Gestão de erros de transmissão"],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LI/LI_AP_1_2022",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "LaTeX: Web Project",
      course: "Introdução à Engenharia Informática",
      period: "2021",
      description: "Website educativo com conteúdos interativos, exercícios e visualizações para apoio ao estudo de Física, complementado por documentação em LaTeX.",
      technologies: ["HTML", "CSS", "JavaScript", "LaTeX"],
      features: [
        "Visualização de capítulos e conteúdos teóricos",
        "Exercícios interativos com calculadora e gráficos",
        "Relógio em tempo real e mapa interativo",
        "Documentação científica em LaTeX"
      ],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/1semestre/IEI/projeto",
      demo: "",
      teamSize: "2 membros"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Accent color bar */}
      <div className="w-16 h-2 rounded-full mb-8 mx-auto" style={{ background: '#fbbf24' }} />
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="heading-primary text-4xl md:text-5xl text-black mb-6">
              Academic Projects
            </h1>
            <p className="body-text-light text-lg max-w-2xl mx-auto">
              University coursework and research projects showcasing technical skills and problem-solving abilities
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FiCode className="text-xl text-black flex-shrink-0" />
                    <div>
                      <h3 className="heading-secondary text-xl text-black mb-1">{project.title}</h3>
                      <p className="body-text text-gray-600 text-sm">{project.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FiCalendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="body-text text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="body-text font-medium text-black mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="body-text text-gray-600 text-sm flex items-start">
                        <span className="text-black mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FiUsers size={14} />
                    <span>{project.teamSize}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <FiExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicProjects;
