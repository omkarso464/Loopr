import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("loopr_theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      className="relative p-2 text-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-full cursor-pointer"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Sun
        className={isDark ? "w-5 h-5" : "w-5 h-5 hidden"}
        strokeWidth={2}
        aria-hidden="true"
      />
      <Moon
        className={!isDark ? "w-5 h-5" : "w-5 h-5 hidden"}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}
