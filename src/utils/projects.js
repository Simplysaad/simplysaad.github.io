const projects = [
  // ==========================================
  // COMPLETED PROJECTS (High Priority)
  // ==========================================
  {
    title: "TQP Portal",
    description:
      "A specialized Learning Management System engineered for Quranic education. Features progress tracking for memorization targets, tutor monitoring for student welfare and attendance, and an administrative dashboard providing real-time visibility into overall program analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/simplysaad/tqp-portal",
    live: "https://tqp.vercel.app",
    img: "/IMG/tqp_portal.jpg",
    category: "EdTech",
    status: "Completed",
    featured: true
  },
  {
    title: "Fabirr E-Commerce",
    description:
      "A high-performance fashion storefront built with Next.js for server-side rendering and optimized SEO. Features encrypted session-based cart management via Iron Session and custom UI components built for seamless user experience.",
    tech: ["Next.js", "React", "Iron Session", "Tailwind CSS", "Node.js"],
    repo: "https://github.com/simplysaad/fabirr",
    live: "https://fabirr.vercel.app",
    img: "/IMG/fabirr.png",
    category: "E-Commerce",
    status: "Completed",
    featured: true
  },
  {
    title: "Fischerbon LMS",
    description:
      "A technical education platform featuring a peer-to-peer mentorship forum, automated assignment submission pipelines, and an integrated AI Tutor trained to deliver context-aware assistance tailored to specific course modules.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind CSS"],
    repo: "https://github.com/simplysaad/fischerbon",
    live: "https://fischerbon.onrender.com",
    img: "/IMG/fischerbon.png", // Corrected image reference
    category: "EdTech",
    status: "Completed",
    featured: true
  },

  // ==========================================
  // IN DEVELOPMENT (Medium Priority / Secondary)
  // ==========================================
  {
    title: "ResearchX",
    description:
      "An AI-assisted research commercialization platform connecting industry problems with academic student projects. Utilizes Retrieval-Augmented Generation (RAG) and vector search to match companies with relevant research for hiring or partnership opportunities.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "pgvector", "MongoDB", "Gemini API"],
    repo: "https://github.com/simplysaad/researchx",
    live: "https://researchx.onrender.com",
    img: "/IMG/researchx.png", // Updated dedicated image path
    category: "AI & Academic",
    status: "In Development",
    featured: false
  },
  {
    title: "Logisticore",
    description:
      "A logistics marketplace designed to aggregate verified couriers, automate booking workflows, and provide end-to-end delivery tracking to streamline agricultural and last-mile transport infrastructure.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    repo: "https://github.com/simplysaad/logisticore",
    live: "https://logisticore-1.onrender.com",
    img: "/IMG/logisticore.png",
    category: "Logistics",
    status: "In Development",
    featured: false
  }
];

// Helper export to quickly filter completed projects for display
export const featuredProjects = projects.filter(p => p.featured);

export default projects;