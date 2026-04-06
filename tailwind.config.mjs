/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA6490', // Pink
        secondary: '#4CA6AE', // Teal
        accent: '#4CA6AE',
      },
      fontFamily: {
        primary: ['var(--font-dm-sans)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: {
        'site': '1140px',
      },
    },
  },
  plugins: [],
};
