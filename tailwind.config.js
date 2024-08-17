/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   grey: "#f5f5f5",
    // },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

