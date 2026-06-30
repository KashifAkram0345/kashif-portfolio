/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui'],
        mono: ['Share Tech Mono', 'ui-monospace', 'SFMono-Regular'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        void: '#05060d',
        neon: {
          green: '#39ff88',
          purple: '#b76cff',
          cyan: '#42f5ff',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(57, 255, 136, 0.35), 0 0 60px rgba(183, 108, 255, 0.18)',
        'glow-purple': '0 0 26px rgba(183, 108, 255, 0.4)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '20%, 80%': { opacity: '0.42' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'gradient-slow': 'gradientShift 18s ease infinite',
        scan: 'scan 7s linear infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
