import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projects: Project[] = [
    {
      title: "Restaurant Website",
      description: "E-Commerce Website for a restaurant | MERN Stack, Responsive Web Design",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React", "MongoDb","Node.js" ,"Express" ],
      github: "https://github.com/kashish-08/FrontendWebsite",
      // demo: "https://dwija-bake-studio.store/",
      featured: true
    },
    // {
    //   title: "-Commerce Platform",
    //   description: "A full-stack e-commerce platform with product management, shopping cart, and payment processing functionality.",
    //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   technologies: ["Next.js", "MongoDB", "Express", "Node.js", "Stripe"],
    //   github: "https://github.com/kuldeeepp/e-commerce-platform",
      // demo: "https://e-commerce.example.com",
    //   featured: true
    // },
    {
      title: "Social Media Dashboard",
      description: "A dashboard that aggregates metrics from various social media platforms and provides insightful analytics.",
      image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
      technologies: ["Html", "tailwind", "angular", "css", ],
      github: "https://github.com/kashish-08/SocialMediaWebsite",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat application with features like group chats, private messaging, and file sharing.",
      image: "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhdHRpbmd8ZW58MHx8MHx8fDA%3D",
      technologies: ["Socket.io", "React", "Express", "MongoDB", "JWT"],
      github: "https://github.com/kashish-08/NodejsProject",
      // demo: "https://chat.example.com",
      featured: true
    },
    // {
    //   title: "Movie Recommendation System",
    //   description: "A machine learning-based movie recommendation system that suggests movies based on user preferences and viewing history.",
    //   image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   technologies: ["Python", "Scikit-Learn", "Django", "PostgreSQL", "React"],
    //   github: "https://github.com/kuldeeepp/movie-recommender",
    //   featured: false
    // },
    // {
    //   title: "Productivity Timer",
    //   description: "A Pomodoro-inspired productivity timer app with task tracking and analytics.",
    //   image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   technologies: ["React", "TypeScript", "localStorage", "PWA", "Chart.js"],
    //   github: "https://github.com/kuldeeepp/productivity-timer",
    //   demo: "https://timer.example.com",
    //   featured: false
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects;

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project allowed me to develop new skills and solve unique challenges.
          </p>
        </div>

        <div 
          className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            {/* <button 
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'featured' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Featured Projects
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-lg transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a 
            href="https://github.com/kashish-08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span className="mr-2">View more projects on GitHub</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;