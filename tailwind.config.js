/** @type {import('tailwindcss').Config} */
import fbPlugin from "flowbite/plugin"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    fbPlugin,
  ],
}