/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Logo-inspired palette: deep ink blue, warm gold, soft parchment — tune hex values to match public/images/logo.png */
        brand: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#d5dfed',
          300: '#b4c5dc',
          400: '#8ba3c4',
          500: '#6d87b0',
          600: '#566f9a',
          700: '#475c7d',
          800: '#3e4f69',
          900: '#1a2f4a',
          950: '#0c1929',
        },
        accent: {
          DEFAULT: '#c9a227',
          light: '#e5d4a1',
          dark: '#9a7a1c',
          muted: '#d4bc5c',
        },
        parchment: '#faf8f4',
        ink: '#0a1628',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(12, 25, 41, 0.08), 0 8px 32px -8px rgba(12, 25, 41, 0.12)',
        card: '0 2px 8px -2px rgba(12, 25, 41, 0.06), 0 12px 40px -12px rgba(12, 25, 41, 0.15)',
        glow: '0 0 40px -8px rgba(201, 162, 39, 0.35)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(201, 162, 39, 0.12), transparent 55%), radial-gradient(ellipse 80% 50% at 100% 0%, rgba(26, 47, 74, 0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(201, 162, 39, 0.08), transparent 45%)',
        'section-fade': 'linear-gradient(180deg, #faf8f4 0%, #f4f7fb 50%, #faf8f4 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
