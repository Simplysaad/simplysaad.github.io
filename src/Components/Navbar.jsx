import clsx from "clsx";
import { Menu, X, XIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options = [
    {
      title: "home",
      href: "#heroSection",
    },
    {
      title: "about",
      href: "#aboutSection",
    },
    {
      title: "skills",
      href: "#skillsSection",
    },
    {
      title: "projects",
      href: "#projectsSection",
    },
    {
      title: "contact",
      href: "#contactSection",
    },
  ];
  return (
    <nav className="fixed w-full md:backdrop-blur z-40 py-6">
      {/* Desktop nav */}
      <div className="container flex justify-between items-center">
        <div className="nav-brand text-2xl font-bold">
          <span className="">Simply</span>
          <span className="text-primary">Saad</span>
        </div>

        <ul className="nav-options hidden align-center md:flex space-x-3">
          {options.map((option, key) => (
            <li key={key}>
              <a
                href={option.href}
                className={clsx(
                  "capitalize focus:text-primary active:text-primary transition-colors duration-300 hover:text-primary",
                  location.hash === option.href ? "text-primary" : ""
                )}
              >
                {option.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="p-2 z-50 text-foreground md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}

      <div
        className={clsx(
          "fixed inset-0 md:hidden bg-background transition-opacity duration-300 backdrop-blur-md z-40 flex flex-col items-center justify-center ",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-8 text-xl">
          {options.map((option, key) => (
            <li key={key}>
              <a
                href={option.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "capitalize text-foreground/80 focus:text-primary transition-opacity duration-300 text-center active:text-primary hover:text-primary",
                  location.hash === option.href ? "text-primary" : ""
                )}
              >
                {option.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
