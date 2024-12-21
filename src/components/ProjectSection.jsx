import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 flex items-center"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Fun-fact-generator",
      description:
        "A comprehensive project management application with AI-driven insights and task optimization.",
      technologies: ["React", "Node.js", "MongoDB", "AI", "Machine Learning"],
      githubLink: "https://github.com/KavishkaSashmitha/Fun-fact-generator",
      liveLink: "https://kavishkasashmitha.github.io/Fun-fact-generator/",
      image: "/img/01.png",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment integration.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://your-ecommerce-site.com",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Social Media Analytics Dashboard",
      description:
        "Real-time social media analytics dashboard with comprehensive data visualization.",
      technologies: ["React", "Python", "Django", "Chart.js", "WebSockets"],
      githubLink: "https://github.com/yourusername/social-media-analytics",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
