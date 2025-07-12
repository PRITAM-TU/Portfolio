import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header 
        className="sticky top-0 z-40 backdrop-blur-md shadow-sm" 
        style={{ backgroundColor: '#0d1133ff', color: '#efefef' , }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h2 className="logo flex items-center">
            <span className="text-2xl mr-1">👨‍💻</span>
            <span className="text-2xl text-[#efefef]">P<span id="title">ortfolio</span></span>
          </h2>
          
          {/* Mobile menu button (hamburger) */}
          <div className="block lg:hidden  bgcolor-[#ffffff]">
            <button 
              id="nav-toggle" 
              className="focus:outline-none text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i> // Close icon
              ) : (
                <i className="fas fa-bars text-2xl"></i> // Hamburger icon
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center" id="nav-content">
         <NavLink 
            to="/"
            end
            className={({ isActive }) => 
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-[#FFFFFF] hover:bg-gray-50 hover:text-indigo-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="block h-0.5 bg-indigo-600 mt-1 mx-auto w-6/12 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-[#FFFFFF] hover:bg-gray-50 hover:text-indigo-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="block h-0.5 bg-indigo-600 mt-1 mx-auto w-6/12 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
               `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-[#FFFFFF] hover:bg-gray-50 hover:text-indigo-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <span className="block h-0.5 bg-indigo-600 mt-1 mx-auto w-6/12 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
               `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-[#FFFFFF] hover:bg-gray-50 hover:text-indigo-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact us
                {isActive && (
                  <span className="block h-0.5 bg-indigo-600 mt-1 mx-auto w-6/12 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/DownloadCV" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-[#FFFFFF] hover:bg-gray-50 hover:text-indigo-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                CV
                {isActive && (
                  <span className="block h-0.5 bg-indigo-600 mt-1 mx-auto w-6/12 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
          
          <button id="theme-toggle" className="p-2 rounded-full focus:outline-none">
            <img src="moon.png" alt="Toggle theme" id="icon" className="w-6 h-6" />
          </button>
        </nav>
      </div>
      
      <nav id="nav-mobile" className="hidden lg:hidden shadow-lg rounded-lg mt-2 py-2 absolute right-6 w-48" 
           style={{ backgroundColor: '#262626' }}>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `block px-4 py-2 hover:bg-gray-700 flex items-center ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <i className="fas fa-user mr-2"></i> About
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `block px-4 py-2 hover:bg-gray-700 flex items-center ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <i className="fas fa-code mr-2"></i> Projects
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `block px-4 py-2 hover:bg-gray-700 flex items-center ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <i className="fas fa-envelope mr-2"></i> Contact
        </NavLink>
        
        <NavLink 
          to="/cv" 
          className={({ isActive }) => 
            `block px-4 py-2 hover:bg-gray-700 flex items-center ${isActive ? 'text-blue-400' : ''}`
          }
        >
          <i className="fas fa-download mr-2"></i> Download CV
        </NavLink>
        
        <div className="px-4 py-2 flex justify-between items-center">
          <span>Theme:</span>
          <button id="theme-toggle-mobile" className="p-2 rounded-full focus:outline-none">
            <img src="moon.png" alt="Toggle theme" className="w-5 h-5" />
          </button>
        </div>
          </nav>
      
        
        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMobileMenu}
        ></div>
        
        <nav 
          id="nav-mobile" 
          className={`lg:hidden fixed top-0 right-0 h-full w-64 z-40 bg-[#0d1133ff] shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-end p-4">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <div className="px-4 py-2 flex flex-col">
            <NavLink 
              to="/"
              end
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-white hover:bg-gray-700'
                }`
              }
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-home mr-3"></i> Home
            </NavLink>
            
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-white hover:bg-gray-700'
                }`
              }
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-user mr-3"></i> About
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-white hover:bg-gray-700'
                }`
              }
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-code mr-3"></i> Projects
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-white hover:bg-gray-700'
                }`
              }
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-envelope mr-3"></i> Contact
            </NavLink>
            
            <NavLink 
              to="/DownloadCV" 
              className={({ isActive }) => 
                `block px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                    : 'text-white hover:bg-gray-700'
                }`
              }
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-download mr-3"></i> Download CV
            </NavLink>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <div className="px-4 py-2 flex justify-between items-center border-t border-gray-700 pt-4">
              <span className="text-white">Theme:</span>
              <button id="theme-toggle-mobile" className="p-2 rounded-full focus:outline-none text-white">
                <img src="moon.png" alt="Toggle theme" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Back to top button */}
      <button
        id="back-to-top"
        className={`fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Header;