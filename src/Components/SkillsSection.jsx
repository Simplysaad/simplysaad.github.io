import clsx from "clsx";
import { ForkKnife } from "lucide-react";
import { useEffect, useState } from "react";

const skills = [
  {
    name: "HTML/CSS",
    type: "frontend",
    level: 90,
  },
  {
    name: "Javascript",
    type: "frontend",
    level: 80,
  },
  {
    name: "React",
    type: "frontend",
    level: 65,
  },
  {
    name: "typescript",
    type: "frontend",
    level: 90,
  },
  {
    name: "tailwind css",
    type: "frontend",
    level: 78,
  },
  {
    name: "next.js",
    type: "frontend",
    level: 60,
  },
  {
    name: "node.js",
    type: "backend",
    level: 80,
  },
  {
    name: "express.js",
    type: "backend",
    level: 85,
  },
  {
    name: "mongodb",
    type: "backend",
    level: 80,
  },
  {
    name: "posgreSQL",
    type: "backend",
    level: 80,
  },
  {
    name: "jwt",
    type: "tools",
    level: 80,
  },
  {
    name: "agile",
    type: "tools",
    level: 60,
  },
  {
    name: "wordpress",
    type: "tools",
    level: 60,
  },
  {
    name: "figma",
    type: "tools",
    level: 60,
  },
  {
    name: "git/Github",
    type: "tools",
    level: 90,
  },
  {
    name: "Docker",
    type: "tools",
    level: "60",
  },
  {
    name: "VS code",
    Type: "tools",
    level: 95,
  },
  {
    name: "graphQl",
    type: "backend",
    level: 68,
  },
  {
    name: "REST API",
    type: "backend",
    level: 98,
  },
];
const SkillsSection = () => {
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setFilteredSkills(skills);
  }, []);

  const filters = ["all", "frontend", "backend", "tools"];

  function handleFilter(filter) {
    filter ? setActiveFilter(filter) : null;

    if (!filter || filter === "all") {
      return setFilteredSkills(skills);
    } else {
      return setFilteredSkills(skills.filter((skill) => skill.type === filter));
    }
  }

  return (
    <section id="skillsSection" className="section">
      <div className="container">
        <div className="heading">
          <h2 className="text-3xl md:4xl font-bold">
            <span className="">My </span>
            <span className="text-primary"> Skills</span>
          </h2>
        </div>
        <div className="filters flex gap-3 py-8">
          {filters.map((filter, key) => {
            let isActive = filter === activeFilter;
            return (
              <button
                key={key}
                onClick={() => handleFilter(filter)}
                className={clsx(
                  "btn-outline capitalize md:text-lg",
                  isActive ? "btn-primary scale-[1.02]" : ""
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div className="skills grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, key) => (
            <div
              className="card-hover overflow-hidden shadow-xs p-6 rounded-lg bg-card"
              key={key}
            >
              <div className="text-left mb-4">
                <h3 className="title capitalize font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <span className="right-5 float-end"> {skill.level + "%"} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
