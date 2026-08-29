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
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          400: "#38bdf8",
          500: "#00AEEF",
          600: "#0C66B4",
          700: "#0369a1",
          800: "#075985",
          900: "#0c0c0c",
          950: "#060911",
          cyan: "#00d2ff",
          navy: "#0B2551",
          sapphire: "#014489",
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
