import { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, PenTool, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const SkillsSection = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} className="text-blue-600" />,
      skills: [
        { name: 'JavaScript/TypeScript', level: 75 },
        { name: 'React.js', level: 85 },
        // { name: 'Next.js', level: 80 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} className="text-indigo-600" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        // { name: 'Django', level: 75 },
        { name: 'RESTful APIs', level: 70 },
        // { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-green-600" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MySQL', level: 85 },
        // { name: 'Firebase', level: 50 },
        // { name: 'Redis', level: 65 },
      ],
    },
    // {
    //   title: 'Machine Learning',
    //   icon: <Cpu size={24} className="text-purple-600" />,
    //   skills: [
    //     { name: 'Python', level: 90 },
    //     { name: 'TensorFlow', level: 80 },
    //     { name: 'PyTorch', level: 75 },
    //     { name: 'Scikit-Learn', level: 85 },
    //     { name: 'Data Analysis', level: 80 },
    //   ],
    // },
    {
      title: 'Design',
      icon: <PenTool size={24} className="text-pink-600" />,
      skills: [
        { name: 'UI/UX Design', level: 75 },
        { name: 'Figma', level: 55 },
        // { name: 'Adobe XD', level: 70 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Web Accessibility', level: 75 },
      ],
    },
    {
      title: 'Other',
      icon: <Lightbulb size={24} className="text-amber-600" />,
      skills: [
        { name: 'Git/GitHub', level: 75 },
        // { name: 'Docker', level: 75 },
        // { name: 'CI/CD', level: 80 },
        { name: 'AWS/GCP', level: 70 },
        { name: 'Agile/Scrum', level: 60 },
      ],
    },
  ];

  const renderSkillBar = (skill: Skill, index: number) => {
    return (
      <div 
        key={skill.name} 
        className={`mb-4 transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-12'
        }`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      >
        <div className="flex justify-between mb-1">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-gray-500">{skill.level}%</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-purple-200 to-purple-600"
            style={{ 
              width: `${skill.level}%`,
              transition: isVisible ? 'width 1s ease-in-out' : 'none',
              transitionDelay: `${index * 100 + 300}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development and machine learning world.
            Here's a breakdown of my technical expertise and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-50 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => 
                  renderSkillBar(skill, skillIndex)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;