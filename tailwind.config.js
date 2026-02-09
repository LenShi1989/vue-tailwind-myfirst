/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class", // 開啟暗黑模式
  theme: {
    extend: {
      // padding:{
      //   150:"150px"// 可以自定義主題
      // }
      fontFamily: {
        "my-Agdasima": ["Agdasima"], // 去google 下載字體 然後拿過來
      },
      fontSize: {
        "100xl": "100px", // 可自訂的 也可以覆蓋舊的
      },
    },
  },
  plugins: [],
};
