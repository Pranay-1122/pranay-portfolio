import React from 'react';
import Navigation from '../components/portfolio/navigation';
import HeroSection from '../components/portfolio/hero-section';
import AboutSection from '../components/portfolio/about-section';
import SkillsSection from '../components/portfolio/skills-section';
import ExperienceSection from '../components/portfolio/experience-section';
import ProjectsSection from '../components/portfolio/projects-section';
import EducationSection from '../components/portfolio/education-section';
import ContactSection from '../components/portfolio/contact-section';

const Home: React.FC = () => {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
        </div>
    );
};

export default Home;