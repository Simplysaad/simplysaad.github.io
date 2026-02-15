import { Code2, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Backend Architecture",
    desc: "Designing scalable microservices, RESTful/GraphQL APIs, and complex database schemas.",
    icon: <Server className="text-primary" />
  },
  {
    title: "Frontend Engineering",
    desc: "Building reactive, high-performance interfaces using Next.js and Tailwind CSS.",
    icon: <Code2 className="text-primary" />
  },
  {
    title: "System Optimization",
    desc: "Refactoring legacy codebases for speed, security (JWT/OAuth), and 90+ Lighthouse scores.",
    icon: <Cpu className="text-primary" />
  }
];

const Services = () => (
  <section className="section bg-card/10 border-y border-border/50">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


export default Services