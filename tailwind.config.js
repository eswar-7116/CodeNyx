/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-end SaaS Dark Mode (Stark, aggressive elegance)
        // Shying completely away from standard purples, blues, or soft earth tones
        'accent-primary': '#FFFFFF', // Pure OLED white for absolute contrast
        'accent-secondary': '#FFFF00', // Pac-Man Yellow
        'accent-tertiary': '#888888', // Technical neutral gray
        'accent-gold': '#F2C94C', // Refined non-yellow gold
        'bg-base': '#000000', // Pure absolute black 
        'ui-surface': '#09090A', // Almost black, just visible against background
        'ui-border': 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'glow-hero': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.1) 0%, transparent 65%)',
        'glow-card': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
