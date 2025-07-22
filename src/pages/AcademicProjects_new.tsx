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
      title: "Distributed Systems Project",
      course: "Advanced Computer Systems",
      period: "2024",
      description: "Implementation of a distributed file system using consensus algorithms and fault tolerance mechanisms.",
      technologies: ["Java", "Docker", "Kubernetes", "gRPC"],
      features: [
        "Raft consensus algorithm implementation",
        "Fault-tolerant architecture",
        "Load balancing and scalability",
        "Performance monitoring dashboard"
      ],
      github: "https://github.com/joaogasparp/distributed-systems",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "Network Security Analyzer",
      course: "Computer Networks Security",
      period: "2024",
      description: "A comprehensive tool for analyzing network traffic and detecting security vulnerabilities and threats.",
      technologies: ["Python", "Wireshark", "Flask", "SQLite"],
      features: [
        "Real-time packet analysis",
        "Threat detection algorithms",
        "Security report generation",
        "Web-based dashboard"
      ],
      github: "https://github.com/joaogasparp/network-analyzer",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Machine Learning Pipeline",
      course: "Artificial Intelligence",
      period: "2023",
      description: "End-to-end machine learning pipeline for predictive analytics with data preprocessing and model deployment.",
      technologies: ["Python", "TensorFlow", "Pandas", "FastAPI"],
      features: [
        "Automated data preprocessing",
        "Multiple ML model support",
        "Model performance comparison",
        "RESTful API for predictions"
      ],
      github: "https://github.com/joaogasparp/ml-pipeline",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "IoT Monitoring System",
      course: "Internet of Things",
      period: "2023",
      description: "Smart monitoring system for environmental data collection using IoT sensors and real-time visualization.",
      technologies: ["Arduino", "Node.js", "MongoDB", "React"],
      features: [
        "Sensor data collection",
        "Real-time data visualization",
        "Alert system for thresholds",
        "Mobile-responsive interface"
      ],
      github: "https://github.com/joaogasparp/iot-monitoring",
      demo: "",
      teamSize: "5 members"
    },
    {
      title: "Database Management System",
      course: "Database Systems",
      period: "2022",
      description: "Custom database management system with SQL query processing and transaction management capabilities.",
      technologies: ["C++", "SQL", "Qt", "CMake"],
      features: [
        "SQL query parser and executor",
        "ACID transaction support",
        "B+ tree indexing",
        "Graphical query interface"
      ],
      github: "https://github.com/joaogasparp/dbms",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Compiler Design Project",
      course: "Programming Languages",
      period: "2022",
      description: "Complete compiler implementation for a custom programming language with lexical, syntax, and semantic analysis.",
      technologies: ["C", "Flex", "Bison", "LLVM"],
      features: [
        "Lexical and syntax analysis",
        "Semantic error checking",
        "Code optimization",
        "Assembly code generation"
      ],
      github: "https://github.com/joaogasparp/compiler",
      demo: "",
      teamSize: "2 members"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
