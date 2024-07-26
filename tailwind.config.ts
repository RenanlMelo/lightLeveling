/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        servicesCard: "0 12px 20px 0 rgba(0,0,0,.2)",
        servicesCardHover: "3px 10px 25px 0px rgba(0,0,0,.7)",
        shadow_card: "inset -60px 0px 70px -70px rgba(54,0,120,.6), inset 60px 0px 70px -70px rgba(54,0,120,.6), inset 0px -100px 70px -70px rgba(54,0,120,.6)",
        division: "inset"
      },
    },
  },
  plugins: [],
}