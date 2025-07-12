import { Link } from "react-router-dom";

const Footer = () => {
  

  return (
    <footer 
      className="py-12"
      style={{ backgroundColor: '#0d1133ff', color: '#ffffff' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="logo text-2xl">
              <span className="">P</span>
              <span className="">ortfolio</span>
            </h2>
            <p className="mt-2 ">
              Crafting digital experiences that matter
            </p>
          </div>
          
          {/* Navigation links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link 
              to="/about" 
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className=" hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className=" hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/DownloadCV" 
              className=" hover:text-gray-300 transition-colors"
            >
              Resume
            </Link>
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100079777150764" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-footer w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="#" 
              className="social-icon-footer w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-400 text-white flex items-center justify-center transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/pritam-t-545866266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-footer w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/PRITAM-TU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-footer w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        {/* Copyright and back to top button */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            <i className="far fa-copyright mr-1"></i> 2025 Pritam Tung. All rights reserved.
          </p>
          <p className="mt-2">
            Made with <i className="fas fa-heart text-red-500 mx-1"></i> in India
          </p>
          
          {/* Back to top button */}
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;