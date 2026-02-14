/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bondiBlue: {
          40: "#c0c5c7",
          50: "#ebffff",
          100: "#cefcff",
          200: "#a2f7ff",
          300: "#63eefd",
          400: "#1cdcf4",
          500: "#00bfda",
          600: "#0398b7",
          700: "#0a7994",
          800: "#126178",
          900: "#145165",
          950: "#063546",
          960: "#052a37",
          980: "#00000057",
        },
      },
    },
  },
  plugins: [],
};
