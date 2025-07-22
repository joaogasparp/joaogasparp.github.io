import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiHeart, FiTarget, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';

const About: React.FC = () => {
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

  const skills = [
    'React & TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'Docker & Kubernetes',
    'AWS & Azure',
    'Git & CI/CD',
    'Agile Methodologies'
  ];

  const education = [
    {
      degree: "Master's in Informatics and Telecommunications Engineering",
      institution: "University of Aveiro",
      period: "2023 - Present",
      description: "Advanced studies in software engineering, telecommunications, and distributed systems."
    },
    {
      degree: "Bachelor's in Informatics and Telecommunications Engineering", 
      institution: "University of Aveiro",
      period: "2020 - 2023",
      description: "Foundation in computer science, programming, networks, and telecommunications systems."
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
              About Me
            </h1>
            <p className="body-text-light text-lg max-w-2xl mx-auto">
              Passionate about creating innovative solutions through technology
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Photo and Basic Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                    {/* Placeholder for photo - replace with actual image */}
                    <div className="text-center">
                      <FiUser className="text-6xl text-gray-400 mb-4 mx-auto" />
                      <p className="text-sm text-gray-500">Your Photo Here</p>
                      <p className="text-xs text-gray-400 mt-1">Replace with /public/profile-photo.jpg</p>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="text-lg text-black" />
                    <div>
                      <p className="body-text font-medium text-black">Location</p>
                      <p className="body-text text-gray-600 text-sm">Aveiro, Portugal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FiCalendar className="text-lg text-black" />
                    <div>
                      <p className="body-text font-medium text-black">Available</p>
                      <p className="body-text text-gray-600 text-sm">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Column - About & Values */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="space-y-8">
                {/* About Text */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FiUser className="text-2xl text-black" />
                    <h2 className="heading-secondary text-2xl text-black">Who I Am</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="body-text text-gray-700 leading-relaxed">
                      I'm a Computer and Telecommunications Engineering student with a passion for 
                      developing robust and scalable solutions. My journey in technology has been 
                      driven by curiosity and the desire to solve complex problems through code.
                    </p>
                    
                    <p className="body-text text-gray-700 leading-relaxed">
                      Based in Aveiro, Portugal, I combine technical expertise with creative 
                      thinking to build applications that make a difference. I believe in clean 
                      code, user-centered design, and continuous learning.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <FiCode className="text-xl text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-secondary text-lg text-black mb-2">Technical Excellence</h3>
                      <p className="body-text text-gray-600 text-sm">
                        Writing clean, maintainable code with best practices and modern technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FiHeart className="text-xl text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-secondary text-lg text-black mb-2">User Focus</h3>
                      <p className="body-text text-gray-600 text-sm">
                        Creating intuitive experiences that solve real problems for real people.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FiTarget className="text-xl text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-secondary text-lg text-black mb-2">Continuous Growth</h3>
                      <p className="body-text text-gray-600 text-sm">
                        Always learning new technologies and methodologies to stay current.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FiAward className="text-xl text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-secondary text-lg text-black mb-2">Quality First</h3>
                      <p className="body-text text-gray-600 text-sm">
                        Committed to delivering high-quality solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-secondary text-2xl text-black mb-8 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FiAward className="text-xl text-black mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="heading-secondary text-lg text-black mb-2">{edu.degree}</h3>
                  <p className="body-text font-medium text-gray-700 mb-3">{edu.institution}</p>
                  <p className="body-text text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-secondary text-2xl text-black mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <span className="body-text text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
