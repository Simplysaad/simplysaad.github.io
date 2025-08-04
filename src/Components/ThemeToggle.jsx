import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsdarkMode] = useState(false);
  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsdarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsdarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function handleToggle() {
    // change the dark mode state
    // save it to local storage
    //

    setIsdarkMode((prev) => !prev);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsdarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsdarkMode(true);
    }

    return;
  }

  return (
    <button className={clsx("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300")} onClick={handleToggle}>{isDarkMode ? <Sun /> : <Moon />}</button>
  );
};
