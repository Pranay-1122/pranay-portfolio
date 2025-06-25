import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    I am a Performance Marketing Analyst with over 1.5 years of experience in driving growth through strategic digital campaigns across various platforms. My expertise lies in data-driven optimization, allowing me to scale businesses effectively.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                    I have a proven track record of achieving significant results, including a 14 ROAS and 20-40% improvements in cost per lead (CPL). My passion for digital marketing drives me to continuously learn and adapt to the ever-changing landscape of online marketing.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;