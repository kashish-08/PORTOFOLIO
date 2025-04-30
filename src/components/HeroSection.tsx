import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-purple-50 to-indigo-50"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-purple-600 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Kashish
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Computer Science and Engineering Student
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
            I am currently focused on studying full-stack development to strengthen my skills in both frontend and backend technologies. I’m exploring modern frameworks and tools such as React, Node.js, Express, and MongoDB, with the goal of building scalable, responsive, and user-friendly web applications. My aim is to become a versatile developer capable of handling end-to-end development tasks efficiently.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/kashish-08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kashish-cse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto: aspiringkashu@gmail.com" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-full h-80 md:h-96 lg:h-[30rem]">
              <div className="absolute w-full h-full rounded-2xl bg-purple-100 transform rotate-3"></div>
              <div className="absolute w-full h-full rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
                <img 
                  // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  // src="https://avatars.githubusercontent.com/u/118754536?v=4"
                  src="/formalPic2.jpg"
                  // alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-purple-600 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;