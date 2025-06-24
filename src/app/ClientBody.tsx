"use client";

import { useEffect, useState } from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    // Check for system preference
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check for stored preference
    const storedPreference = localStorage.getItem("darkMode");

    const shouldUseDarkMode =
      storedPreference !== null
        ? storedPreference === "true"
        : darkModePreference;

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);

    // Listen for changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if there's no stored preference
      if (localStorage.getItem("darkMode") === null) {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Expose the dark mode state and setter to window for components to use
  useEffect(() => {
    // Create a dark mode toggle function that other components can use
    window.toggleDarkMode = () => {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("darkMode", newDarkMode.toString());
    };

    // Clean up
    return () => {
      // Use type assertion to fix the type error
      window.toggleDarkMode = (() => {}) as () => void;
    };
  }, [isDarkMode]);

  return <>{children}</>;
}

// Add this to make the toggleDarkMode function available globally
declare global {
  interface Window {
    toggleDarkMode: () => void;
  }
}
