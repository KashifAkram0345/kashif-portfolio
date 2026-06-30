import { motion } from 'framer-motion';
import profileImage from '../assets/kashif-profile.jpeg';
import { downloadResumePdf } from '../utils/resumePdf.js';

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

      <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:text-left">
        <div className="order-2 lg:order-1">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="glass-panel w-full rounded-lg p-5 text-left sm:p-7"
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
              className="mx-auto mt-7 max-w-3xl text-xl font-semibold text-slate-100 sm:text-2xl lg:mx-0"
            >
              Software Engineer
            </motion.p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              Building modern web applications with JavaScript, APIs, cloud deployment, and networking
              fundamentals.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <motion.a whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.98 }} className="cinematic-button" href="#projects">
                View Projects
              </motion.a>
              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="cinematic-button border-neon-purple/40 from-neon-purple/20 to-neon-cyan/10"
                onClick={downloadResumePdf}
              >
                Download Resume
              </motion.button>
              <motion.a whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.98 }} className="cinematic-button" href="#contact">
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, y: 42, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative grid aspect-square w-64 place-items-center sm:w-80 lg:w-[25rem]"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,rgba(57,255,136,0.48),rgba(183,108,255,0.45),rgba(66,245,255,0.22),rgba(57,255,136,0.48))] blur-2xl"
            />
            <div className="glass-panel relative h-[86%] w-[86%] overflow-hidden rounded-full border-neon-green/25 p-3 shadow-[0_0_36px_rgba(57,255,136,0.32),0_0_96px_rgba(183,108,255,0.25)]">
              <div className="absolute inset-3 rounded-full border border-neon-green/35 shadow-[inset_0_0_34px_rgba(57,255,136,0.16)]" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-black/50">
                <img
                  src={profileImage}
                  alt="Kashif Akram"
                  className="h-full w-full object-cover object-[50%_24%] saturate-110"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/30 via-transparent to-neon-purple/20" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
