import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "bg1": "var(--bg-primary)",
        "bg2": "var(--bg-secondary)",
        "bg1-dark": "var(--bg-primary-dark)",
        "bg2-dark": "var(--bg-secondary-dark)"
      },
      fontFamily: {
        'serif': ['var(--font-lato)']
      },
      dropShadow: {
        'sm': '0 0px 8px rgba(0, 0, 0, 0.6)'
      }
    },
    fontSize: {
      'sm': '0.875rem',
      'base': '1.125rem',
      'lg': '1.5rem',
      'xl': '2.25rem',
      '2xl': '4.5rem',
      '3xl': '6rem'
    },
    screens: {
      'xl': '1100px'
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config
