/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071527",
          light: "#13315C",
        },
        steel: {
          DEFAULT: "#4A5568",
          light: "#8A96A8",
          pale: "#E2E6EC",
        },
        signal: {
          DEFAULT: "#E8622C",
          dark: "#C94F1F",
          light: "#F2895C",
        },
        paper: "#F7F8FA",
        ink: "#12161C",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "40px 40px",
      },
    },
  },
  plugins: [],
};
