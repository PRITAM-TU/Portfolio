import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1, delay: 0.5 }
    })
  };

  return (
    <motion.section
      id="about"
      className="py-20"
      style={{ backgroundColor: '#262626', color: '#EFEFEF' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="section-heading text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-900 z-0 opacity-50"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/3 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.img 
                alt="Profile" 
                className="w-64 h-64 object-cover rounded-xl shadow-xl border-4 border-gray-700" 
                src="https://pritam-tu.github.io/pritam_56/image_6.jpg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-medal text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 shadow-[2px_1px_13px_#5394af]"
            variants={itemVariants}
          >
            <div className="bg-gray-800 p-8 rounded-xl shadow-inner">
              <motion.h3 
                className="text-2xl font-bold mb-4 flex items-center"
                whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-user-graduate mr-3 text-blue-400"></i>
                Who am I?
              </motion.h3>
              <motion.p 
                className="mb-6 text-gray-300 leading-relaxed"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                My name is Pritam Tung, a passionate web developer with experience in creating dynamic and responsive websites using modern web technologies. Currently pursuing Bachelor of Technology in Computer Science and Engineering from Hooghly Engineering and Technology College, I'm constantly expanding my technical skills and knowledge.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="bg-gray-700 p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  variants={itemVariants}
                >
                  <h4 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-laptop-code mr-2 text-blue-400"></i>
                    Development Skills
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-400 mr-2"></i>
                      Frontend: HTML5, CSS3, JavaScript
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-400 mr-2"></i>
                      Backend: Python, Java, Node.js
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-400 mr-2"></i>
                      Frameworks: React
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-700 p-4 rounded-lg shadow-sm border-l-4 border-purple-500"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  variants={itemVariants}
                >
                  <h4 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-graduation-cap mr-2 text-purple-400"></i>
                    Education
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-university text-blue-300 mr-2"></i>
                      B.Tech in CSE - HETC (2023-2027)
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-school text-yellow-400 mr-2"></i>
                      Higher Secondary - WBCHSE (2021-2023)
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Link 
                    to="/projects" 
                    className="btn-3d btn-primary flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-eye mr-2"></i> View My Work
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    to="/contact" 
                    className="btn-3d btn-secondary flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-paper-plane mr-2"></i> Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Progress */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center flex items-center justify-center"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-chart-line mr-3 text-blue-400"></i>
            My Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skill 1 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-html5 mr-2 text-orange-500"></i>
                  HTML5
                </span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-orange-500 h-2.5 rounded-full" 
                  custom={90}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
            
            {/* Skill 2 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-css3-alt mr-2 text-blue-500"></i>
                  CSS3
                </span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  custom={85}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
            
            {/* Skill 3 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-js-square mr-2 text-yellow-400"></i>
                  JavaScript
                </span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-yellow-400 h-2.5 rounded-full" 
                  custom={80}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
            
            {/* Skill 4 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-python mr-2 text-blue-400"></i>
                  Python
                </span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-400 h-2.5 rounded-full" 
                  custom={75}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
            
            {/* Skill 5 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-java mr-2 text-red-400"></i>
                  Java
                </span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-red-400 h-2.5 rounded-full" 
                  custom={60}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
            
            {/* Skill 6 */}
            <motion.div 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium flex items-center">
                  <i className="fab fa-react mr-2 text-blue-300"></i>
                  React
                </span>
                <span>30%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-blue-300 h-2.5 rounded-full" 
                  custom={30}
                  variants={skillBarVariants}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;