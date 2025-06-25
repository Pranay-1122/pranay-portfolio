import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-brand-blue to-brand-teal text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Pranay Dedge</h1>
            <p className="text-xl mb-8">Performance Marketing Analyst | Digital Growth Specialist</p>
            <div className="flex space-x-4">
                <a href="#projects" className="bg-white text-brand-blue px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View Projects
                </a>
                <a href="#contact" className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-brand-blue transition">
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default HeroSection;