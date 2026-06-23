import { addDynamicIconSelectors } from "@iconify/tailwind4";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [addDynamicIconSelectors()]
};
