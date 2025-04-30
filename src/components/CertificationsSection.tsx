import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

const CertificationsSection = () => {
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

  const certifications: Certification[] = [
    {
      title: "Mastering Data Structures and Algorithms Using C and C++ ",
      issuer: "Udemy",
      date: "November 2023",
      description: "Learn to use ChatGPT for powerful data analysis and modeling. Rated 4.8★ by 742+ learners, with 89K+ enrolled.",
      image: "https://imgs.search.brave.com/qwP2NHh2smVHtPz1A_glwPGWdJYuv_m1Oin8H-PZD5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMS8wNi8xX3M2/aGhyZ1I1X3RYcE9f/ajd1S2FITXctMS5w/bmc",
      // link: "https://www.coursera.org/account/accomplishments/specialization/ML"
      link:"https://media-hosting.imagekit.io/b5f1db7940154e03/Screenshot%202025-04-28%20223532.png?Expires=1840467942&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gsFRYyaDMG4T41hL4rj8jCCSsNjMR7APPndz9lU5t76YLTQSjISltCqJrOKo-8bjmmkcdMGSlBjOiOUr2oRM00x3KTJ4FgEUXh14FE5IV24S~LXeW4Xbzv4zPP-P0N005xlmqe9kgTc-ho~qAetZgma~sEsBz2QUYohBw0zzg1C~StVqVVw4Bd6ODnyMELzlGAW0SU9OoDjeIN-mlTaA62O8YzWqoCUMR7-iVciiOSdlxWvcY5hu4TCxEf2ggWHmb4h5u7xldrXR4VRNpqfZb5a-s-ve-3xV~q-1MPpm3zd-eLjWGFa3rVXkWuhvtNpOEADiIH2ymb9LX4gdJSPPxg__"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "November 2024",
      description: "Advanced course on cloud Computing by Swayam-NPTEL.",
      image: "https://imgs.search.brave.com/EkzR6hLg6U1MQ2J1bS9eOeXw6VxVOSpw4wC5B-YbvdU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/OTUzNTEyMC9waG90/by9kYXRhLWNsb3Vk/LXNlcnZlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9am4x/SGJPaFZTOEhrSGtl/VGRlSnNxUXc1NkJW/ckNSQkluWWhrV0tm/T0puND0",
      // link: "https://www.coursera.org/account/accomplishments/professional-cert/FSWD"
      link:"https://media-hosting.imagekit.io/85d7bb5e244343b7/Screenshot%202025-04-28%20223520.png?Expires=1840468001&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LehfwQqBHSmcZJIt~gWDjPAnRgLDks6l-sfkMcKacgsxJp5uyVFVmbCR5sXGwkj2vCE90fLGEhAx7GBfLJ1zdtXCw9G-TDF~Gk0Pcuhb6IUjSomyr--8h08uX~MOlfTTRigZu5CGCB58vzOC8EVvH~4y-PJ9ucnM0u2-5fsQTVxOxTzj13rn0dGwJDgkaA7U0VIcucTuh57zRAt9M6xB4jMZxyv1Rpi0zscPMEv9viHSnwDZRk2QUnaGGv9Mnk4qXVcytzF38Dk4yKGv8lgDTxiTLaW48x~dXsGO2s~a8b2f8TGpDwGNVJN3O7J9dVfggnhQkNsODN~S89BVk-AHpA__"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Johns Hopkins University",
      date: "May 2024",
      description: "A beginner-friendly course that teaches the fundamentals of web development using HTML, CSS, and JavaScript. Focuses on building responsive, interactive websites with real-world applications.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // link: "https://www.youracclaim.com/badges/aws-certified-developer"
      link:"https://www.coursera.org/account/accomplishments/verify/YBM7WBXJHB2U"
    },
    {
      title: "Server side JavaScript with Node.js",
      issuer: "Coursera",
      date: "May 2024",
      description: "Master backend development with the Server-side JavaScript using Node.js certificate course. Learn to build scalable web applications, APIs, and real-time services using Node.js and Express.",
      image: "https://imgs.search.brave.com/M-cRKdGrQB2uE24SpxoFPC1XMgV6spXS7SzwVoMfZGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbnNj/cmlwdGlvbi1iYWNr/ZW5kLXNvZnR3YXJl/LWRldmVsb3BtZW50/LWNvbmNlcHQtd29v/ZGVuLWN1YmVzLWxl/dHRlcnMtc2NhdHRl/cmVkLWJsdXJyZWQt/YmFja2dyb3VuZC0y/NTE4NTcyOTEuanBn",
      // link: "https://www.coursera.org/account/accomplishments/professional-cert/FSWD"
      link:"https://www.coursera.org/account/accomplishments/verify/U54QW44F36VU"
    },
    {
      title: "Dynamic Programming, Greedy Algorithms",
      issuer: "University of Colorado Boulder",
      date: "May 2024",
      description: "This course covers essential algorithmic techniques including dynamic programming and greedy algorithms. It focuses on solving complex problems efficiently using optimal strategies and real-world problem-solving approaches.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // link: "https://www.coursera.org/account/accomplishments/professional-cert/DSPC"
      link:"https://www.coursera.org/account/accomplishments/verify/4BU3E6AE69TU"
    },
    {
      title: "AWS Cloud Computing",
      issuer: "Gokboru Pvt Lmt",
      date: "June 2024",
      description: "Core AWS services including EC2, S3, Lambda, and IAM with hands-on project experience..",
      image: "https://imgs.search.brave.com/CbscFQiwM9NZmfs_EKJiZbQZYc-r2QmZ-RKAX2Ewk08/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hd3MtY2xvdWQt/Y29tcHV0aW5nXzEw/NTU3MzItNDU2NDYu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA",
      // link: "https://www.coursera.org/account/accomplishments/professional-cert/FSWD"
      link:"https://media-hosting.imagekit.io/5155e7d222e34b48/Screenshot%202024-08-31%20131102.png?Expires=1840467815&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kw4jfgYoibC9iuv-ravovF62WSDbC~fyUwfJjVX8g3QBEAbf5KwMHF3r1Ya~2qgAFdVm19tvlBAeJOWoNCMOAIrkUuATyEFVd-FTG87o0xxpvZtPYxiC70X5SrLutmJAZuBvSyMQM2RorHXOviQwCHILb0C4W7b2nSvxZ1VrdS9FxJMnx9KNe~Ri1HIXcyigMqHwaHC5v0iQsfbVjk8mpbE0HU8uVQ5X~zdksfupfuqwqrOSDi1mh9aQCi7Xo-IwJIwp5lG1D62Hts7DZb89JV77BV3Vmq5SJzVS0O8CGoanunLGeWx2xu88IJYTY-PRwiMrW9IaR1z1t-FZxUsRJA__"
    },
  ];

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications & Courses</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I believe in continuous learning and regularly take courses to expand my knowledge and stay updated with the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title} 
              className={`flex bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-1/3 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-2/3 p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                  <div className="bg-purple-100 p-1 rounded-full">
                    <Award size={16} className="text-purple-600" />
                  </div>
                </div>
                
                <p className="text-purple-600 font-medium text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm"
                  >
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;