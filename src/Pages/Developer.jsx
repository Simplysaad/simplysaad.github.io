
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Code2, Cpu, ArrowRight, Github,
  Linkedin, ExternalLink, Mail, Terminal
} from "lucide-react";
import { clsx } from "clsx";
import Navbar from "../components/Navbar";
import projects from "../utils/projects";

// --- Data ---
const skills = [
  { name: "Node.js", type: "backend", tag: "Runtime" },
  { name: "Express.js", type: "backend", tag: "Server" },
  { name: "MongoDB", type: "backend", tag: "NoSQL" },
  { name: "React", type: "frontend", tag: "Hooks" },
  { name: "Next.js", type: "frontend", tag: "SSR/SSG" },
  { name: "TypeScript", type: "frontend", tag: "Typed" },
  { name: "Tailwind", type: "frontend", tag: "Styling" },
  { name: "Docker", type: "tools", tag: "DevOps" },
  { name: "Git", type: "tools", tag: "VCS" },
];

// --- Components ---

const SectionHeader = ({ title, highlight, subtitle }) => (
  <div className="mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-bold tracking-tight"
    >
      {title} <span className="text-primary">{highlight}</span>
    </motion.h2>
    <p className="text-muted mt-4 max-w-xl text-lg">{subtitle}</p>
  </div>
);

const Developer = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills = activeFilter === "all"
    ? skills
    : skills.filter(s => s.type === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* 1. HERO SECTION */}
      <section id="hero" className="md:min-h-screen py-16 flex items-center pt-32 pb-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-mono mb-4 block tracking-widest uppercase text-sm">Full-Stack System Architect</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Engineering <span className="text-primary">Scalable</span> Backend Ecosystems.
            </h1>
            <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
              Specializing in high-performance APIs and robust Node.js architectures. I build the digital engines that power seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2">View Systems <ArrowRight size={18} /></a>
              <div className="flex gap-5 text-muted">
                <a target="_blank" href="https://github.com/simplysaad" className="hover:text-primary transition-colors"><Github size={24} /></a>
                <a target="_blank" href="https://linkedin.com/in/saad-idris-350271303" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:flex justify-center relative opacity-20 hover:opacity-100 transition-opacity">
            <Terminal size={400} strokeWidth={0.5} className="text-primary" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="section bg-card/10 border-y border-border/50">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { icon: <Server />, title: "Backend Architecture", desc: "Scalable microservices and secure RESTful/GraphQL API design." },
            { icon: <Code2 />, title: "Frontend Engineering", desc: "Modern, reactive interfaces built with Next.js and Tailwind." },
            { icon: <Cpu />, title: "System Optimization", desc: "Refactoring for speed, security, and 99.9% uptime reliability." }
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="section" id="skills">
        <div className="container">
          <SectionHeader title="Technical" highlight="DNA" subtitle="A modern stack optimized for performance and security." />
          <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
            {["all", "frontend", "backend", "tools"].map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={clsx("btn-outline text-sm py-1.5 capitalize", activeFilter === f && "btn-primary border-primary")}
              >
                {f}
              </button>
            ))}
          </div>
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map(skill => (
                <motion.div
                  layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={skill.name}
                  className="card-hover p-5 rounded-xl border border-border text-center flex flex-col gap-1"
                >
                  <span className="font-bold text-foreground">{skill.name}</span>
                  <span className="text-[10px] uppercase text-primary tracking-tighter font-mono">{skill.tag}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section className="section bg-card/5" id="projects">
        <div className="container">
          <SectionHeader title="Featured" highlight="Deployments" subtitle="Production-ready systems with robust backend logic." />
          <div className="grid gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                className="group flex flex-col md:flex-row gap-8 p-6 rounded-3xl border border-border bg-card/40 hover:bg-card/60 transition-all"
              >
                <div className="md:w-2/5 overflow-hidden rounded-2xl border border-border">
                  <img src={p.img} alt={p.title} className="w-full h-full  group-hover:scale-100 transition-transform duration-500" />
                </div>
                <div className="md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-muted mb-6 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map(t => <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">{t}</span>)}
                  </div>
                  <div className="flex gap-6">
                    <a target="_blank" href={p.live} className="btn-primary text-xs py-2 flex items-center gap-2">Live Demo <ExternalLink size={14} /></a>
                    <a target="_blank" href={p.repo} className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2 font-medium">Source <Github size={16} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer id="contact" className="py-24 border-t border-border mt-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to <span className="text-primary">Architect</span> something?</h2>
          <p className="text-muted mb-12 max-w-lg mx-auto">Currently open to freelance backend contracts and full-stack opportunities.</p>
          <a target="_blank" href="mailto:saadidris23@gmail.com" className="btn-primary text-xl px-12 py-4 inline-flex items-center gap-3 shadow-xl shadow-primary/20">
            Send a Message <Mail />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Developer;
