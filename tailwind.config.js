/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class", // o quítalo si no usamos alternancia
  theme: {
    extend: {
      colors: {
        background: "#111111",
        primary: "#b53737",
        secondary: "#67574b",
        accent: "#d5b884",
        base: "#eae6df"
      }
    }
  },
  plugins: []
};
