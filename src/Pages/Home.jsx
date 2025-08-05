import React from "react";
import { ThemeToggle } from "../Components/ThemeToggle";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ProjectSection from "../Components/ProjectSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background effects */}

      {/* Navbar */}
      <Navbar/>

      {/* Main content */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
