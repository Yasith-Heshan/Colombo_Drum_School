/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sevillana: ['Sevillana', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
