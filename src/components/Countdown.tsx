import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONFERENCE_DATE = new Date('2026-09-21T08:00:00+02:00');

interface TimeUnit { value: number; label: string; }

interface Props {
  labels?: [string, string, string, string];
}

function pad(n: number): string { return String(n).padStart(2, '0'); }

function getTimeLeft(labels: [string, string, string, string]): TimeUnit[] {
  const diff = Math.max(0, CONFERENCE_DATE.getTime() - Date.now());
  return [
    { value: Math.floor(diff / (1000 * 60 * 60 * 24)),       label: labels[0] },
    { value: Math.floor((diff / (1000 * 60 * 60)) % 24),     label: labels[1] },
    { value: Math.floor((diff / (1000 * 60)) % 60),           label: labels[2] },
    { value: Math.floor((diff / 1000) % 60),                  label: labels[3] },
  ];
}

function DigitBlock({ value, label }: TimeUnit) {
  const display = pad(value);
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 bg-surface border border-accent/40
                   flex items-center justify-center overflow-hidden"
        style={{
          clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
          boxShadow: '0 0 12px rgba(0,245,255,0.15) inset, 0 0 8px rgba(0,245,255,0.1)',
        }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={{    y:  20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="font-mono font-bold text-2xl sm:text-3xl text-accent tabular-nums relative z-20"
            style={{ textShadow: '0 0 10px rgba(0,245,255,0.8)' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
        <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-accent/60" aria-hidden="true" />
        <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent/60" aria-hidden="true" />
        <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-accent/60" aria-hidden="true" />
        <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-accent/60" aria-hidden="true" />
      </div>
      <span className="font-mono text-[10px] tracking-widest text-accent/60">{label}</span>
    </div>
  );
}

export default function Countdown({ labels = ['DAYS', 'HRS', 'MIN', 'SEC'] }: Props) {
  const l = labels as [string, string, string, string];
  const [units, setUnits] = useState<TimeUnit[]>(getTimeLeft(l));

  useEffect(() => {
    const id = setInterval(() => setUnits(getTimeLeft(l)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5 sm:gap-3" role="timer" aria-label="Time until CC4ES 2026">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-start gap-1.5 sm:gap-3">
          <DigitBlock {...unit} />
          {i < units.length - 1 && (
            <span className="font-mono text-accent text-lg sm:text-2xl font-bold mt-3 sm:mt-4 select-none animate-pulse-slow" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
