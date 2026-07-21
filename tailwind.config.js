/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#00d992',
        'brand-primary-soft': '#2fd6a1',
        'brand-primary-deep': '#10b981',
        'brand-on-primary': '#101010',
        'brand-canvas': '#101010',
        'brand-canvas-soft': '#1a1a1a',
        'brand-ink': '#f2f2f2',
        'brand-ink-strong': '#ffffff',
        'brand-body': '#bdbdbd',
        'brand-mute': '#8b949e',
        'brand-hairline': '#3d3a39',
        'brand-hairline-soft': '#b8b3b0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['60px', { lineHeight: '60px', fontWeight: '400', letterSpacing: '-0.65px' }],
        'display-lg': ['36px', { lineHeight: '40px', fontWeight: '400', letterSpacing: '-0.9px' }],
        'display-md': ['24px', { lineHeight: '32px', fontWeight: '700', letterSpacing: '-0.6px' }],
        'display-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'eyebrow': ['14px', { lineHeight: '20px', fontWeight: '600', letterSpacing: '2.52px' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'code': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'button-md': ['16px', { lineHeight: '24px', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
        'chip': '4px',
        'pill': '9999px',
      },
      spacing: {
        'xxs': '2px',
        'xs': '4px',
      },
      borderWidth: {
        'hairline': '1px',
        'card-emph': '3px',
      },
    },
  },
  plugins: [],
}
