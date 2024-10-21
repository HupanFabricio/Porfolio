/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            secondary: '#9A8CE8',
            darkBg: '#131424'
         },
      },
   },
   plugins: [],
}
