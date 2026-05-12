import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const options = [
    { title: "home", href: "#hero" },
    { title: "skills", href: "#skills" },
    { title: "projects", href: "#projects" },
    { title: "contact", href: "#contact" }
  ];

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo with Terminal Icon for Backend Feel */}
        <Link to={"/"} className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <Terminal className="text-primary" size={20} />
          <span>
            Simply<span className="text-primary">Saad</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {options.map((option) => (
              <li key={option.title}>
                <a
                  href={option.href}
                  className={clsx(
                    "text-sm font-medium capitalize transition-all duration-300 hover:text-primary relative group",
                    location.hash === option.href
                      ? "text-primary"
                      : "text-muted"
                  )}
                >
                  {option.title}
                  {/* Animated underline */}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                      location.hash === option.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary text-xs py-2 px-5">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="p-2 z-50 text-foreground md:hidden hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 md:hidden bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {options.map((option) => (
            <li key={option.title}>
              <a
                href={option.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "text-3xl font-bold capitalize transition-colors",
                  location.hash === option.href
                    ? "text-primary"
                    : "text-foreground/60"
                )}
              >
                {option.title}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary text-lg"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
