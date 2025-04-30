// import { useState, useEffect, useRef } from 'react';
// import { FileText, Calendar, ExternalLink, Tag } from 'lucide-react';

// interface BlogPost {
//   title: string;
//   date: string;
//   excerpt: string;
//   link: string;
//   image: string;
//   readTime: string;
//   tags: string[];
// }

// const BlogSection = () => {
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

//   const blogPosts: BlogPost[] = [
//     {
//       title: "Building Scalable APIs with Node.js and Express",
//       date: "October 15, 2023",
//       excerpt: "A comprehensive guide to building robust and scalable RESTful APIs using Node.js and Express with best practices for error handling, validation, and authentication.",
//       link: "https://medium.com/@kuldeepgautam2189/building-scalable-apis",
//       image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       readTime: "8 min read",
//       tags: ["Node.js", "Express", "API", "Backend"]
//     },
//     {
//       title: "Deep Learning for Computer Vision: A Practical Approach",
//       date: "September 3, 2023",
//       excerpt: "Explore how to implement and train convolutional neural networks for image recognition tasks, with practical examples using TensorFlow and PyTorch.",
//       link: "https://medium.com/@kuldeepgautam2189/deep-learning-cv",
//       image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       readTime: "12 min read",
//       tags: ["Deep Learning", "Computer Vision", "TensorFlow", "PyTorch"]
//     },
//     {
//       title: "Optimizing React Applications for Performance",
//       date: "August 18, 2023",
//       excerpt: "Learn advanced techniques to optimize your React applications for better performance, including code splitting, memoization, and effective state management.",
//       link: "https://medium.com/@kuldeepgautam2189/react-performance",
//       image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       readTime: "10 min read",
//       tags: ["React", "Performance", "JavaScript", "Frontend"]
//     },
//     {
//       title: "Understanding Microservices Architecture",
//       date: "July 5, 2023",
//       excerpt: "A deep dive into microservices architecture, its benefits, challenges, and implementation strategies for modern applications.",
//       link: "https://medium.com/@kuldeepgautam2189/microservices-architecture",
//       image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       readTime: "15 min read",
//       tags: ["Microservices", "Architecture", "System Design", "DevOps"]
//     }
//   ];

//   return (
//     <section 
//       id="blog" 
//       ref={sectionRef}
//       className="py-20 bg-gray-50"
//     >
//       <div className="container mx-auto px-4">
//         <div 
//           className={`text-center mb-16 transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Blog & Technical Writing</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             I regularly write about web development, machine learning, and software engineering best practices.
//             Here are some of my recent articles.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {blogPosts.map((post, index) => (
//             <a 
//               key={post.title}
//               href={post.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`block group transition-all duration-700 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//               }`}
//               style={{ transitionDelay: `${index * 100 + 200}ms` }}
//             >
//               <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group-hover:shadow-lg transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={post.image} 
//                     alt={post.title} 
//                     className="w-full h-full object-cover transition-transform group-hover:scale-105"
//                   />
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center text-gray-500 text-sm mb-3">
//                     <Calendar size={14} className="mr-1" />
//                     <span className="mr-3">{post.date}</span>
//                     <FileText size={14} className="mr-1" />
//                     <span>{post.readTime}</span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
//                     {post.title}
//                   </h3>
                  
//                   <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {post.tags.map(tag => (
//                       <span 
//                         key={tag} 
//                         className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//                       >
//                         <Tag size={12} className="mr-1" />
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700 transition-colors text-sm">
//                     <span className="mr-1">Read Article</span>
//                     <ExternalLink size={14} />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         <div 
//           className={`text-center transition-all duration-700 delay-400 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//         >
//           <a 
//             href="https://medium.com/@kuldeepgautam2189" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <span className="mr-2">View All Articles</span>
//             <ExternalLink size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;