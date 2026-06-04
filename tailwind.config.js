module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./layouts/**/*.{js,jsx}", "./hooks/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        surface: "#f7f8fb",
        brand: "#0f766e",
        accent: "#2563eb"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
