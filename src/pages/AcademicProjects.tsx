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
      title: "Dine&Dash: Food Delivery Platform",
      course: "Service Engineering and Management",
      period: "2025",
      description: "Development of a distributed food delivery platform with microservices architecture, including authentication, payment, route optimization, and real-time tracking.",
      technologies: ["Python", "JavaScript", "React", "FastAPI", "Docker", "Kubernetes"],
      features: [
        "User authentication and authorization service",
        "Payment processing microservice",
        "Route optimization using A* algorithm",
        "Real-time courier and order tracking",
        "Microservices communication and orchestration",
        "Containerization and deployment with Docker and Kubernetes"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/EGS/Projeto",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Canny Edge Detector with CUDA Programming",
      course: "Large Scale Computing",
      period: "2025",
      description: "Implementation of edge detection algorithms in images using CUDA for parallel GPU processing, focusing on performance and optimization.",
      technologies: ["CUDA", "C", "Makefile", "Shell Script"],
      features: [
        "Edge detection with the Canny algorithm",
        "GPU-optimized implementations (CUDA)",
        "Automated test and deployment scripts",
        "Efficient batch image processing"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/blob/main/CLE/Projetos/cle_proj3",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Single-Threaded to Distributed-Memory Using MPI",
      course: "Large Scale Computing",
      period: "2025",
      description: "Development of parallel and distributed applications for text processing and meteorological data analysis, using MPI and single-threaded approaches.",
      technologies: ["C++", "MPI", "CMake", "Makefile"],
      features: [
        "Word counting in large text volumes with MPI",
        "Distributed processing and task parallelization",
        "Analysis of meteorological station data",
        "Comparative implementations: single-threaded and MPI"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/CLE/Projetos/cle_proj2",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Single-Threaded to Multi-Threaded Using C++",
      course: "Large Scale Computing",
      period: "2025",
      description: "Implementation of applications for text processing and meteorological data analysis, using single-threaded and multi-threaded approaches.",
      technologies: ["C++", "POSIX Threads", "CMake", "Makefile"],
      features: [
        "Word counting in large text volumes",
        "Multi-threaded processing for optimized performance",
        "Analysis of meteorological station data",
        "Modular structure with different execution modes"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/CLE/Projetos/cle_proj1",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Network Traffic Analysis Project",
      course: "Computer Networks",
      period: "2025",
      description: "Analysis and classification of network traffic using real-world datasets and geolocation data to identify patterns and anomalies.",
      technologies: ["Python", "Pandas", "Parquet", "GeoLite2"],
      features: [
        "Processing and analysis of large network traffic datasets",
        "Integration with GeoLite2 for IP geolocation",
        "Data visualization and reporting in Jupyter Notebook",
        "Support for multiple data formats (Parquet)"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/SRC/Projetos/src_proj2",
      demo: "",
      teamSize: "1"
    },
    {
      title: "Redundant Network Security and Load Balancing Project",
      course: "Network Security",
      period: "2025",
      description: "Configuration and operational testing of a network with redundant load balancers and firewalls, implementing security policies for DMZ, internal datacenter, and VLANs using GNS3.",
      technologies: [
        "GNS3",
        "Load Balancer",
        "VLANs",
        "Network Routing",
        "Firewall Synchronization"
      ],
      features: [
        "Redundant firewall and load balancer deployment",
        "Network routing and connectivity for multiple VLANs and zones",
        "Firewall state synchronization for high availability",
        "Definition of security zones and inter-zone rules",
        "Implementation of security policies (DDoS mitigation, service restrictions, access controls)",
        "Operational tests and validation of network policies"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/SRC/Projetos/src_proj1",
      demo: "",
      teamSize: "1 member"
    },
    {
      title: "IoT Environmental Monitoring System",
      course: "Embedded Systems Architectures",
      period: "2025",
      description: "Distributed system for environmental monitoring using ESP32 sensors, ESP-NOW communication, and a web dashboard for real-time visualization.",
      technologies: ["ESP32", "C", "Python", "React", "Node.js", "ESP-NOW"],
      features: [
        "Reading of environmental sensors (temperature, humidity, pressure)",
        "Wireless communication between devices via ESP-NOW",
        "Interactive web dashboard for data visualization",
        "Automatic recommendations based on collected data",
        "Monitoring of connection status and server configuration"
      ],
      github: "",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Traffic Engineering of Telecommunication Networks",
      course: "Network Modeling and Performance",
      period: "2024",
      description: "Analysis and optimization of telecommunication networks, including link load calculation, routing strategies, and performance evaluation using different algorithms.",
      technologies: ["MATLAB"],
      features: [
        "Calculation of network link loads",
        "Implementation of shortest path algorithms (k-Shortest Path)",
        "Routing strategies: Greedy Randomized and Hill Climbing",
        "Network simulation and performance analysis"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/MDRS/Projetos/mdrs_proj2",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Performance Evaluation of Point-to-Point Links Supporting Packet Services",
      course: "Network and Service Modeling and Performance",
      period: "2024",
      description: "Performance analysis of communication networks through simulations and study of metrics such as delay, packet loss, and throughput.",
      technologies: ["MATLAB"],
      features: [
        "Simulation of communication networks",
        "Evaluation of delay, loss, and throughput",
        "Generation of performance graphs",
        "Study of different network scenarios"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/MDRS/Projetos/mdrs_proj1",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "CDN Network Design and Simulation",
      course: "Arquiteturas de Comunicação",
      period: "2024",
      description: "Technical design, configuration, and testing of a CDN network with multiple enterprise and SME clients, simulating Points of Presence (PoPs) in Porto, Lisboa, Barcelona, and Chicago. The project includes private networking, traffic engineering, advanced service routing, and SNMP monitoring.",
      technologies: ["GNS3", "Cisco C7200", "VyOS", "MPLS VPN", "VXLAN", "BGP", "SNMP", "Wireshark"],
      features: [
        "Core network assembly and connectivity with Cisco C7200 routers",
        "Private MPLS VPN for SME association with bandwidth guarantees",
        "Advanced service routing for CDN clusters",
        "Layer 2 Ethernet private network for enterprise client with traffic differentiation (QoS)",
        "Traffic engineering with guaranteed bandwidth channels",
        "SNMP monitoring tool for Cisco routers (model, memory, interfaces, traffic load)",
      ],
      github: "",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Accumulator Pipeline Architectures",
      course: "High Performance Architectures",
      period: "2024",
      description: "Design and simulation of accumulator architectures in VHDL, including pipelined and single-cycle versions, with and without integrated barrel shifters.",
      technologies: [
        "VHDL",
        "ModelSim",
        "FPGA Design"
      ],
      features: [
        "Pipelined accumulator implementation",
        "Single-cycle accumulator design",
        "Barrel shifter integration",
        "Testbenches for functional verification",
        "Modular arithmetic components (adder, and/or/xor gates, dual-port RAM)"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/AAD/Projetos/aad_proj2",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "DETI Coins Search Project",
      course: "High Performance Architectures",
      period: "2024",
      description: "Implementation and optimization of algorithms for searching and validating DETI coins using CPU (AVX, AVX2, special instructions), CUDA, and WebAssembly.",
      technologies: [
        "C",
        "CUDA",
        "OpenCL",
        "AVX/AVX2",
        "WebAssembly"
      ],
      features: [
        "Parallel search algorithms for DETI coins",
        "CPU and GPU (CUDA) acceleration",
        "AVX/AVX2 vectorized search",
        "WebAssembly support for browser execution",
        "MD5 hash validation",
        "Utilities for CPU and CUDA performance"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/AAD/Projetos/aad_proj1",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Audio and Image Compression and Coding",
      course: "Information and Coding",
      period: "2024",
      description: "Project dedicated to the implementation of audio compression algorithms, including encoding and decoding using techniques such as Golomb coding and bitstream manipulation.",
      technologies: ["C++", "Makefile", "PPM", "WAV"],
      features: [
        "Implementation of Golomb encoders and decoders",
        "Efficient bitstream manipulation",
        "Audio file compression and decompression",
        "Automated tests for algorithm validation"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/IC/Projetos/ic_proj2",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Multimodal Data Processing",
      course: "Information and Coding",
      period: "2024",
      description: "Project focused on manipulation and analysis of multimodal data, including audio, image, and text, with implementation of basic processing and visualization algorithms.",
      technologies: ["C++", "Makefile", "PPM", "WAV"],
      features: [
        "Manipulation and processing of audio files (WAV)",
        "Processing and visualization of images (PPM)",
        "Generation and analysis of text histograms",
        "Modular structure for different data types"
      ],
      github: "https://github.com/joaogasparp/mect_1ano/tree/main/IC/Projetos/ic_proj1",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "PDraw: Compiler",
      course: "Compilers",
      period: "2024",
      description: "Development of a compiler for the PDraw language, enabling the translation of graphic scripts into vector drawings.",
      technologies: ["Java", "ANTLR", "Python"],
      features: [
        "Lexical and syntactic analysis with ANTLR",
        "Intermediate code generation",
        "Execution of graphic scripts",
        "Support for multiple input examples"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/C/P/pdraw_project",
      demo: "",
      teamSize: "5 members"
    },
    {
      title: "KeyVaults: Web Application",
      course: "Human-Computer Interaction",
      period: "2024",
      description: "Development of a gamified bookstore web application, with quizzes, missions, virtual store, and user profile integration.",
      technologies: ["Python (Flask)", "HTML", "CSS", "JavaScript"],
      features: [
        "User login and registration system",
        "Interactive quizzes with immediate feedback",
        "Virtual store with shopping cart",
        "Gamified missions and rewards",
        "User profile management",
        "Livestream page and multimedia content integration"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/IHC/P/assignment2",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Dark Night: Game",
      course: "Introduction to Computer Graphics",
      period: "2024",
      description: "Development of an interactive 3D experience based on WebGL, with models, sounds, and real-time interactions, simulating a night environment with horror elements.",
      technologies: ["JavaScript", "Three.js", "WebGL", "HTML5", "CSS3"],
      features: [
        "Real-time 3D rendering with Three.js",
        "Custom 3D models (GLB/GLTF)",
        "Immersive sound environment",
        "Interactions with objects and characters",
        "Lighting and shadow visual effects",
        "Responsive web interface"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/ICG/projeto",
      demo: "",
      teamSize: "1 member"
    },
    {
      title: "Gas Station: Management Application",
      course: "Databases",
      period: "2024",
      description: "Desktop application for gas station management, including registration, login, employee, stock, order, and profile management, with graphical interface and database integration.",
      technologies: ["C#", ".NET Windows Forms", "SQL Server"],
      features: [
        "User authentication (login and registration)",
        "Employee and profile management",
        "Fuel stock management",
        "Order creation and visualization",
        "Intuitive graphical interface",
        "Integration with relational database",
        "Project documentation and presentation"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/BD/P/projeto/APFT_107708_107961",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Database Design and Modeling Project",
      course: "Databases",
      period: "2024",
      description: "Project focused on requirements analysis, modeling, and documentation for a gas station management system, including ER diagrams, EER diagrams, and requirements documentation.",
      technologies: ["SQL", "ER Modeling", "Diagram tools (Visio, PDF)"],
      features: [
        "Requirements gathering and documentation",
        "Creation of Entity-Relationship (ER) diagrams",
        "Development of Enhanced Entity-Relationship (EER) diagrams",
        "Detailed data schema documentation",
        "Generation of diagrams and documentation in multiple formats (JPG, PDF, VSDX)"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/2semestre/BD/P/projeto/APFE_107708_107961",
      demo: "",
      teamSize: "2 members"
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
      title: "DetiShop: Secure Web Application",
      course: "Information and Communication Security",
      period: "2023",
      description: "Enhancement of the DetiShop e-commerce platform with advanced security features, including secure authentication, encrypted database, and compliance with security standards.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Secure user authentication and password management",
        "Encrypted database for sensitive data",
        "Role-based access control",
        "Security compliance checklist (ASVS)",
        "User activity logging and monitoring"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/SIO/P/2nd-project-group_41",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "DetiShop: Web Application",
      course: "Information and Communication Security",
      period: "2023",
      description: "Development of an e-commerce web application for DETI, featuring user authentication, product catalog, shopping cart, and order management.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "User registration and authentication",
        "Product browsing and search",
        "Shopping cart and checkout process",
        "Order history and user profiles",
        "Forum for user discussions"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/SIO/P/1st-project-group_41-main",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "IA DigDug",
      course: "Artificial Intelligence",
      period: "2023",
      description: "Clone of the classic DigDug for AI teaching, where intelligent agents control the main character facing enemies in a 2D environment. Includes viewer, server, client, and customizable AI agent.",
      technologies: ["Python", "Pygame", "Asyncio", "Websockets", "Flask", "SQLAlchemy"],
      features: [
        "Customizable AI agent to play DigDug",
        "Asynchronous game server",
        "Real-time graphical viewer with Pygame",
        "Persistent scoring and ranking system (Flask + SQLite)",
        "Web interface for score visualization",
        "Support for multiple players/instances"
      ],
      github: "https://github.com/joaogasparp/leci_3ano/tree/main/1semestre/IA/P/digdug",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "PetsPortal: Mobile App",
      course: "Systems Analysis",
      period: "2023",
      description: "Mobile application developed in Flutter to connect pet owners to petsitters, with chat, location, profiles, and posting features.",
      technologies: ["Flutter", "Dart", "Google Maps API", "HTTP", "SQLite (Python Flask API for backend)"],
      features: [
        "User login and registration",
        "Chat between users and petsitters",
        "Interactive map for locating petsitters",
        "Custom profiles for users and petsitters",
        "Photo and message posting",
        "Integration with Python Flask backend"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/2semestre/AS/P/Projeto",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "Word Ladder: Word Search and Transformation",
      course: "Algorithms and Data Structures",
      period: "2022",
      description: "Development of a solution for the Word Ladder problem, using search algorithms and efficient manipulation of word lists.",
      technologies: ["C", "Makefile"],
      features: [
        "Implementation of the Word Ladder algorithm",
        "Reading and processing of large word lists",
        "Optimized word search",
        "Automated compilation and execution with Makefile"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/1semestre/AED/TA2",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Algorithm Analysis and Graph Generation",
      course: "Algorithms and Data Structures",
      period: "2022",
      description: "Project focused on the performance analysis of classic algorithms, generation of comparative graphs, and code optimization in C.",
      technologies: ["C", "Makefile", "MATLAB"],
      features: [
        "Implementation and analysis of classic algorithms",
        "Measurement of algorithm execution time",
        "Automatic generation of performance graphs",
        "Automated compilation and testing with Makefile"
      ],
      github: "https://github.com/joaogasparp/leci_2ano/tree/main/1semestre/AED/TA1",
      demo: "",
      teamSize: "3 members"
    },
    {
      title: "Digital Tennis Counter",
      course: "Digital Systems Laboratories",
      period: "2022",
      description: "Implementation of a complete digital system for tennis match counting and management, including game logic, sets, tie-break, and display interface.",
      technologies: ["VHDL", "Quartus", "FPGA"],
      features: [
        "FSMs for match, set, and tie-break management",
        "Clock dividers and button debounce",
        "Decoder for 7-segment display",
        "Testbenches for FSM validation",
        "Detailed technical report and documentation"
      ],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LSD/P/ProjetoFinal",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Digital Timer",
      course: "Digital Systems Laboratories",
      period: "2022",
      description: "Development of a digital timer in VHDL, including counters, frequency dividers, and decoders for 7-segment display.",
      technologies: ["VHDL", "Quartus", "FPGA"],
      features: [
        "16-value countdown counter",
        "Configurable frequency divider",
        "Blink signal generation",
        "Decoder for 7-segment display",
        "Testbench for functional validation"
      ],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LSD/P/Mini-Projeto",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "Digital Sticker Album",
      course: "Computer Laboratories",
      period: "2022",
      description: "Development of a web application for managing sticker collections, with user authentication, image uploads, and a modern responsive interface.",
      technologies: ["Python", "CherryPy", "SQLite", "HTML", "CSS", "JavaScript", "jQuery"],
      features: ["User registration, login, and logout with tokens", "Collection and sticker management with image uploads", "Token validation and access permissions", "Responsive interface and dynamic navigation", "Integration with SQLite database"],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LI/TrabalhoFinal/labi2022g10",
      demo: "",
      teamSize: "4 members"
    },
    {
      title: "TCP Client-Server Communication Library",
      course: "Computer Laboratories",
      period: "2022",
      description: "Implementation of universal functions for client-server communication via TCP sockets, supporting sending and receiving messages in JSON format and error handling.",
      technologies: ["Python", "Sockets", "JSON"],
      features: ["Exact sending and receiving of data over TCP sockets", "Transmission of dictionaries as JSON objects with length prefix", "Universal functions for robust communication", "Transmission error handling"],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/2semestre/LI/LI_AP_1_2022",
      demo: "",
      teamSize: "2 members"
    },
    {
      title: "LaTeX: Web Project",
      course: "Introduction to Computer Engineering",
      period: "2021",
      description: "Educational website with interactive content, exercises, and visualizations to support Physics studies, complemented by LaTeX documentation.",
      technologies: ["HTML", "CSS", "JavaScript", "LaTeX"],
      features: [
        "Visualization of chapters and theoretical content",
        "Interactive exercises with calculator and graphs",
        "Real-time clock and interactive map",
        "Scientific documentation in LaTeX"
      ],
      github: "https://github.com/joaogasparp/leci_1ano/tree/main/1semestre/IEI/projeto",
      demo: "",
      teamSize: "2 members"
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
