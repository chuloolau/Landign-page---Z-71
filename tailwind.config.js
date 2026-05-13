/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          '"Segoe UI"',
          'sans-serif',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Inter',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        bg: {
          DEFAULT: '#0A0A0B',
          soft: '#141416',
          card: '#18181B',
        },
        ink: {
          DEFAULT: '#F2F2F0',
          dim: '#8A8A88',
          mute: '#5C5C5A',
        },
        accent: {
          DEFAULT: '#DDE227',
          hover: '#FFFF33',
          deep: '#2E2F0A',
        },
      },
    },
  },
  plugins: [],
};
