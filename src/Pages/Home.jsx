import React from "react";
import { ThemeToggle } from "../Components/ThemeToggle";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";

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
    </div>
  );
};

export default Home;
