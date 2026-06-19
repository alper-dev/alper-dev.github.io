import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function Controls() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(t);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggleTheme}
      className="font-sans text-sm text-[var(--fg-faint)] hover:text-[var(--fg)] transition-colors"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
