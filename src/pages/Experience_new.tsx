import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Company",
      period: "2024 - Present",
      location: "Aveiro, Portugal",
      description: "Developing web applications using React and Node.js. Working on user interface design and backend API development.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      type: "Internship"
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - 2024",
      location: "Remote",
      description: "Created responsive websites and web applications for various clients. Focus on modern design and user experience.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
      type: "Freelance"
    },
    {
      title: "Teaching Assistant",
      company: "University of Aveiro",
      period: "2023 - 2024",
      location: "Aveiro, Portugal",
      description: "Assisted students in programming courses, conducted lab sessions, and helped with project development.",
      technologies: ["Python", "Java", "C++", "Git"],
      type: "Academic"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Recognized for academic excellence",
      year: "2023"
    },
    {
      title: "Hackathon Winner",
      description: "First place in university coding competition",
      year: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "Contributing to various projects on GitHub",
      year: "2022 - Present"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="heading-primary text-4xl md:text-5xl text-black mb-6">
              Experience
            </h1>
            <p className="body-text-light text-lg max-w-2xl mx-auto">
              Professional journey and key achievements in technology
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-secondary text-2xl text-black mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <FiBriefcase className="text-xl text-black" />
                        <h3 className="heading-secondary text-xl text-black">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' ? 'bg-blue-100 text-blue-700' :
                          exp.type === 'Freelance' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="body-text font-medium text-gray-700 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500 space-y-1">
                      <div className="flex items-center space-x-1">
                        <FiCalendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="body-text text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-secondary text-2xl text-black mb-8">Key Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <FiAward className="text-3xl text-black mx-auto mb-4" />
                  <h3 className="heading-secondary text-lg text-black mb-2">{achievement.title}</h3>
                  <p className="body-text text-gray-600 text-sm mb-3">{achievement.description}</p>
                  <span className="body-text text-gray-500 text-xs font-medium">{achievement.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
