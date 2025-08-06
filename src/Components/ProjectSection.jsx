import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BiographyHub Blog website",
    description:
      "Automated blog with posts creation and scheduling. It instantly shares each post on socials for instant engagement without manual effort.",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Twitter API",
      "Gemini AI",
    ],
    repo: "https://github.com/simplysaad/BiographyHub",
    live: "https://biographyHub.onrender.com",
    img: "/IMG/biographyhub.jpg",
  },
  {
    title: "CentralMarket E-Commerce MERN App",
    description:
      "Full-stack e-commerce platform with cart, checkout & admin panel.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Paystack API"],
    repo: "https://github.com/simplysaad/centralmarket",
    live: "https://centralmarket.onrender.com",
    img: "/IMG/centralmarket.jpg",
  },
  {
    title: "short-en link shortener",
    description:
      "a simple tool to convert long urls into short, more memorable, trackable links",
    tags: ["EJS", "Node.js", "Express"],

    repo: "https://github.com/simplysaad/short.en",
    live: "https://short-en-nine.vercel.app/",
    img: "/IMG/link-shortener.png",
  },
  // {
  //   title: "Aleeyah perfumes",
  //   tags: ["HTML", "CSS", "javascript", "ES6+"],
  //   description: "static website for a small business that deals in perfumes",
  //   repo: "https://github.com/simplysaad/aleeyah-perfumes",
  //   live: "https://simplysaad.github.io/aleeyah-perfumes",
  //   img: "/IMG/perfume.png",
  // },
  // {
  //   title: "BetterFuture NGO",
  //   tags: ["HTML", "CSS", "javascript", "ES6+"],
  //   description:
  //     "static website for an NGO that helps disabled individuals access meaningful education in africa",
  //   repo: "https://github.com/simplysaad/betterfuture",
  //   live: "https://simplysaad.github.io/betterfuture",
  //   img: "/IMG/disabled.png",
  // },
  //, {
  //     title: "Real-time Chat App",
  //     description:
  //         "Socket.io powered chat app with rooms and private messaging.",
  //     tags: ["React", "Node.js", "Express", "Socket.io"],
  //     repo: "https://github.com/yourusername/chat-app",
  //     live: "https://chatapp.yourdomain.com",
  //     img: "IMG/ecommerce-demo.png"
  // }
];

const ProjectSection = () => {
  return (
    <section id="projectsSection" className="section">
      <div className="container mx-auto max-w-5xl ">
        <div className="heading text-center flex flex-col gap-3">
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            <span className="">Featured </span>
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects, Each project was carefully
            crafted with attention to detail, performance and user experience
          </p>
        </div>
        <div className="projects text-foreground grid my-8 grid-cols-1 align-start gap-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="card border shadow-primary border-primary px-2 rounded py-4"
            >
              <div className="card-image h-48  overflow-hidden">
                <img
                  src={project.img}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  alt={project.title}
                />
              </div>
              <div className="tags my-4  flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={"tag-" + key}
                    className="tag border text-primary px-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-info text-start">
                <div className="text-center my-4">
                  <h3 className="text-2xl my-4 font-bold capitalize">{project.title}</h3>
                  <p className="">{project.description}</p>
                </div>
                <div className="links flex p-2 justify-center gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-foreground-primary"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    className="text-foreground-primary"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/simplysaad"
            target="_blank"
            className="btn-primary flex mx-auto "
          >
            <span className="">Check my Github</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
