import { motion } from 'framer-motion';

const lines = [
  "I'm Kashif Akram, a Software Engineer passionate about building modern web applications and continuously improving my development skills.",
  'My interests include JavaScript, React, Node.js, Express.js, REST APIs, authentication systems, databases, deployment platforms, and Computer Networking.',
  'I enjoy building practical projects, learning new technologies, and solving real-world problems through software.',
];

function About() {
  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <p className="section-kicker">identity file</p>
        <h2 className="section-title">Focused on practical software that ships.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.35 } },
          }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          {lines.map((line) => (
            <motion.p
              key={line}
              variants={{
                hidden: { opacity: 0, x: -24, filter: 'blur(8px)' },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mb-6 text-lg leading-8 text-slate-200 last:mb-0"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-neon-green">
            engineering focus
          </p>
          <div className="mt-6 space-y-4 text-slate-200">
            <p>Modern UI development with React and Tailwind CSS.</p>
            <p>Backend APIs with Node.js, Express.js, authentication, and databases.</p>
            <p>Deployment awareness across Vercel, Render, Git, GitHub, and DevOps basics.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
