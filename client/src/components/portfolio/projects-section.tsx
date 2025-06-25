import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one, highlighting key features and technologies used.',
    link: 'https://example.com/project-one',
    impact: 'Achieved a 30% increase in efficiency.',
  },
  {
    title: 'Project Two',
    description: 'Description of project two, showcasing its impact and technologies.',
    link: 'https://example.com/project-two',
    impact: 'Reduced costs by 20% through optimization.',
  },
  {
    title: 'Project Three',
    description: 'Description of project three, detailing its significance and outcomes.',
    link: 'https://example.com/project-three',
    impact: 'Increased user engagement by 50%.',
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <p className="text-gray-500 italic">{project.impact}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-2 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;