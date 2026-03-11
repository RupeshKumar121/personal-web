/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        midnight: '#050816',
        void: '#0a0a1a',
        surface: '#0d0d2b',
        'surface-2': '#13132e',
        'blue-glow': '#3b82f6',
        'purple-glow': '#8b5cf6',
        'cyan-glow': '#06b6d4',
        'pink-glow': '#ec4899',
        accent: '#6366f1',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050816 0%, #0d0d2b 50%, #0a0a1a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)',
        'glow-gradient': 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
        'text-gradient': 'linear-gradient(135deg, #a5b4fc, #c4b5fd, #f9a8d4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll-indicator': 'scrollIndicator 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          'to': { boxShadow: '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(99,102,241,0.3)' },
        },
        scrollIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.3' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99,102,241,0.3)',
        'glow-md': '0 0 30px rgba(99,102,241,0.4)',
        'glow-lg': '0 0 60px rgba(139,92,246,0.4)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.5)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.5)',
        'glass': '0 8px 32px 0 rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
