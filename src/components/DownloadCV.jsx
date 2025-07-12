const DownloadCV = () => {
  return (
    <section 
      className="py-20" 
      id="download"
      style={{ backgroundColor: '#262626', color: '#EFEFEF' }}
    >
      <div className="container mx-auto px-6 text-center " data-aos="slide-left">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl  border-gray-700 shadow-[2px_1px_13px_Wheat]">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <i className="fas fa-file-download mr-3 text-blue-400"></i>
            Download My Resume
          </h2>
          <p className="text-gray-400 mb-8">
            Want to know more about my professional journey? Download my detailed resume to see my full experience, skills, and education.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="Resume.pdf" 
              download="Pritam_Tung_Resume.pdf"
              className="btn-download bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <i className="fas fa-file-pdf mr-2"></i>
              Download PDF
            </a>
            
            <a 
              href="Pritam Tung.odt" 
              download="Pritam_Tung_Resume.docx"
              className="btn-download bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <i className="fas fa-file-word mr-2"></i>
              Download DOCX
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
              <i className="fas fa-certificate mr-2 text-yellow-400"></i>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="certificate-card bg-gray-700 p-4 rounded-lg shadow border-l-4 border-blue-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fas fa-code mr-2 text-blue-400"></i>
                  Web Development
                </h4>
                <p className="text-sm text-gray-400">CodeAlpha - 2025</p>
              </div>
              <div className="certificate-card bg-gray-700 p-4 rounded-lg shadow border-l-4 border-green-500">
                <h4 className="font-bold mb-2 flex items-center">
                  <i className="fab fa-python mr-2 text-green-400"></i>
                  Python Programming
                </h4>
                <p className="text-sm text-gray-400">Coursera - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;