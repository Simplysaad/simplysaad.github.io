import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="aboutSection" className="min-h-screen flex flex-col justify-center  items-center px-4 relative">
      <div className="container  mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-foreground">About</span>
          <span className="text-primary"> Me</span>
        </h2>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-start">
        <div className=" about-content border px-2 py-5 md:w-[50%]">
          <div className="my-4">
            <h3 className="text-2xl py-4 text-foreground font-bold text-center">
              Results driven web developer & Designer
            </h3>
            <p className="text-foreground py-2  text-center">
              Detail-oriented and innovative MERN Stack Engineer with 3+ years
              of hands-on experience in developing and maintaining web and
              mobile applications.
            </p>
            <p className="text-foreground py-2 text-center">
              Adept at building RESTful APIs, integrating front-end and back-end
              technologies, and delivering scalable solutions using MongoDB,
              Express.js, React and Node.js. Strong collaborator with a passion
              for learning and contributing to dynamic development teams
            </p>
          </div>
          <div className="about-cta flex py-5 space-x-4 gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="/saad-resume.pdf" download className="btn-outline">
              Download CV
            </a>
          </div>
        </div>

        <div className="about-info px-3 text-start flex flex-col gap-5 justify-between md:w-[50%]">
          <div className="flex gap-4 border rounded shadow px-8 py-4 justify-between items-center">
            <span className="icon-container">
              <Code className="text-primary bg-primary/50 p-1 rounded-full" />
            </span>
            <div className="">
              <h3 className="text-foreground text-lg font-bold">
                Web Development
              </h3>
              <p>
                Creating responsive websites and web applications with modern
                frameworks
              </p>
            </div>
          </div>
          <div className="flex gap-4 border rounded shadow px-8 py-4 justify-start items-center">
            <span className="icon-container">
              <Code className="text-primary bg-primary/50 p-1 rounded-full" />
            </span>
            <div className="">
              <h3 className="text-foreground text-lg font-bold">
                UI/UX Design
              </h3>
              <p>
                Designing intuitive user interfaces and seamless user
                experiences.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border rounded shadow px-8 py-4 justify-between items-center">
            <span className="icon-container">
              <Briefcase className="text-primary bg-primary/50 p-1 rounded-full" />
            </span>
            <div className="">
              <h3 className="text-foreground text-lg font-bold">
                Project Management
              </h3>
              <p>
                Leading projects from conception to completion with agile
                methodeologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
