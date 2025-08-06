import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className=" my-4">
          <h1 className="text-4xl md:text-6xl my-5 font-bold tracking-tight">
            <span>Hi, I'm </span>
            <span className="text-primary">Saad</span>
            <span className="text-gradient ml-2 "> Idris</span>
          </h1>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground">
            Result driven full stack developer specializing in the MERN stack
            with 5+ years experience creating responsive, user-friendly web
            applications tailored to client needs.
          </p>
        </div>
        <a href="#projectsSection" className="btn-primary">
          View my works
        </a>
      </div>

      <a
        href="#aboutSection"
        className="absolute bottom-5 text-sm flex flex-col items-center "
      >
        <span className="text-small text-muted-foreground">Scroll</span>
        <ArrowDown className="text-primary h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
