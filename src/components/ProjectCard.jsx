import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="max-w-sm mx-auto my-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                /> */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
