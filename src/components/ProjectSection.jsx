// ProjectSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../content/project.json';

const ProjectSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Projects Done So Far..
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
