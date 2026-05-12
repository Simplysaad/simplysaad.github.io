import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Ruler, HardHat, Construction, ArrowRight,
    Linkedin, ExternalLink, Mail, FileText, Map
} from "lucide-react";
import { clsx } from "clsx";
import Navbar from "../components/Navbar";

// --- Mock Data for Civil Engineering ---
const engineeringSkills = [
    { name: "AutoCAD", type: "design", tag: "2D/3D Drafting" },
    { name: "Revit", type: "design", tag: "BIM Modeling" },
    { name: "Civil 3D", type: "design", tag: "Land Dev" },
    { name: "SAP2000", type: "analysis", tag: "Structural" },
    { name: "STAAD.Pro", type: "analysis", tag: "Finite Element" },
    { name: "Microsoft Project", type: "management", tag: "Scheduling" },
    { name: "Cost Estimation", type: "management", tag: "Budgeting" },
    { name: "Site Supervision", type: "field", tag: "Operations" },
    { name: "Surveying", type: "field", tag: "Geomatics" },
];

const engineeringProjects = [
    {
        title: "Urban Drainage System Redesign",
        description: "Designed a sustainable urban drainage system (SuDS) to mitigate seasonal flooding in a high-density residential area, improving runoff efficiency by 40%.",
        tech: ["Civil 3D", "Hydrology Analysis", "AutoCAD"],
        img: "https://images.unsplash.com/photo-1590483734724-38fa19744980?q=80&w=1000", // Placeholder
        live: "#",
        doc: "#"
    },
    {
        title: "Multi-Storey Steel Frame Analysis",
        description: "Structural modeling and load calculation for a 5-storey commercial complex, ensuring compliance with Eurocode 3 standards.",
        tech: ["SAP2000", "Structural Logic", "Technical Reporting"],
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000", // Placeholder
        live: "#",
        doc: "#"
    }
];

// --- Shared Header Component ---
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

const CivilEngineering = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredSkills = activeFilter === "all"
        ? engineeringSkills
        : engineeringSkills.filter(s => s.type === activeFilter);

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section id="hero" className="md:min-h-screen py-16 flex items-center pt-32 pb-20">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-primary font-mono mb-4 block tracking-widest uppercase text-sm">Infrastructure Specialist</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                            Building the <span className="text-primary">Physical</span> Foundation.
                        </h1>
                        <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
                            Civil Engineering student with a focus on structural integrity and modern BIM workflows. I design the sustainable spaces that shape our future.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <a href="#projects" className="btn-primary flex items-center gap-2">View Projects <ArrowRight size={18} /></a>
                            <div className="flex gap-5 text-muted">
                                <a target="_blank" href="#" className="hover:text-primary transition-colors"><FileText size={24} /></a>
                                <a target="_blank" href="https://linkedin.com/in/saad-idris-350271303" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                    <div className="hidden lg:flex justify-center relative opacity-20 hover:opacity-100 transition-opacity">
                        <Ruler size={400} strokeWidth={0.5} className="text-primary" />
                    </div>
                </div>
            </section>

            {/* 2. SERVICES SECTION */}
            <section className="section bg-card/10 border-y border-border/50">
                <div className="container grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Construction />, title: "Structural Design", desc: "Developing rigorous blueprints for safe and efficient load-bearing structures." },
                        { icon: <Map />, title: "BIM Coordination", desc: "Utilizing Revit and Civil 3D for integrated architectural and engineering workflows." },
                        { icon: <HardHat />, title: "Project Management", desc: "Liaising with on-site teams to ensure adherence to safety, budget, and timeline." }
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
                    <SectionHeader title="Engineering" highlight="Toolkit" subtitle="Specialized software and technical proficiencies for modern construction." />
                    <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
                        {["all", "design", "analysis", "management", "field"].map(f => (
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
                    <SectionHeader title="Design" highlight="Portfolio" subtitle="Case studies in structural analysis and urban development." />
                    <div className="grid gap-10">
                        {engineeringProjects.map((p, i) => (
                            <motion.div
                                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                className="group flex flex-col md:flex-row gap-8 p-6 rounded-3xl border border-border bg-card/40 hover:bg-card/60 transition-all"
                            >
                                <div className="md:w-2/5 overflow-hidden rounded-2xl border border-border bg-slate-200">
                                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="md:w-3/5 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                                    <p className="text-muted mb-6 leading-relaxed">{p.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {p.tech.map(t => <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">{t}</span>)}
                                    </div>
                                    <div className="flex gap-6">
                                        <a target="_blank" href={p.live} className="btn-primary text-xs py-2 flex items-center gap-2">View Details <ExternalLink size={14} /></a>
                                        <a target="_blank" href={p.doc} className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2 font-medium">Project Documentation <FileText size={16} /></a>
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
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Have a <span className="text-primary">Project</span> in Mind?</h2>
                    <p className="text-muted mb-12 max-w-lg mx-auto">Currently seeking internships and collaboration on infrastructure projects.</p>
                    <a target="_blank" href="mailto:saadidris23@gmail.com" className="btn-primary text-xl px-12 py-4 inline-flex items-center gap-3 shadow-xl shadow-primary/20">
                        Let's Collaborate <Mail />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default CivilEngineering;