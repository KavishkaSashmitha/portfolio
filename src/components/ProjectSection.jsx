import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../content/project.json';

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 bg-white shadow-md p-5 rounded-lg hover:shadow-lg transform transition-transform hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 text-center mb-3">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-gray-800 text-white text-sm rounded-md flex items-center space-x-2 hover:bg-gray-700"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-blue-500 text-white text-sm rounded-md flex items-center space-x-2 hover:bg-blue-400"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-8 w-1/2">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            technologies={proj.technologies || []}
            githubLink={proj.githubLink}
            liveLink={proj.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
