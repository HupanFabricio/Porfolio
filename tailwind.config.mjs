/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            secondary: '#f5741c',
            darkBg: '#131424'
         },
         backgroundImage: {
            "gradient-cover":
               "linear-gradient(90.21deg,rgba(170,54,124, 0.65) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"

         }
      },
   },
   plugins: [],
}
