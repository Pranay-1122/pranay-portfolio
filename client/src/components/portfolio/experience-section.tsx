import React from 'react';

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Performance Marketing Analyst",
            company: "DeltaX",
            duration: "June 2021 - Present",
            achievements: [
                "Achieved 14 ROAS through strategic digital campaigns.",
                "Improved CPL efficiency by 20-40% across various platforms."
            ]
        },
        {
            title: "Digital Marketing Intern",
            company: "XYZ Corp",
            duration: "Jan 2021 - May 2021",
            achievements: [
                "Assisted in managing social media campaigns.",
                "Contributed to a 30% increase in engagement rates."
            ]
        }
    ];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold mb-5">Experience</h2>
            <div className="space-y-6">
                {experiences.map((experience, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">{experience.title}</h3>
                        <p className="text-lg text-gray-600">{experience.company}</p>
                        <p className="text-sm text-gray-500">{experience.duration}</p>
                        <ul className="list-disc list-inside mt-2">
                            {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-700">{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;