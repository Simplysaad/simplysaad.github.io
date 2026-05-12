import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Building2, Terminal, PenTool, ArrowRight } from "lucide-react";

const Home = () => {
    const rootRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Initial Entrance Animation
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.2
            });

            gsap.from(cardsRef.current, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                delay: 0.5
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    const onCardMouseEnter = (index) => {
        gsap.to(cardsRef.current[index], {
            borderColor: "var(--primary)",
            y: -10,
            duration: 0.3,
            ease: "power2.out"
        });
        // Dim the other cards
        cardsRef.current.forEach((card, i) => {
            if (i !== index) gsap.to(card, { opacity: 0.4, duration: 0.3 });
        });
    };

    const onCardMouseLeave = (index) => {
        gsap.to(cardsRef.current[index], {
            borderColor: "rgba(var(--border), 0.5)",
            y: 0,
            duration: 0.3
        });
        cardsRef.current.forEach((card) => gsap.to(card, { opacity: 1, duration: 0.3 }));
    };

    const navItems = [
        {
            title: "Civil Engineering",
            icon: <Building2 size={32} />,
            desc: "Designing the physical world with precision and structural logic.",
            path: "/civil",
            skills: ["Revit", "AutoCAD", "Structural Analysis"]
        },
        {
            title: "Full-Stack Dev",
            icon: <Terminal size={32} />,
            desc: "Architecting high-performance digital systems and animations.",
            path: "/dev",
            skills: ["React", "Node.js", "GSAP"]
        },
        {
            title: "Technical Writing",
            icon: <PenTool size={32} />,
            desc: "Translating complex technicality into clear, actionable narratives.",
            path: "/writing",
            skills: ["Documentation", "Blog Posts", "Whitepapers"]
        }
    ];

    return (
        <div ref={rootRef} className="min-h-screen bg-background flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Hero Section */}
            <div className="text-center mb-20 z-10">
                <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                    SA'AD <span className="text-primary">.</span>
                </h1>
                <p className="hero-text text-muted text-lg md:text-xl max-w-2xl font-medium tracking-tight">
                    A multi-disciplinary engineer building at the intersection of <br />
                    <span className="text-foreground">infrastructure, code, and communication.</span>
                </p>
            </div>

            {/* Main Trinity Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10">
                {navItems.map((item, i) => (
                    <Link
                        key={i}
                        to={item.path}
                        ref={(el) => (cardsRef.current[i] = el)}
                        onMouseEnter={() => onCardMouseEnter(i)}
                        onMouseLeave={() => onCardMouseLeave(i)}
                        className="group relative block p-10 rounded-3xl border border-border bg-card/20 backdrop-blur-md transition-colors"
                    >
                        <div className="text-primary mb-8 transition-transform group-hover:scale-110 duration-500">
                            {item.icon}
                        </div>

                        <h2 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h2>
                        <p className="text-muted text-sm leading-relaxed mb-8">
                            {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.skills.map(skill => (
                                <span key={skill} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                            Explore Route <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Minimal Footer */}
            <footer className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-muted/50 font-bold">
                Build v1.0 // 2026 Edition
            </footer>
        </div>
    );
};

export default Home;