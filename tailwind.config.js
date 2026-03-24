/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'SF Pro Display', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        ink: {
          1: '#0B0D12',
          2: '#151826',
          3: '#2A2F45'
        },
        paper: {
          1: '#FFFFFF',
          2: '#FAFAFB',
          3: '#F2F3F5'
        },
        accent: {
          DEFAULT: '#00D4FF',
          2: '#00AACC'
        }
      },
      borderRadius: {
        xl: '14px'
      },
      boxShadow: {
        subtle: '0 1px 0 rgba(11,13,18,0.06), 0 10px 30px rgba(11,13,18,0.06)'
      }
    }
  },
  plugins: []
};
