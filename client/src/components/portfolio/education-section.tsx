import React from 'react';

const EducationSection = () => {
    const educationData = [
        {
            degree: "Bachelor of Science in Marketing",
            institution: "University of XYZ",
            year: "2018 - 2022",
            details: "Focused on digital marketing strategies and data analytics."
        },
        {
            degree: "Certification in Google Analytics",
            institution: "Google",
            year: "2021",
            details: "Completed a comprehensive course on data analysis and reporting."
        },
        {
            degree: "Certification in Facebook Ads",
            institution: "Facebook",
            year: "2020",
            details: "Learned advanced techniques for creating and managing ad campaigns."
        }
    ];

    return (
        <section className="py-10 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Education & Certifications</h2>
                <div className="space-y-4">
                    {educationData.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{item.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                            <p className="text-gray-500 dark:text-gray-400">{item.year}</p>
                            <p className="text-gray-500 dark:text-gray-400">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;