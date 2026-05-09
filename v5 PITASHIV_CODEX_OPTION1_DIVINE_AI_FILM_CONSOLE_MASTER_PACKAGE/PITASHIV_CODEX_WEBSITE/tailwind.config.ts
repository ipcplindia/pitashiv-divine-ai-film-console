import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blackMetal: '#030305', obsidian: '#07070B', titanium: '#111118', midnight: '#080A16', navy: '#050817',
        gold: '#D4AF37', antique: '#B88A2A', platinum: '#D8DCE5', silver: '#8E949E', champagne: '#E8C766',
        cyan: '#00E7FF', violet: '#8A4DFF', magenta: '#FF2FD6', emerald: '#00FFB2', electric: '#1B6CFF', amber: '#FFB84D', ivory: '#F6F1E7'
      },
      boxShadow: {
        gold: '0 0 34px rgba(212,175,55,.22), inset 0 0 28px rgba(212,175,55,.08)',
        cyan: '0 0 32px rgba(0,231,255,.18)'
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
