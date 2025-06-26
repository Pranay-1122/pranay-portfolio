import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';

import Home from './pages/home';
import NotFound from './pages/not-found';
import Navigation from './components/portfolio/navigation';
import HeroSection from './components/portfolio/hero-section';
import AboutSection from './components/portfolio/about-section';
import SkillsSection from './components/portfolio/skills-section';
import ExperienceSection from './components/portfolio/experience-section';
import ProjectsSection from './components/portfolio/projects-section';
import EducationSection from './components/portfolio/education-section';
import ContactSection from './components/portfolio/contact-section';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
