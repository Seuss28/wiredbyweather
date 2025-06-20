/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6f3eb',     // soft warm beige
        foreground: '#1e1e1e',     // charcoal black
        accent: '#e2ded1',         // subtle box background
        border: '#bdb8aa',         // gentle border
        secondary: '#4a463f',      // muted earth-tone for buttons
        highlight: '#877f6c',      // optional lighter text or tag color
        link: '#3a6ea5',           // link color, not too bright
        hover: '#2f4f72',          // for link or button hover
      },
    },
  },
  plugins: [],
}

