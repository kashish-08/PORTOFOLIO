import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height + some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-purple-600">
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('certifications')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Certifications
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <a 
          href="/kashishCV.pdf" 
          download 
          className="hidden md:flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Download size={18} className="mr-2" />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full text-left py-2 text-gray-700 hover:text-purple-600"
                >
                  Contact
                </button>
              </li>
              <li className="pt-2">
                <a 
                  // href="/resume.pdf"
                  // href="C:\Users\Kuldeep\Downloads\KULDEEP CV interview.pdf"
                  // href="/Kuldeep_resume.pdf" 
                  // href="/Reesume.pdf"
                  href="/fullCV.pdf"
                  download 
                  className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;