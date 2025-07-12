import { motion } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
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
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(99, 102, 241, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98
    }
  };

  useEffect(() => {
    // Form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      const handleSubmit = function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
        
        fetch(this.action, {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            submitButton.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
            this.reset();
          } else {
            submitButton.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
          }
        })
        .catch(error => {
          submitButton.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error!';
        })
        .finally(() => {
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          }, 3000);
        });
      };

      contactForm.addEventListener('submit', handleSubmit);
      
      // Cleanup function to remove the event listener
      return () => {
        contactForm.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <motion.section
      id="contact"
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
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#EFEFEF' }}>Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-[2px_1px_13px_Wheat]"
              whileHover="hover"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center" 
                style={{ color: '#EFEFEF' }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-paper-plane mr-3 text-blue-400"></i>
                Contact Information
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="bg-blue-600 text-white p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-envelope"></i>
                  </motion.div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#EFEFEF' }}>Email</h4>
                    <motion.a
                      href="mailto:pritamtung2003@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      pritamtung03@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="bg-green-600 text-white p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-phone-alt"></i>
                  </motion.div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#EFEFEF' }}>Phone</h4>
                    <motion.a
                      href="tel:+919163857728" 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      +91 9339768425
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="bg-purple-600 text-white p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </motion.div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#EFEFEF' }}>Location</h4>
                    <p className="text-gray-400">Hooghly, West Bengal, India</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <motion.h4 
                  className="font-bold mb-4 flex items-center" 
                  style={{ color: '#EFEFEF' }}
                  variants={itemVariants}
                >
                  <i className="fas fa-share-alt mr-2 text-blue-400"></i>
                  Connect with me
                </motion.h4>
                <motion.div 
                  className="flex space-x-4"
                  variants={containerVariants}
                >
                  <motion.a
                    href="https://www.linkedin.com/in/pritam-t-545866266/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-blue-700 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                  <motion.a
                    href="https://github.com/PRITAM-TU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100079777150764" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon bg-blue-600 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                  <motion.a
                    href="#" 
                    className="social-icon bg-blue-500 hover:bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-[2px_1px_13px_Wheat]"
              whileHover="hover"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center" 
                style={{ color: '#EFEFEF' }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                Send Me a Message
              </motion.h3>
              
              <motion.form
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <input type="hidden" name="access_key" value="c179d6b7-708e-4ce7-99e9-04bb34a96d3b" />
                
                <motion.div 
                  className="form-group"
                  variants={formItemVariants}
                >
                  <label htmlFor="name" className="block mb-2 font-medium flex items-center" style={{ color: '#EFEFEF' }}>
                    <i className="fas fa-user mr-2 text-blue-400"></i>
                    Your Name
                  </label>
                  <motion.input
                    id="name" 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)"
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={formItemVariants}
                >
                  <label htmlFor="email" className="block mb-2 font-medium flex items-center" style={{ color: '#EFEFEF' }}>
                    <i className="fas fa-envelope mr-2 text-blue-400"></i>
                    Email Address
                  </label>
                  <motion.input
                    id="email" 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)"
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={formItemVariants}
                >
                  <label htmlFor="message" className="block mb-2 font-medium flex items-center" style={{ color: '#EFEFEF' }}>
                    <i className="fas fa-comment-alt mr-2 text-blue-400"></i>
                    Your Message
                  </label>
                  <motion.textarea
                    id="message" 
                    rows="5" 
                    name="message" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your message"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)"
                    }}
                  ></motion.textarea>
                </motion.div>
                
                <motion.button
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;