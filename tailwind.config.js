/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-elevated": "var(--surface-elevated)",
        text: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        muted: "var(--text-muted)",
        border: "var(--border)",
        accent: {
          DEFAULT: "#00d2ff",
          hover: "#38bdf8",
          ink: "#05080f",
          quiet: "rgba(0, 210, 255, 0.12)",
        },
        growth: {
          DEFAULT: "#10b981",
          light: "#34d399",
        },
        primary: {
          DEFAULT: "#00d2ff",
          ink: "#05080f",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        md: "var(--radius)",
        lg: "var(--radius)",
        xl: "var(--radius)",
        "2xl": "var(--radius)",
        "3xl": "var(--radius)",
        pill: "var(--radius-pill)",
        full: "var(--radius-pill)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 210, 255, 0.25)",
        "glow-lg": "0 0 50px rgba(0, 210, 255, 0.35)",
        "glow-emerald": "0 0 30px rgba(16, 185, 129, 0.25)",
        panel: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
