import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceSection = () => {
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

  const experiences: Experience[] = [
    {
      title: "Summer Training",
      company: "GFG",
      location: "Remote",
      period: "May 2024 - August 2024",
      description: [
        "Memory Address Storage: Pointers store the memory address of another variable, enabling indirect access to its value",

"Efficient Memory Management: They are used to manage dynamic memory allocation, freeing up resources when no longer needed",

"Array and String Handling: Pointers help in efficiently working with arrays and strings by directly accessing and manipulating their elements",

"Function Pointers: Pointers can store the address of functions, allowing for dynamic function calls and callback mechanisms in programs"
        // "Developed and optimized features for Google Cloud Platform using Angular and Go",
        // "Collaborated with cross-functional teams to improve user interface and experience",
        // "Implemented automated testing to improve code quality and reduce bugs",
        // "Participated in code reviews and technical design discussions"
      ],
      skills: ["DSA", "Time-Complexity"]
    },
    {
      title: "Community Development Project",
      company: "Navjyoti India Foundation",
      location: "Gurgaon, India",
      period: "June 2023 - July 2023",
      description: [
        // "Conducted research on deep learning models for computer vision applications",
        // "Implemented and evaluated various CNN architectures for image classification",
        // "Processed and prepared large datasets for model training",
        // "Co-authored a research paper published in a renowned AI conference"
        "Participated in a Community Development Program organized by Navjyoti Foundation under the guidance of Dr. Kiran Bedi during Summer 2023.",

"Focused on water conservation, promoting awareness about the importance of sustainable water usage in rural and semi-urban areas.",

"Assisted in the implementation of water harvesting techniques, including surveys, awareness drives, and community workshops.",

"Enhanced communication, leadership, and teamwork skills through real-world social engagement and environmental outreach."
      ],
      skills: ["Community Engagement", "Project Management ", "Teamwork & Collaboration", "Communication Skills", "Leadership"]
    },
    // {
    //   title: "Web Developer Intern",
    //   company: "Tech Startups Inc.",
    //   location: "Bangalore, India",
    //   period: "May 2022 - August 2022",
    //   description: [
    //     "Developed responsive web applications using React and Node.js",
    //     "Created RESTful APIs for client-server communication",
    //     "Implemented user authentication and authorization using JWT",
    //     "Collaborated with designers to implement UI/UX improvements"
    //   ],
    //   skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
    // },
    {
      title: "Freelancer at Outlier",
      company: "Self-employed",
      location: "Remote",
      period: "2024 - Present",
      description: [
        // "Designed and developed websites for small businesses and startups",
        // "Implemented e-commerce functionality using Stripe and PayPal",
        // "Provided ongoing maintenance and updates for client websites",
        // "Optimized websites for performance and SEO"
        "Freelance Work: Engaged in various tasks on an hourly pay basis, providing flexible, remote solutions",

"Diverse Skills: Utilizes expertise in full-stack development, web technologies, and problem-solving to contribute to multiple projects",

"Collaboration: Works with clients to understand requirements and deliver tailored software solutions.",

"Continuous Learning: Gaining experience in different technologies and industries, enhancing skills and expanding the professional network.",
      ],
      skills: ["HTML/CSS", "JavaScript", "WordPress", "prompt", "UI/UX Design"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey includes Summer-Trainings, research, and freelance work that have helped me develop a diverse skill set.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute top-0 left-[19px] h-full w-1 bg-purple-400 rounded ml-[5px] md:left-1/2 md:ml-0 md:-translate-x-1/2"></div>
            
            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative z-10 mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 left-0 md:left-1/2 mt-1 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap mb-4 text-gray-600 text-sm">
                      <div className="flex items-center mr-6 mb-2">
                        <Calendar size={16} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-blue-50 text-purple-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;