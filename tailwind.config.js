/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'earthrise_image' : "url('/apollo08_earthrise.jpg')",
        'CHQuote_image' : "url('/CHQuote.png')",
      },
      colors: {
        ts_red: "#c02c38"
      }
    },
  },
  plugins: [],
}


