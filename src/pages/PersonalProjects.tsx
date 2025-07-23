import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiExternalLink, FiStar, FiCalendar } from 'react-icons/fi';

const PersonalProjects: React.FC = () => {
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
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, clean design, and optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design for all devices",
        "Smooth page transitions",
        "Interactive navigation",
        "Optimized performance"
      ],
      github: "https://github.com/joaogasparp/portfolio",
      demo: "https://joaogasparp.github.io/portfolio",
      status: "Completed",
      year: "2024",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates, user authentication, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time collaboration",
        "User authentication & authorization",
        "Drag & drop task management",
        "Team workspace creation"
      ],
      github: "https://github.com/joaogasparp/task-manager",
      demo: "",
      status: "In Development",
      year: "2024",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with detailed forecasts, location search, and beautiful data visualizations.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      features: [
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based predictions",
        "Data visualization charts"
      ],
      github: "https://github.com/joaogasparp/weather-dashboard",
      demo: "https://joaogasparp-weather.netlify.app",
      status: "Completed",
      year: "2023",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with shopping cart, payment integration, and admin dashboard for product management.",
      technologies: ["Next.js", "Stripe API", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Product catalog & search",
        "Shopping cart & checkout",
        "Payment processing",
        "Admin dashboard"
      ],
      github: "https://github.com/joaogasparp/ecommerce",
      demo: "",
      status: "In Development",
      year: "2024",
      featured: false
    },
    {
      title: "Personal Finance Tracker",
      description: "Budget tracking application with expense categorization, financial goals, and insightful spending analytics.",
      technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
      features: [
        "Expense tracking & categorization",
        "Budget planning & goals",
        "Spending analytics",
        "Cross-platform mobile app"
      ],
      github: "https://github.com/joaogasparp/finance-tracker",
      demo: "",
      status: "Completed",
      year: "2023",
      featured: false
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
      technologies: ["Electron", "CodeMirror", "SQLite", "CSS3"],
      features: [
        "Syntax highlighting for 50+ languages",
        "Tag-based organization",
        "Full-text search",
        "Export & sharing capabilities"
      ],
      github: "https://github.com/joaogasparp/snippet-manager",
      demo: "",
      status: "Completed",
      year: "2023",
      featured: false
    }
  ];

  // Soft skills / acting section
  const personalActivities = [
    {
      title: "Theater and Acting Activities",
      description: (
        <>
          <span>
            Acting in various theater plays, developing communication skills and teamwork abilities.<br />
            Participation in workshops and acting courses.
          </span>
        </>
      )
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Accent color bar */}
      <div className="w-16 h-2 rounded-full mb-8 mx-auto" style={{ background: '#fde047' }} />
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="heading-primary text-4xl md:text-5xl text-black mb-6">
              Personal Projects
            </h1>
            <p className="body-text-light text-lg max-w-2xl mx-auto">
              Side projects and creative experiments/activities showcasing passion for development and innovation
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-secondary text-2xl text-black mb-8 flex items-center">
              <FiStar className="mr-3 text-yellow-500" />
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border-2 border-yellow-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FiCode className="text-xl text-black flex-shrink-0" />
                      <div>
                        <h3 className="heading-secondary text-xl text-black mb-1">{project.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {project.status}
                          </span>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <FiCalendar size={14} />
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
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

                  {/* Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm">Source Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                      >
                        <FiExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-secondary text-2xl text-black mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="heading-secondary text-lg text-black">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="body-text text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Activities (Theater, Acting, etc.) */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className="heading-secondary text-2xl text-black mb-8">Personal Activities</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {personalActivities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="heading-secondary text-lg text-black mb-2">{activity.title}</h3>
                  <div className="body-text text-gray-600 text-base leading-relaxed">{activity.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalProjects;
