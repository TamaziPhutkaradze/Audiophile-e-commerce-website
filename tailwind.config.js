/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fontSizeClamp: "clamp(2.5rem, 10vw, 2rem)",
      },
      bgImg: {
        backgroundImage: "url(./src/assets/home/mobile/image-header.jpg)",
      },
    },
  },
  plugins: [],
};
