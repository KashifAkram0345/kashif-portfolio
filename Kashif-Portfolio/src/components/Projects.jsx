import { motion } from 'framer-motion';

const projects = [
  {
    name: 'DevOps Lab Platform',
    status: 'Completed',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
  },
  {
    name: 'Google OAuth Authentication API',
    features: ['Google Login', 'Authentication', 'Authorization', 'REST API', 'Protected Routes'],
    tech: ['Node.js', 'Express.js', 'Google OAuth', 'MongoDB'],
  },
  {
    name: 'Portfolio v2',
    status: 'In Progress',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-kicker">mission dashboard</p>
        <h2 className="section-title">Projects under command.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              y: -10,
              scale: 1.025,
              boxShadow: '0 0 34px rgba(57,255,136,0.35), 0 0 74px rgba(183,108,255,0.24)',
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel flex min-h-[24rem] flex-col rounded-lg p-6 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
                mission 0{index + 1}
              </span>
              {project.status && (
                <span className="rounded-full border border-neon-green/40 bg-neon-green/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-neon-green">
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {project.name}
            </h3>
            {project.features && (
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon-purple">
                  Features
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-md border border-neon-purple/20 bg-neon-purple/10 px-3 py-2 text-xs text-slate-100">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-auto pt-7">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon-green">Tech</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-neon-green via-neon-purple to-transparent" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
