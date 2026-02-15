import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Install react-icons for a pro look

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col md:flex-row gap-6 p-4 my-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/10">
      {/* Image Container with Zoom Effect */}
      <div className="md:w-[40%] overflow-hidden rounded-xl border border-white/10">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-[60%] flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description ||
              "Building high-performance web applications with a focus on user experience and scalable architecture."}
          </p>

          {/* Dynamic Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech?.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors text-sm"
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <FiGithub size={18} /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
