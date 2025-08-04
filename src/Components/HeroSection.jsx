import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span>Hi, I'm </span>
          <span className="text-primary">Saad</span>
          <span className="text-gradient ml-2 "> Idris</span>
        </h1>
        <p className="my-2 text-lg md:text-2xl mb-4 text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          libero ipsa nemo enim ratione deleniti impedit mollitia iste,
          consequuntur doloremque. Lorem, ipsum dolor.
        </p>
        <a href="#projects" className="btn-primary">
          View my works
        </a>
      </div>

      <div className="absolute bottom-5 left-1/2 transform-translate-1/2 flex flex-col items-center ">
        <span className="text-small text-muted-foreground">Scroll</span>
        <ArrowDown  className="text-primary h-5 w-5" />
      </div>
    </section>
  );
};

export default HeroSection;
