import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Code2,
  Cpu,
  ArrowRight,
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Terminal,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";
import { clsx } from "clsx";
import Navbar from "../components/Navbar";
import projects from "../utils/projects";

// --- Skills Data ---
const skills = [
  { name: "Node.js", type: "backend", tag: "Runtime" },
  { name: "Express.js", type: "backend", tag: "Server" },
  { name: "PostgreSQL", type: "backend", tag: "SQL" },
  { name: "Prisma", type: "backend", tag: "ORM" },
  { name: "MongoDB", type: "backend", tag: "NoSQL" },
  { name: "React", type: "frontend", tag: "Library" },
  { name: "Next.js", type: "frontend", tag: "SSR/SSG" },
  { name: "TypeScript", type: "frontend", tag: "Typed" },
  { name: "Tailwind CSS", type: "frontend", tag: "Styling" },
  { name: "Playwright", type: "tools", tag: "E2E Testing" },
  { name: "Git & GitHub", type: "tools", tag: "VCS" },
  { name: "Docker", type: "tools", tag: "DevOps" }
];

// --- Sub-Components ---
const SectionHeader = ({ title, highlight, subtitle }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold tracking-tight"
    >
      {title} <span className="text-primary">{highlight}</span>
    </motion.h2>
    {subtitle && <p className="text-muted mt-4 max-w-xl text-lg">{subtitle}</p>}
  </div>
);

const Developer = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState("all");
  const [projectTab, setProjectTab] = useState("featured"); // "featured" | "all"

  // Skill filtering
  const filteredSkills =
    activeSkillFilter === "all"
      ? skills
      : skills.filter((s) => s.type === activeSkillFilter);

  // Project filtering
  const displayedProjects =
    projectTab === "featured"
      ? projects.filter((p) => p.featured || p.status === "Completed")
      : projects;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="hero" className="md:min-h-screen py-16 flex items-center pt-32 pb-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono mb-4 block tracking-widest uppercase text-sm font-semibold">
              Full-Stack System Architect
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Engineering <span className="text-primary">Scalable</span> Backend & Web Systems.
            </h1>
            <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
              Specializing in robust Node.js APIs, Next.js applications, and optimized database architectures. Crafting resilient digital infrastructure from end-to-end.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                View Systems <ArrowRight size={18} />
              </a>
              <div className="flex gap-5 text-muted">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/simplysaad"
                  className="hover:text-primary transition-colors p-2"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/saad-idris-320271303"
                  className="hover:text-primary transition-colors p-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex justify-center relative opacity-20 hover:opacity-100 transition-opacity duration-300">
            <Terminal size={380} strokeWidth={0.75} className="text-primary" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES / HIGHLIGHTS SECTION */}
      <section className="py-20 bg-card/10 border-y border-border/50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Server size={24} />,
              title: "Backend Architecture",
              desc: "Scalable microservices, RESTful APIs, dynamic query optimization, and secure session/token management."
            },
            {
              icon: <Code2 size={24} />,
              title: "Frontend Engineering",
              desc: "Modern, reactive web interfaces built with Next.js, React, Tailwind CSS, and Framer Motion."
            },
            {
              icon: <Cpu size={24} />,
              title: "Database & Automation",
              desc: "Relational and NoSQL schemas (PostgreSQL, MongoDB), automated testing with Playwright, and CI/CD pipelines."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="py-24" id="skills">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Technical"
            highlight="Stack"
            subtitle="Core technologies and tools used to build production-grade web applications."
          />

          <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
            {["all", "frontend", "backend", "tools"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveSkillFilter(filter)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize border",
                  activeSkillFilter === filter
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "border-border text-muted hover:border-primary/50"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={skill.name}
                  className="p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-colors text-center flex flex-col items-center justify-center gap-1"
                >
                  <span className="font-bold text-foreground text-sm">{skill.name}</span>
                  <span className="text-[10px] uppercase text-primary font-mono tracking-wider font-semibold">
                    {skill.tag}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section className="py-24 bg-card/5 border-t border-border/50" id="projects">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              title="Featured"
              highlight="Deployments"
              subtitle="Production applications and full-stack software systems."
            />

            {/* Filter Toggle: Featured vs All */}
            <div className="flex bg-card/60 p-1 rounded-xl border border-border self-start md:self-auto">
              <button
                onClick={() => setProjectTab("featured")}
                className={clsx(
                  "px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2",
                  projectTab === "featured"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                )}
              >
                <Sparkles size={14} /> Completed
              </button>
              <button
                onClick={() => setProjectTab("all")}
                className={clsx(
                  "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
                  projectTab === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                )}
              >
                All Projects ({projects.length})
              </button>
            </div>
          </div>

          <div className="grid gap-10">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-3xl border border-border bg-card/40 hover:bg-card/70 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="md:w-2/5 overflow-hidden rounded-2xl border border-border bg-muted/20 relative min-h-[220px]">
                    <img
                      src={p.img}
                      alt={p.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {p.category && (
                      <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-md text-foreground text-[11px] font-mono font-medium px-3 py-1 rounded-full border border-border">
                        {p.category}
                      </span>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>

                        {/* Status Badge */}
                        {p.status && (
                          <span
                            className={clsx(
                              "inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border",
                              p.status === "Completed"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                            )}
                          >
                            {p.status === "Completed" ? (
                              <CheckCircle2 size={12} />
                            ) : (
                              <Clock size={12} />
                            )}
                            {p.status}
                          </span>
                        )}
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-6">
                        {p.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-mono font-semibold rounded-full border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border/40">
                      {p.live && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={p.live}
                          className="btn-primary text-xs py-2.5 px-5 rounded-xl flex items-center gap-2 font-medium"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={p.repo}
                          className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2 font-medium"
                        >
                          Source Code <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT SECTION */}
      <footer id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to <span className="text-primary">Architect</span> something?
          </h2>
          <p className="text-muted mb-10 max-w-lg mx-auto text-lg">
            Currently open to backend architecture contracts, full-stack development, and software engineering roles.
          </p>
          <a
            href="mailto:saadidris23@gmail.com"
            className="btn-primary text-lg px-10 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg shadow-primary/20 font-medium transition-transform hover:scale-[1.02]"
          >
            Send a Message <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Developer;