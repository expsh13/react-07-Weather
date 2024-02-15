/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "3/10": "30%", // 30%の幅を持つカスタムクラスを追加
      },
    },
  },
  plugins: [],
};
