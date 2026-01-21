/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  darkMode: "class", // o 'media' si prefieres el sistema
  theme: {
    extend: {
      colors: {
        background: "#111111",
        surface: "#1f1f1f",
        primary: "#b53737",
        secondary: "#857468",
        accent: "#d5b884",
        base: "#eae6df"
      },
      fontFamily: {
        sans: ['"Alegreya Sans"', 'sans-serif'],
        serif: ['MedievalSharp', 'cursive'],
      }
    }
  },
  plugins: [typography]
};
