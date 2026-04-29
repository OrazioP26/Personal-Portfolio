/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        bg: '#ffffff',
        ink: '#0a0a0a',
        muted: '#888888',
        rule: '#e6e6e6',
        accent: '#2540a8'
      }
    }
  },
  plugins: []
};
