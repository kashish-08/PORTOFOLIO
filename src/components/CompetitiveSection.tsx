import { useState, useEffect, useRef } from 'react';
import { Trophy, Users, Code, Globe, ExternalLink } from 'lucide-react';

interface Competition {
  title: string;
  category: 'hackathon' | 'contest';
  date: string;
  position?: string;
  organization: string;
  description: string;
}

const CompetitiveSection = () => {
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

  const competitions: Competition[] = [
    {
      title: "Smart India Hackathon 2024",
      category: "hackathon",
      date: "September 2024",
      position: "participated",
      organization: "Ministry of Education (MoE)'s Innovation Cell",
      description: "arm Ease is an app that connects farmers directly with buyers, using AI and ML to recommend the best crops based on soil, climate, and market trends."
    },
    // {
    //   title: "Google Coding Competition",
    //   category: "contest",
    //   date: "August 2023",
    //   position: "Top 5%",
    //   organization: "Google",
    //   description: "Solved complex algorithmic problems within time constraints. Implemented efficient solutions using optimal data structures and algorithms."
    // },
    // {
    //   title: "Sustainability Hackathon",
    //   category: "hackathon",
    //   date: "May 2023",
    //   position: "2nd Place",
    //   organization: "GreenTech Foundation",
    //   description: "Built a platform for tracking and reducing personal carbon footprint. Integrated with IoT devices for real-time energy consumption monitoring."
    // },
    {
      title: "LeetCode Weekly Contest",
      category: "contest",
      date: "Ongoing",
      organization: "LeetCode",
      description: "Regular participant in weekly coding contests with consistent ranking in the top 10%. Focus on algorithm efficiency and problem-solving skills."
    },
    // {
    //   title: "HackHealth 2022",
    //   category: "hackathon",
    //   date: "November 2022",
    //   position: "Finalist",
    //   organization: "HealthTech Association",
    //   description: "Created a telehealth solution for remote patient monitoring using wearable devices and real-time data analysis."
    // },
    // {
    //   title: "CodeChef Long Challenge",
    //   category: "contest",
    //   date: "Monthly",
    //   organization: "CodeChef",
    //   description: "Active participant in monthly coding challenges, focusing on advanced data structures and competitive programming techniques."
    // }
  ];

  const platforms = [
    { name: "LeetCode", handle: "aspiringkashu", link: "https://leetcode.com/u/aspiringkashu/" },
    { name: "GeeksForGeeks", handle: "kashish11", link: "https://www.geeksforgeeks.org/user/kashish11/" },
    // { name: "Codeforces", handle: "kuldeep_g", link: "https://codeforces.com/profile/kuldeep_g" },
    { name: "HackerRank", handle: "@aspiringkashu", link: "https://www.hackerrank.com/profile/aspiringkashu" }
  ];

  return (
    <section 
      id="competitive" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Competitive Programming & Hackathons</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I actively participate in coding competitions and hackathons to sharpen my problem-solving skills and collaborate with other developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Trophy className="text-purple-600 mr-3" size={24} />
              <span>Notable Competitions</span>
            </h3>
            
            <div className="space-y-6">
              {competitions.map((comp, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-md ${
                    comp.category === 'hackathon' ? 'border-l-4 border-l-purple-500' : 'border-l-4 border-l-purple-500'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{comp.title}</h4>
                      <p className="text-gray-600 text-sm">{comp.organization} • {comp.date}</p>
                    </div>
                    {comp.position && (
                      <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {comp.position}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Code className="text-purple-600 mr-3" size={24} />
                <span>Coding Profiles</span>
              </h3>
              
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <a 
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-colors"
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe size={20} className="text-purple-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">{platform.name}</h4>
                          <p className="text-gray-500 text-sm">{platform.handle}</p>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-gray-400" />
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="text-purple-600 mr-2" size={20} />
                  <span>Skills Demonstrated</span>
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Data Structures", "Algorithms", "Time Complexity", "Dynamic Programming", "Graph Theory", "Team Collaboration", "Prompt Engineering"].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSection;