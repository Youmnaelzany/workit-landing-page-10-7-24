/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Fraunces: ["Fraunces", "serif"],
      Manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/public/images/images/bg-hero-desktop.svg')",
        'hero-tablet': "url('/public/images/images/bg-hero-tablet.svg')",
        'hero-mobile': "url('/public/images/images/bg-hero-mobile.svg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}