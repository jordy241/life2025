// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#D97706",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
};
