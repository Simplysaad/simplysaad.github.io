import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PenTool, BookOpen, Share2, ArrowRight,
    Linkedin, Github, Mail, ExternalLink, Hash, Clock
} from "lucide-react";
import { clsx } from "clsx";
import Navbar from "../components/Navbar";

// --- Writing Portfolio Data ---
const articles = [
    {
        title: "Optimizing Structural Workflows with Revit Automation",
        category: "Engineering",
        platform: "Medium",
        readTime: "8 min",
        description: "An in-depth look at how Python scripts can automate repetitive tasking in BIM environments to reduce human error.",
        url: "https://medium.com/@simplysaad/your-article-link"
    },
    {
        title: "Mastering GSAP ScrollTrigger in React Applications",
        category: "Development",
        platform: "Dev.to",
        readTime: "12 min",
        description: "A comprehensive guide to creating high-performance scroll animations without compromising on SEO or accessibility.",
        url: "https://dev.to/simplysaad/your-article-link"
    },
    {
        title: "The Future of Logistics: Drones in African Economies",
        category: "Analysis",
        platform: "Tech Blog",
        readTime: "10 min",
        description: "Exploring the infrastructure requirements and logistical hurdles of drone-based delivery systems in emerging markets.",
        url: "#"
    }
];

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

const Writing = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredArticles = activeFilter === "all"
        ? articles
        : articles.filter(a => a.category.toLowerCase() === activeFilter);

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="md:min-h-screen py-16 flex items-center pt-32 pb-20">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-primary font-mono mb-4 block tracking-widest uppercase text-sm">Communication & Strategy</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                            Decoding <span className="text-primary">Complexity</span> Through Words.
                        </h1>
                        <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
                            Bridging the gap between high-level engineering logic and actionable documentation. I write for developers, engineers, and stakeholders.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex gap-5 text-muted">
                                <a href="https://github.com/simplysaad/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={24} /></a>
                                <a href="https://linkedin.com/in/saad-idris-320271303" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                                <a href="mailto:saadidris23@gmail.com" className="hover:text-primary transition-colors"><Mail size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                    <div className="hidden lg:flex justify-center relative opacity-10 hover:opacity-100 transition-opacity">
                        <PenTool size={350} strokeWidth={0.5} className="text-primary" />
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <section className="section bg-card/10 border-y border-border/50">
                <div className="container grid md:grid-cols-3 gap-8">
                    {[
                        { label: "Articles Published", value: "15+", icon: <BookOpen size={20} /> },
                        { label: "Technical Domains", value: "3", icon: <Hash size={20} /> },
                        { label: "Monthly Readers", value: "2k+", icon: <Share2 size={20} /> }
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-card/40 border border-border">
                            <div className="text-primary">{stat.icon}</div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-muted text-xs uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. ARTICLES LIST */}
            <section className="section" id="articles">
                <div className="container">
                    <SectionHeader title="Published" highlight="Insights" subtitle="Technical guides, case studies, and industry analysis." />

                    {/* Filter */}
                    <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                        {["all", "engineering", "development", "analysis"].map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={clsx("btn-outline text-xs py-2 px-6 capitalize", activeFilter === f && "btn-primary border-primary")}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredArticles.map((article, i) => (
                                <motion.a
                                    key={article.title}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group block p-8 rounded-2xl border border-border bg-card/20 hover:bg-card/40 hover:border-primary/50 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-primary">
                                                <span>{article.category}</span>
                                                <span className="w-1 h-1 rounded-full bg-border"></span>
                                                <span>{article.platform}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                                            <p className="text-muted text-sm max-w-2xl leading-relaxed">{article.description}</p>
                                        </div>
                                        <div className="flex items-center gap-4 text-muted text-xs whitespace-nowrap">
                                            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                                            <div className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-white transition-all">
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 4. CONTACT FOOTER */}
            <footer className="py-24 border-t border-border mt-20">
                <div className="container text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Need a <span className="text-primary">Technical</span> Voice?</h2>
                    <p className="text-muted mb-12 max-w-lg mx-auto">Available for freelance documentation, technical blog posts, and whitepapers.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="mailto:saadidris23@gmail.com" className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3">
                            Email Sa'ad <Mail size={20} />
                        </a>
                        <a href="https://linkedin.com/in/saad-idris-320271303" target="_blank" rel="noopener noreferrer" className="btn-outline text-lg px-10 py-4 inline-flex items-center gap-3">
                            LinkedIn <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Writing;