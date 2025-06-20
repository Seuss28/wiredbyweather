/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5dc',
        foreground: '#000000',
        accent: '#FFD700',
        secondary: '#FF4500'
      }
    }
  },
  plugins: []
}
