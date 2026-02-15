const Hero = () => (
  <section className="section flex items-center justify-center text-center">
    <div className="container max-w-4xl">
      <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
        Available for New Projects
      </span>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Building <span className="text-primary">Scalable</span> digital
        experiences with precision.
      </h1>
      <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
        I’m a Full-Stack Developer specializing in the MERN stack and Next.js. I
        turn complex business requirements into seamless, high-performance web
        applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-outline">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
);
export default  Hero