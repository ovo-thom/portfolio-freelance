/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // pixelify: ['"Pixelify Sans"', "sans-serif"],
        sora: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
