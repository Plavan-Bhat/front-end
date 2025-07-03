// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'blob': 'blob 7s infinite',
        'logo-spin': 'logo-spin 20s linear infinite',
        'blob1': 'blob1 15s infinite ease-in-out',
        'blob2': 'blob2 18s infinite ease-in-out', 
        'blob3': 'blob3 12s infinite ease-in-out',
        'button-pulse': 'button-pulse 2s infinite ease-out'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'blob1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, -50px) scale(1.1)' },
        },
        'blob2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, 50px) scale(0.9)' },
        },
        'blob3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -30px) scale(1.05)' },
        },
        'button-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(99, 102, 241, 0.7)' },
          '50%': { 'box-shadow': '0 0 0 10px rgba(99, 102, 241, 0)' },
        }
      },
      // Add these new gradient colors
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'), // Optional: for smoother animations
  ],
}