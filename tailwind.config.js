/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontsize: {
        "heading-1": "11.4rem",
        "heading-2": "7.6rem",
        "heading-3": "5.06rem",
        "heading-4": "3.37rem",
        "heading-5": "2.25rem",
        "heading-6": "1.5rem",
        "body-1": "1.25rem",
        "body-2": "1.125rem",
        "body-3": "1rem",
      },

      fontFamily: {
        satoshi: ["Satoshi-Variable", "sans-serif"],
        grotesk: ["CabinetGrotesk-Variable", "sans-serif"],
        satoshiitalic: ["Satoshi-VariableItalic", "sans-serif"],
      },

      colors: {
        "navy": "#213555",
        "light-navy": "#4F709C",
        "beige": "#D8C4B6",
        "light-beige": "#F5EFE7",
      },

    },
  },
  plugins: [],
};
