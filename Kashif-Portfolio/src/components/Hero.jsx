import { motion } from 'framer-motion';
import resumeUrl from '../assets/Kashif-Akram-Resume.txt?url';

const bootLines = [
  'Booting Kashif Akram System...',
  'Loading Development Environment...',
  'Connecting GitHub...',
  'Loading Projects...',
  'Initializing APIs...',
  'Status: ONLINE',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.55,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Hero() {
  return (
    <section id="home" className="section-shell items-center overflow-hidden pt-32 text-center">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { duration: 38, repeat: Infinity, ease: 'linear' }, scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-green/15 bg-[conic-gradient(from_90deg,rgba(57,255,136,0.16),rgba(183,108,255,0.12),rgba(66,245,255,0.08),rgba(57,255,136,0.16))] blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass-panel w-full max-w-3xl rounded-lg p-5 text-left sm:p-7"
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-neon-green/90" />
          <span className="ml-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            boot console
          </span>
        </div>

        {bootLines.map((line) => (
          <motion.p key={line} variants={fadeUp} className="terminal-line mb-3">
            &gt; {line}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 36 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2.1, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12"
      >
        <p className="font-mono text-sm uppercase tracking-[0.45em] text-neon-purple sm:text-base">
          software interface active
        </p>
        <h1 className="mt-5 font-display text-5xl font-black leading-none text-white drop-shadow-[0_0_30px_rgba(57,255,136,0.6)] sm:text-7xl lg:text-8xl">
          Kashif Akram
        </h1>
        <motion.p
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mt-7 max-w-3xl text-xl font-semibold text-slate-100 sm:text-2xl"
        >
          Software Engineer
        </motion.p>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Building modern web applications with JavaScript, APIs, cloud deployment, and networking
          fundamentals.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.98 }} className="cinematic-button" href="#projects">
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="cinematic-button border-neon-purple/40 from-neon-purple/20 to-neon-cyan/10"
            href={resumeUrl}
            download="Kashif-Akram-Resume.txt"
          >
            Download Resume
          </motion.a>
          <motion.a whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.98 }} className="cinematic-button" href="#contact">
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
