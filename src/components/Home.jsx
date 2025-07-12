import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';



const Home = () => {
  return (
    <section 
      className="hero-3d relative overflow-hidden min-h-screen flex items-center" 
      style={{ backgroundColor: '#212121', color: '#ffffff' ,}}
    >
      {/* Spline animation container (left side) */}
      <div className="absolute top-0 h-full z-0 
           left-0 w-full 
           md:left-[200px] md:w-[calc(100%-200px)]
           lg:left-[380px] lg:w-[calc(100%-380px)]
           xl:left-[380px] xl:w-1/2">
        <Spline 
          scene="https://prod.spline.design/a25TVybJ4CDLOcRC/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Canvas element for potential 3D effects */}
      <canvas id="hero-canvas" className="absolute inset-0 -z-10"></canvas>
      
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content Section */}
        <div className="hero-content lg:w-1/2" id="leftsection" data-aos="slide-left">
          <div className="inline-block bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-4 animate__animated animate__fadeIn">
            <i className="fas fa-rocket mr-1"></i> Welcome to my world!
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hello, I'm</span><br />
            <span className="logo_1 animate__animated animate__fadeIn">PRITAM TUNG</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            <i className="fas fa-quote-left text-blue-400 mr-2"></i>
            A passionate Web Developer crafting digital experiences that matter
            <i className="fas fa-quote-right text-blue-400 ml-2"></i>
          </p>
          
          <div className="flex flex-wrap gap-4">
           <Link 
  to="/about" 
  className="btn-3d btn-primary relative overflow-hidden group flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-100 shadow-lg z-0"
>
  <span className="relative z-10">
    <i className="fas fa-chevron-down mr-2"></i> Explore More
  </span>
  
  {/* Neon glow elements */}
  <div className="
    absolute
    top-[140%] left-0
    w-full h-full
    bg-blue-400
    opacity-60 group-hover:opacity-80
    pointer-events-none
    transition-opacity duration-100
    transform 
    perspective-[0.2em] 
    rotate-x-10 
    scale-x-[1.3] scale-y-[0.40]
    blur-[0.5em]
  "></div>
  
  <div className="
    absolute
    inset-0
    bg-blue-400
    shadow-[0_0_2em_theme(colors.blue.400)]
    -z-10
    opacity-0 group-hover:opacity-100
    transition-opacity duration-100
    rounded-lg
  "></div>
</Link>

<Link 
  to="/contact" 
  className="btn-3d btn-secondary relative overflow-hidden group flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-100 shadow-lg z-0"
>
  <span className="relative z-10">
    <i className="fas fa-paper-plane mr-2"></i> Hire Me
  </span>
  
  {/* Neon glow elements */}
  <div className="
    absolute
    top-[140%] left-0
    w-full h-full
    bg-purple-400
    opacity-60 group-hover:opacity-80
    pointer-events-none
    transition-opacity duration-100
    transform 
    perspective-[0.2em] 
    rotate-x-10 
    scale-x-[1.3] scale-y-[0.40]
    blur-[0.5em]
  "></div>
  
  <div className="
    absolute
    inset-0
    bg-purple-400
    shadow-[0_0_2em_theme(colors.purple.400)]
    -z-10
    opacity-0 group-hover:opacity-100
    transition-opacity duration-100
    rounded-lg
  "></div>
</Link>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="mt-12 animate__animated animate__fadeIn animate__delay-2s">
            <p className="text-gray-400 mb-4 flex items-center">
              <i className="fas fa-cog mr-2 text-blue-400"></i> Tech I work with:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="tech-icon" title="HTML5">
                <i className="fab fa-html5 text-orange-500 text-2xl"></i>
              </div>
              <div className="tech-icon" title="CSS3">
                <i className="fab fa-css3-alt text-blue-500 text-2xl"></i>
              </div>
              <div className="tech-icon" title="JavaScript">
                <i className="fab fa-js-square text-yellow-400 text-2xl"></i>
              </div>
              <div className="tech-icon" title="React">
                <i className="fab fa-react text-blue-400 text-2xl"></i>
              </div>
              <div className="tech-icon" title="Python">
                <i className="fab fa-python text-blue-500 text-2xl"></i>
              </div>
              <div className="tech-icon" title="Java">
                <i className="fab fa-java text-red-400 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="rightsection lg:w-1/2 mt-12 lg:mt-0 flex justify-center" data-aos="flip-up">
          <div className="relative">
            <img 
              alt="Profile" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-700 shadow-2xl animate-slide-up-down" 
              src="https://pritam-tu.github.io/pritam_56/Screenshot%202025-04-14%20222148.png"
            />
            <div className="absolute -bottom-5 -right-5 bg-gray-800 p-3 rounded-full shadow-lg">
              <div className="bg-blue-600 text-white p-3 rounded-full animate-pulse">
                <i className="fas fa-code text-xl"></i>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 bg-gray-800 p-2 rounded-full shadow-lg">
              <div className="bg-green-500 text-white p-2 rounded-full animate-bounce">
                <i className="fas fa-check text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="/about" className="text-gray-400 hover:text-blue-400">
          <i className="fas fa-chevron-down text-2xl"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;