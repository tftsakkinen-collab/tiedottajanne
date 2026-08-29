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
        "surface-elevated": "var(--surface-elevated)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
          2: "var(--accent-2)",
        },
        primary: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
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
