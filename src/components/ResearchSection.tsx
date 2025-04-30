// import { useState, useEffect, useRef } from 'react';
// import { FileText, ExternalLink, Users, Calendar } from 'lucide-react';

// interface Publication {
//   title: string;
//   authors: string[];
//   journal: string;
//   date: string;
//   abstract: string;
//   link: string;
// }

// const ResearchSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const publications: Publication[] = [
//     {
//       title: "Efficient Deep Learning Models for Edge Computing Applications",
//       authors: ["Kuldeep Gautam", "Jane Smith", "Robert Johnson"],
//       journal: "IEEE Transactions on Neural Networks and Learning Systems",
//       date: "June 2023",
//       abstract: "In this paper, we propose a novel architecture for efficient deep learning model deployment on resource-constrained edge devices. Our approach reduces model size by 60% while maintaining accuracy within 2% of the original performance. We demonstrate the effectiveness of our method on image classification and object detection tasks.",
//       link: "https://ieeexplore.ieee.org/example-publication"
//     },
//     {
//       title: "Explainable AI for Medical Image Analysis: A Comparative Study",
//       authors: ["Kuldeep Gautam", "Michael Wilson", "Sarah Chen"],
//       journal: "Journal of Medical Imaging",
//       date: "March 2023",
//       abstract: "We investigate various explainable AI techniques to enhance interpretability of deep learning models in medical image analysis. Our research compares gradient-based methods, attention mechanisms, and surrogate models to provide insights into model decision-making processes, crucial for clinical applications.",
//       link: "https://journal-of-medical-imaging.org/example-publication"
//     }
//   ];

//   return (
//     <section 
//       id="research" 
//       ref={sectionRef}
//       className="py-20 bg-white"
//     >
//       <div className="container mx-auto px-4">
//         <div 
//           className={`text-center mb-16 transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Research Publications</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             My research focuses on machine learning applications, particularly in computer vision and efficient model deployment.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           {publications.map((pub, index) => (
//             <div 
//               key={pub.title}
//               className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 transition-all duration-700 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="flex items-start">
//                 <div className="mr-4 mt-1">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <FileText className="text-blue-600" size={20} />
//                   </div>
//                 </div>
                
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     {pub.title}
//                   </h3>
                  
//                   <div className="flex flex-wrap gap-y-2 text-sm text-gray-600 mb-4">
//                     <div className="flex items-center mr-6">
//                       <Users size={16} className="mr-1 text-gray-500" />
//                       <span>{pub.authors.join(", ")}</span>
//                     </div>
//                     <div className="flex items-center mr-6">
//                       <FileText size={16} className="mr-1 text-gray-500" />
//                       <span>{pub.journal}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar size={16} className="mr-1 text-gray-500" />
//                       <span>{pub.date}</span>
//                     </div>
//                   </div>
                  
//                   <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                     <h4 className="font-semibold text-gray-800 mb-2">Abstract</h4>
//                     <p className="text-gray-600">{pub.abstract}</p>
//                   </div>
                  
//                   <a 
//                     href={pub.link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
//                   >
//                     <span className="mr-1">Read Publication</span>
//                     <ExternalLink size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           <div 
//             className={`bg-blue-50 p-6 rounded-xl border border-blue-100 transition-all duration-700 delay-400 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//             }`}
//           >
//             <h3 className="text-xl font-bold text-gray-800 mb-3">Research Interests</h3>
//             <ul className="list-disc list-inside space-y-2 text-gray-600">
//               <li>Deep learning for computer vision applications</li>
//               <li>Efficient AI models for edge computing</li>
//               <li>Explainable AI for critical applications</li>
//               <li>Natural language processing for information retrieval</li>
//               <li>Reinforcement learning for robotics</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResearchSection;