/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%'
          },
          '100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          }
        },
        skillBarFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-level)' }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        'title-glow': {
          '0%, 100%': {
            'text-shadow': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.5)',
          }
        },
        'text-glow': {
          '0%, 100%': {
            'text-shadow': '0 0 5px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            'text-shadow': '0 0 10px rgba(59, 130, 246, 0.5)',
          }
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(30px)' }
        },
        'tech-shine': {
          '0%': { transform: 'translateX(-100%) rotate(60deg)' },
          '100%': { transform: 'translateX(100%) rotate(60deg)' }
        },
        particle: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100px, 100px)' },
          '50%': { transform: 'translate(50px, 200px)' },
          '75%': { transform: 'translate(-50px, 100px)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'skillBarFill': 'skillBarFill 1s ease-out forwards',
        'meteor': 'meteor 5s linear infinite',
        'title-glow': 'title-glow 3s ease-in-out infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'tech-shine': 'tech-shine 3s linear infinite',
        'particle': 'particle 15s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}