/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CC4ES Cyberpunk palette
        void:    '#08000f',         // deep dark purple-black
        surface: '#16002e',         // dark purple surface
        accent:  '#00f5ff',         // neon cyan
        'accent-dim': '#00c5d4',    // dimmer cyan for hover
        'brand-red': '#ff2a6d',     // neon pink (the "4")
        grid:    '#0d001a',         // dark purple grid bg
        'neon-pink':   '#ff2a6d',
        'neon-cyan':   '#00f5ff',
        'neon-purple': '#bf00ff',
        'neon-green':  '#39ff14',
        'neon-yellow': '#ffe600',
      },
      fontFamily: {
        display: ['Orbitron', 'JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Cyberpunk neon grid
        'grid-pattern': `
          linear-gradient(rgba(0,245,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.06) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      animation: {
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan':        'scan 8s linear infinite',
        'glitch':      'glitch 4s steps(1) infinite',
        'flicker':     'flicker 6s linear infinite',
        'neon-pulse':  'neonPulse 2s ease-in-out infinite alternate',
        'scanline':    'scanline 6s linear infinite',
      },
      keyframes: {
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 88%, 100%': { transform: 'translate(0)', clipPath: 'none' },
          '90%': { transform: 'translate(-3px, 1px)', filter: 'hue-rotate(90deg)', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)' },
          '92%': { transform: 'translate(3px, -1px)', filter: 'hue-rotate(-90deg)', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' },
          '94%': { transform: 'translate(-1px, 2px)', clipPath: 'none' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.8' },
        },
        neonPulse: {
          '0%':   { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 25px #00f5ff, 0 0 50px #00f5ff' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
