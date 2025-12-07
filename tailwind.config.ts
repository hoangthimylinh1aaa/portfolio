import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        gaming: ['Exo 2', 'system-ui', 'sans-serif'],
        bold: ['Russo One', 'impact', 'sans-serif'],
        military: ['Black Ops One', 'cursive'],
      },
      colors: {
        gaming: {
          primary: '#00ff41',
          secondary: '#0ff',
          dark: '#0a0e27',
          accent: '#ff006e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
