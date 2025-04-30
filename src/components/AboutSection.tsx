import { useState, useEffect, useRef } from 'react';
import { CheckCircle, School, Award } from 'lucide-react';

const AboutSection = () => {
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
      { threshold: 0.2 }
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-4">
            Welcome to my portfolio! I am a dedicated learner and aspiring software developer with a strong passion for coding and innovation. I am currently seeking opportunities to contribute meaningfully and grow within a dynamic and forward-thinking technological environment. I take pride in writing clean, efficient code and continuously enhancing my technical and problem-solving abilities. 
            </p>
            <p className="text-gray-600 mb-4">
              My journey in technology began during my undergraduate studies, where I discovered my passion for coding
              and building applications. Since then, I've been continuously learning and expanding my skill set to stay
              at the forefront of technological advancements.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects,
              or sharing my knowledge through technical articles and mentoring.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Attributes</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Strong problem-solving skills with a methodical approach</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Excellent communicator and team collaborator</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Quick learner adaptable to new technologies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Detail-oriented with a focus on code quality and best practices</span>
              </li>
            </ul>
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-purple-50 rounded-2xl p-6 md:p-8 mb-8 border border-purple-100">
              <div className="flex items-center mb-4">
                <School size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="ml-9">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800">B.Tech in Computer Science</h4>
                  <p className="text-gray-600">Lovely Professional University - 8.39 CGPA</p>
                  <p className="text-gray-500 text-sm">2022 - 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Intermediate</h4>
                  <p className="text-gray-600">Model School - 87.4%</p>
                  <p className="text-gray-500 text-sm">2021 - 2022</p>
                </div>
                <div>
                  <br />
                  <h4 className="font-semibold text-gray-800">Matriculation</h4>
                  <p className="text-gray-600">Model School - 96.4%</p>
                  <p className="text-gray-500 text-sm">2019 - 2020</p>
                </div>
              </div>
            </div>

            {/* <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 mb-8 border border-indigo-100">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Internships</h3>
              </div>
              <div className="ml-9">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800">Summer Training</h4>
                  <p className="text-gray-600">GFG-Self Paced DSA</p>
                  <p className="text-gray-500 text-sm">May 2024 - July 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Outlier</h4>
                  <p className="text-gray-600">Freelance</p>
                  <p className="text-gray-500 text-sm">2024 - Present</p>
                </div>
              </div>
            </div> */}

            <div className="bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-100">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Achievements</h3>
              </div>
              <div className="ml-9">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800">
                  Beating 88.6% of the coders on leetcode</h4>
                  
                  <p className="text-gray-500">Achieved distinction for surpassing 88.6% of coders on this platform, demonstrating outstanding problem-solving skills and algorithmic proficiency. Consistently delivered optimized solutions and maintained competitive excellence.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                  50 Days Badge 2024</h4>
                  <p className="text-gray-500">Earned the 50 Days Badge 2024 for ranking among the top 6.9% of Leetcoders, demonstrating consistency and dedication in problem-solving. Maintained strong analytical skills and persistence by solving challenges for 50+ days in 2024.

</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;