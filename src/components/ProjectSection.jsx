import React, { useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import projects from "../content/project.json";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white mr-4">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {title}
          </h3>
        </div>

        <p className="text-blue-50/80 mb-4">{description}</p>

        {technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-900/50 text-blue-200 text-xs font-medium px-2.5 py-1 rounded border border-indigo-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex justify-between items-center mt-auto bg-white/5 p-4 border-t border-white/10 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-60"
        }`}
      >
        <div className="flex space-x-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <span className="text-xs text-blue-200/60">
          {isHovered ? "View Project" : ""}
        </span>
      </div>

      <div
        className={`h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left transition-transform duration-500 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
