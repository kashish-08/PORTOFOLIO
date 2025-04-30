import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
// import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import CompetitiveSection from './components/CompetitiveSection';
// import OpenSourceSection from './components/OpenSourceSection';
// import BlogSection from './components/BlogSection';
// import ResearchSection from './components/ResearchSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


// import styles from './App.module.css';
function App() {
  return (
    <div className="min-h-screen bg-whitw">
    {/* <div className={styles.container}> */}
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <CertificationsSection />
      <CompetitiveSection />
      {/* <OpenSourceSection /> */}
      {/* <BlogSection /> */}
      {/* <ResearchSection /> */}
      <ContactSection />
      <Footer />
    </div>
    
  );
}

export default App;