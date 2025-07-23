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
      title: "Marketing and IT",
      company: "AETTUA",
      period: "2024 - Present",
      location: "Aveiro, Portugal",
      description: "At the Associação de Electrónica, Telecomunicações e Telemática da Universidade de Aveiro (AETTUA), responsible for marketing and IT. Help publicize academic projects through social networks and maintain the association's website.",
      technologies: ["Social Media", "Web Maintenance"],
      type: "Association"
    },
    {
      title: "Aveiro Tech City Hackathon (1st Edition)",
      company: "Aveiro Tech City",
      period: "2022",
      location: "Aveiro, Portugal",
      description: "Participation in the first edition of the Aveiro Tech City Hackathon, collaborating with a multidisciplinary team to develop innovative tech solutions under time constraints.",
      technologies: ["Hackathon", "Teamwork", "Innovation"],
      type: "Competition"
    },
    {
      title: "Web and Desktop Developer",
      company: "Freelancer",
      period: "2020 - 2024",
      location: "Remote",
      description: "Developed various web and desktop projects focused on creating effective solutions for client problems. Implemented agile development practices to ensure fast and high-quality deliveries.",
      technologies: ["Python", "HTML", "C++", "React", "Django"],
      type: "Freelance"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Accent color bar */}
      <div className="w-16 h-2 rounded-full mb-8 mx-auto" style={{ background: '#10b981' }} />
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
                          exp.type === 'Association' ? 'bg-purple-100 text-purple-700' :
                          exp.type === 'Competition' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
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
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
