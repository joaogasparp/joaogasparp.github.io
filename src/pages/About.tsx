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

  const allSkills = [
    'angular', 'angularjs', 'arduino', 'azure', 'blender',
    'bootstrap', 'c', 'canvasjs', 'chartjs', 'c++',
    'css3', 'd3js', 'dart', 'django', 'docker',
    'figma', 'firebase', 'flask', 'flutter', 'git',
    'graphql', 'html5', 'java', 'javascript', 'kafka',
    'kubernetes', 'linux', 'matlab', 'mongodb', 'mysql',
    'nginx', 'nodejs', 'opencv', 'oracle', 'pandas',
    'postgresql', 'python', 'pytorch', 'rabbitMQ',
    'react', 'reactnative', 'seaborn', 'selenium', 'tailwind', 'tensorflow'
  ];

  const [skillIndex, setSkillIndex] = React.useState(0);
  const skillsPerPage = 20; // 4 rows x 5 columns
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + skillsPerPage) % allSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allSkills.length]);
  const visibleSkills = [];
  for (let i = 0; i < skillsPerPage; i++) {
    visibleSkills.push(allSkills[(skillIndex + i) % allSkills.length]);
  }

  const education = [
    {
      degree: "Master's Degree in Computer and Telematics Engineering",
      institution: "University of Aveiro",
      period: "2024 - Present",
      description: "Advanced training in computer systems, IT, and telematics, with a focus on energy-efficient, high-performance, and sustainable infrastructures for smart cities, IoT, and Industry 5.0."
    },
    {
      degree: "Bachelor's Degree in Computer and Informatics Engineering",
      institution: "University of Aveiro",
      period: "2021 - 2024",
      description: "Bachelor's degree focused on computer systems architecture and communication networks, preparing graduates for innovation and development in the modern Information Society."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Accent color bar */}
      <div className="w-16 h-2 rounded-full mb-8 mx-auto" style={{ background: '#f59e42' }} />
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
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src="/profile-photo.jpg"
                      alt="João Gaspar profile"
                      className="object-cover w-full h-full rounded-2xl border-4 border-white/40 shadow-inner"
                      draggable="false"
                    />
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
                  <a
                    href="/cv_en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4 px-4 py-2 text-center rounded-lg bg-white text-black font-medium border border-gray-200 shadow hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    style={{ minHeight: '2.5rem' }}
                  >
                    <span>Preview CV</span>
                  </a>
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
                      Versatile professional with a strong background in Computers, Informatics, and
                      Telematics, with a high capacity for adaptation and learning. Experienced in
                      software and hardware development, and skilled in analyzing and solving
                      technical problems through critical thinking and a structured approach.
                      Proactive, dynamic, and committed to continuous improvement, with strong
                      teamwork skills and the ability to thrive in challenging environments. 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical & Soft Skills Aligned Grid */}
              <div className="flex flex-col h-full">
                <h3 className="heading-secondary text-lg text-black mb-4 text-center md:text-left">Technical Skills</h3>
                <div className="grid grid-rows-4 grid-cols-5 gap-4 h-full">
                  {visibleSkills.map((skill, idx) => (
                    <motion.div
                      key={skill + idx}
                      variants={itemVariants}
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-center text-center border border-gray-100 hover:border-gray-200 transition-colors text-sm capitalize h-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="body-text text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <h3 className="heading-secondary text-lg text-black mb-4 text-center md:text-left">Soft Skills</h3>
                <div className="grid grid-rows-4 grid-cols-1 gap-4 h-full">
                  <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center text-center border border-gray-100 text-gray-700 text-sm font-medium h-full">
                    Effective communication and teamwork abilities
                  </motion.div>
                  <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center text-center border border-gray-100 text-gray-700 text-sm font-medium h-full">
                    Strong organizational and planning skills
                  </motion.div>
                  <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center text-center border border-gray-100 text-gray-700 text-sm font-medium h-full">
                    Critical thinking and proactivity
                  </motion.div>
                  <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center text-center border border-gray-100 text-gray-700 text-sm font-medium h-full">
                    Adaptability to new environments and technologies
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
