/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem',
      },
      backdropBlur: {
        sm: '4px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 8px 24px rgba(255, 255, 255, 0.05)',
      },
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
