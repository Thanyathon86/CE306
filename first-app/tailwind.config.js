/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // เพิ่ม path ไฟล์ที่ต้องการให้ Tailwind สแกนที่นี่
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};