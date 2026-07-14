import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        'background-dark': '#0F172A',
        surface: '#FFFFFF',
        'surface-dark': '#1E293B',
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          'hover-dark': '#6366F1',
        },
        secondary: {
          DEFAULT: '#64748B',
          dark: '#94A3B8',
        },
        text: {
          DEFAULT: '#1E293B',
          dark: '#F1F5F9',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#334155',
        },
        glow: 'rgba(79, 70, 229, 0.15)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        accent: ['"Space Grotesk"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(79, 70, 229, 0.12)',
        'glow-hover': '0 0 60px rgba(79, 70, 229, 0.18)',
        'card-hover': '0 8px 32px rgba(15, 23, 42, 0.08)',
        'card-hover-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
