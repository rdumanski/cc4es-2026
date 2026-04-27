import { motion } from 'framer-motion';

interface Props {
  badge: string;
  subtitle: string;
  date: string;
  location: string;
  learnMore: string;
  contact: string;
  lang: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroAnimations({ badge, subtitle, date, location, learnMore, contact, lang }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Status badge */}
      <motion.div variants={item}>
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5
                     border border-accent/30 bg-accent/5
                     font-mono text-xs text-accent tracking-widest uppercase"
          style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
          {badge}
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1 variants={item} className="font-mono font-bold leading-none tracking-tight">
        <span
          className="block text-6xl sm:text-8xl lg:text-[108px] text-white animate-glitch"
          style={{
            fontFamily: 'Orbitron, monospace',
            textShadow: '0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)',
          }}
        >
          CC<span style={{ color: '#ff2a6d', textShadow: '0 0 20px rgba(255,42,109,0.7), 0 0 60px rgba(255,42,109,0.3)' }}>4</span>ES
        </span>

        <span
          className="block text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-widest"
          style={{
            fontFamily: 'Orbitron, monospace',
            background: 'linear-gradient(90deg, #00f5ff 0%, #bf00ff 55%, #ff2a6d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 12px rgba(0,245,255,0.35))',
          }}
        >
          2026
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={item} className="font-mono text-sm sm:text-base text-gray-400 tracking-[0.25em] uppercase">
        {subtitle}
      </motion.p>

      {/* Date + location */}
      <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
        <span
          className="px-4 py-2 border border-gray-700 bg-void text-gray-300 tracking-widest uppercase"
          style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
        >
          {date}
        </span>
        <span className="text-neon-yellow text-lg" style={{ filter: 'drop-shadow(0 0 6px rgba(255,230,0,0.8))' }} aria-hidden="true">⚡</span>
        <span className="text-accent tracking-widest uppercase" style={{ textShadow: '0 0 8px rgba(0,245,255,0.6)' }}>
          {location}
        </span>
      </motion.div>

      {/* CTAs */}
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <a
          href={`/${lang}/#about`}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                     border border-accent text-accent font-mono font-bold text-sm tracking-widest uppercase
                     hover:bg-accent hover:text-void hover:shadow-[0_0_25px_rgba(0,245,255,0.5)]
                     transition-all duration-200"
          style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
        >
          {learnMore}
        </a>
        <a
          href={`/${lang}/cfp`}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                     border border-neon-pink text-neon-pink font-mono font-bold text-sm tracking-widest uppercase
                     hover:bg-neon-pink hover:text-void hover:shadow-[0_0_25px_rgba(255,42,109,0.5)]
                     transition-all duration-200"
          style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
        >
          {contact}
        </a>
      </motion.div>
    </motion.div>
  );
}
