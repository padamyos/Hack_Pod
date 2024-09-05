/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // สร้างฟอนต์ที่เราใช้งาน
    fontFamily: {
      'sans': ['Kanit , sans-serif'],
    }
  },
  plugins: [
    // ใช้งาน daisyUI
    require('daisyui'),
  ],
}