import { motion } from 'framer-motion';

const signalLines = [
  'Encrypting message...',
  'Sending secure signal...',
  'Connection established.',
];

const links = [
  { label: 'Email', value: 'm.kashif6833@gmail.com', href: 'mailto:m.kashif6833@gmail.com' },
  { label: 'GitHub', value: 'KashifAkram0345', href: 'https://github.com/KashifAkram0345' },
  {
    label: 'LinkedIn',
    value: 'kashif-akram-834569301',
    href: 'https://www.linkedin.com/in/kashif-akram-834569301',
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-kicker">secure channel</p>
        <h2 className="section-title">Contact transmission ready.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.42 } },
          }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          {signalLines.map((line) => (
            <motion.p
              key={line}
              variants={{
                hidden: { opacity: 0, x: -18 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="terminal-line mb-4 last:mb-0"
            >
              &gt; {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-lg p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-200">
            Reach me for project conversations, collaboration, and software engineering
            opportunities connected to web applications, APIs, deployment, and networking.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ scale: 1.06, boxShadow: '0 0 24px rgba(183,108,255,0.36)' }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 text-center font-mono text-sm text-white"
              >
                <span className="block uppercase tracking-[0.2em] text-neon-green">{link.label}</span>
                <span className="mt-2 block break-words text-xs text-slate-300">{link.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
