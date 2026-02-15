// {
//   projects.map((p, idx) => <ProjectCard project={p} key={idx} />);
// }


import React from "react";
import { motion } from "framer-motion";
import projects from "../../utils/projects";
import ProjectCard from "../ProjectCard.jsx";

const ProjectSection = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Each project fades in 0.2s after the previous one
      }
    }
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Featured <span className="text-primary">Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted mt-4 max-w-xl text-lg"
          >
            A collection of full-stack applications focusing on scalable backend
            architecture, secure authentication, and automated workflows.
          </motion.p>
        </div>

        {/* Projects Bento-style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Call-to-Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-muted mb-4">
            Want to see more of my technical documentation?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Explore GitHub Archive
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
