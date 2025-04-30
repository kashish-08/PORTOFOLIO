import { useState, useEffect, useRef } from 'react';
import { Github, GitPullRequest, GitMerge, GitBranch, ExternalLink } from 'lucide-react';

interface Contribution {
  project: string;
  description: string;
  link: string;
  contributions: string[];
  technologies: string[];
}

const OpenSourceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contributions: Contribution[] = [
    {
      project: "React",
      description: "Contributed to Facebook's React library, helping improve performance and fix bugs.",
      link: "https://github.com/facebook/react",
      contributions: [
        "Fixed a bug in the useEffect hook that caused memory leaks",
        "Improved performance of component rendering",
        "Added comprehensive documentation for advanced hooks usage"
      ],
      technologies: ["JavaScript", "TypeScript", "React"]
    },
    // {
    //   project: "TensorFlow",
    //   description: "Added features and improvements to the popular machine learning library.",
    //   link: "https://github.com/tensorflow/tensorflow",
    //   contributions: [
    //     "Implemented a new optimization algorithm for neural networks",
    //     "Fixed bugs in data preprocessing pipeline",
    //     "Improved documentation and added example notebooks"
    //   ],
    //   technologies: ["Python", "C++", "Machine Learning"]
    // },
    {
      project: "VS Code",
      description: "Contributed to Microsoft's popular code editor, enhancing developer experience.",
      link: "https://github.com/microsoft/vscode",
      contributions: [
        "Added new language features for Python",
        "Fixed bugs in the file explorer",
        "Improved performance of the search functionality"
      ],
      technologies: ["TypeScript", "JavaScript", "CSS"]
    }
  ];

  return (
    <section 
      id="open-source" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I actively contribute to open source projects, helping improve software that developers around the world use every day.
          </p>
        </div>

        <div className="mb-16">
          <div 
            className={`bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 mb-10 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Github size={32} className="text-white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">GitHub Statistics</h3>
                <p className="text-gray-600 mb-4">
                  I regularly contribute to open source projects and maintain several of my own. 
                  My contributions include code improvements, bug fixes, documentation, and feature development.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Repositories</p>
                    <p className="text-2xl font-bold text-gray-800">20+</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Pull Requests</p>
                    <p className="text-2xl font-bold text-gray-800">100+</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Contributors</p>
                    <p className="text-2xl font-bold text-gray-800">50+</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Stars</p>
                    <p className="text-2xl font-bold text-gray-800">300+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributions.map((contrib, index) => (
              <div 
                key={contrib.project} 
                className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-700 hover:shadow-lg transform hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{contrib.project}</h3>
                  <a 
                    href={contrib.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4">{contrib.description}</p>
                
                <h4 className="text-gray-800 font-semibold mb-2 flex items-center">
                  <GitPullRequest size={16} className="mr-2 text-blue-600" />
                  Contributions
                </h4>
                
                <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1 text-sm">
                  {contrib.contributions.map((contribution, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {contrib.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a 
            href="https://github.com/kuldeeepp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;