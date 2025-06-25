import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'SEO', level: 'Advanced' },
  { name: 'Data Analysis', level: 'Expert' },
];

const SkillsSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-tag">
            <span className="font-semibold">{skill.name}</span>: {skill.level}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;