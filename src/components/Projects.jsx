import { motion } from "framer-motion";

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      className="py-20"
      id="projects"
      style={{ backgroundColor: '#262626', color: '#EFEFEF' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">My Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-900 z-0 opacity-50"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and contributions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div 
            className="card-3d bg-gray-800 p-6 rounded-xl shadow-[2px_1px_13px_Wheat] hover:shadow-xl transition-shadow duration-300 shadow-[2px_1px_13px_#5394af]"
            variants={projectVariants}
            whileHover="hover"
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg mb-4 h-48 shadow-[2px_1px_13px_#5394af]"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <img 
                alt="Project 1 screenshot" 
                className="w-full h-full object-cover" 
                src="https://pritam-tu.github.io/pritam_56/sank_game.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Cosmic Snake Adventure</span>
              </div>
            </motion.div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">
                Cosmic Snake Adventure
              </h3>
              <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full">Frontend</span>
            </div>
            <p className="text-gray-300 mb-4">
              "Cosmic Snake Adventure" sounds super cool — like a mix of classic snake games and something space-themed! 🌌🌀
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Responsive</span>
            </div>
            <div className="flex justify-between">
              <motion.a
                className="btn-3d btn-blue flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                href="https://github.com/PRITAM-TU/pyscript" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-code mr-2"></i> View Code
              </motion.a>
              <motion.a
                className="btn-3d btn-secondary flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg"
                href="https://pritam-tu.github.io/pyscript/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live Demo
              </motion.a>
            </div>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div 
            className="card-3d bg-gray-800 p-6 rounded-xl shadow-[2px_1px_13px_Wheat] hover:shadow-xl transition-shadow duration-300"
            variants={projectVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg mb-4 h-48 shadow-[2px_1px_13px_#5394af]"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <img 
                alt="Project 2 screenshot" 
                className="w-full h-full object-cover" 
                src="https://pritam-tu.github.io/pritam_56/email.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Email Validator</span>
              </div>
            </motion.div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">
                Email Validator - Real-time Email Validation Service
              </h3>
              <span className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded-full">JavaScript</span>
            </div>
            <p className="text-gray-300 mb-4">
              Email Validator is a responsive web application that allows users to verify the validity of email addresses in real-time using the EmailValidation.io API.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
            <div className="flex justify-between">
              <motion.a
                className="btn-3d btn-blue flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                href="https://github.com/PRITAM-TU/Verify_Email" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-code mr-2"></i> View Code
              </motion.a>
              <motion.a
                className="btn-3d btn-secondary flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg"
                href="https://pritam-tu.github.io/Verify_Email/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live Demo
              </motion.a>
            </div>
          </motion.div>
          
          {/* Project 3 */}
          <motion.div 
            className="card-3d bg-gray-800 p-6 rounded-xl shadow-[2px_1px_13px_Wheat] hover:shadow-xl transition-shadow duration-300"
            variants={projectVariants}
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg mb-4 h-48 shadow-[2px_1px_13px_#5394af]"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <img 
                alt="Project 3 screenshot" 
                className="w-full h-full object-cover" 
                src="https://pritam-tu.github.io/pritam_56/pokemon-trading-card-game-cards-3.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Pokémon Card Generator</span>
              </div>
            </motion.div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold">
                Pokémon Card Generator
              </h3>
              <span className="bg-red-900 text-red-200 text-xs px-2 py-1 rounded-full">API</span>
            </div>
            <p className="text-gray-300 mb-4">
              Unleash your creativity with this free Pokémon Card Generator! Design custom Pokémon cards featuring your favorite characters, unique stats, and personalized artwork.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="tech-tag bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Audio API</span>
            </div>
            <div className="flex justify-between">
              <motion.a
                className="btn-3d btn-blue flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                href="https://github.com/PRITAM-TU/GITHUB_PROFILE/tree/main/pokemon" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-code mr-2"></i> View Code
              </motion.a>
              <motion.a
                className="btn-3d btn-secondary flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg"
                href="https://heartfelt-cucurucho-afd1b7.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* GitHub Stats */}
        <motion.div 
          className="mt-16 bg-gray-800 p-8 rounded-xl shadow-[2px_1px_13px_Wheat]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fab fa-github mr-3 text-gray-300"></i>
            My GitHub Contributions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="stat-card bg-gray-700 p-6 rounded-lg text-center"
              variants={statCardVariants}
              whileHover="hover"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <i className="fas fa-code-branch"></i> 50+
              </div>
              <div className="text-gray-300">Repositories</div>
            </motion.div>
            <motion.div 
              className="stat-card bg-gray-700 p-6 rounded-lg text-center"
              variants={statCardVariants}
              whileHover="hover"
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">
                <i className="fas fa-code-commit"></i> 50+
              </div>
              <div className="text-gray-300">Commits</div>
            </motion.div>
            <motion.div 
              className="stat-card bg-gray-700 p-6 rounded-lg text-center"
              variants={statCardVariants}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                <i className="fas fa-star"></i> 10+
              </div>
              <div className="text-gray-300">Project Stars</div>
            </motion.div>
          </div>
          <div className="text-center mt-6">
            <motion.a
              href="https://github.com/PRITAM-TU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-3d btn-primary inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fab fa-github mr-2"></i> View My GitHub Profile
            </motion.a>
          </div>
        </motion.div>

        {/* LeetCode Button */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://leetcode.com/u/12peiram/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-decoration-none font-semibold text-base shadow-[2px_1px_13px_Wheat] transition-all duration-300 hover:bg-gray-800 hover:shadow-xl"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <i className="fas fa-code mr-2"></i>
            Visit My LeetCode Profile
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;