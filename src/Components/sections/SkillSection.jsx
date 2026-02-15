import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Highly recommended for portfolios
import { clsx } from "clsx";
import skills from "../../utils/skills";

const SkillsSection = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "frontend", "backend", "tools"];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter((skill) => skill.type === filter));
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Technical <span className="text-primary">Toolbox</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={clsx(
                "px-6 py-2 rounded-full border transition-all duration-300 capitalize font-medium",
                activeFilter === filter
                  ? "bg-primary text-black border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-white/10 text-gray-400 hover:border-primary/50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-colors"
              >
                {/* Skill Icon Placeholder - Replace with actual icons/SVGs */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="text-xl font-bold">{skill.name[0]}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {skill.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
