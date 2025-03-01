/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: "var(--font-outfit), sans-serif",
        montserrat: "var(--font-montserrat), sans-serif",
        fraunces: "var(--font-fraunces), sans-serif",
        poppins: "var(--font-poppins), sans-serif",
        barlowSemiCondensed: "var(--font-barlowSemiCondensed), sans-serif",
        manrope: "var(--font-manrope), sans-serif",
      },
    },
  },
  plugins: [],
};
