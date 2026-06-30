import { motion } from 'framer-motion';

const projects = [
  {
    name: 'DevOps Lab Platform',
    status: 'Completed',
    description:
      'A modern web platform focused on DevOps concepts with a responsive UI and optimized deployment workflow.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
    links: {
      live: 'https://devops-lab-2026.vercel.app/',
    },
  },
  {
    name: 'Google OAuth Authentication API',
    status: 'Completed',
    description:
      'A secure authentication system using Google OAuth 2.0 with authentication, authorization, protected routes, and REST APIs.',
    tech: ['Node.js', 'Express.js', 'Google OAuth', 'MongoDB'],
  },
  {
    name: 'Amazon Clone',
    status: 'Completed',
    description:
      'A responsive Amazon-inspired frontend application with a modern homepage, navigation bar, product sections, responsive layout, and clean user interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Tic Tac Toe Game',
    status: 'Completed',
    description:
      'An interactive Tic Tac Toe game featuring winner detection, game reset functionality, responsive design, and smooth user interactions.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'React Landing Page',
    status: 'Completed',
    description:
      'A responsive landing page built with React featuring reusable components, modern UI, smooth layout, and mobile-friendly design.',
    tech: ['React', 'CSS3'],
  },
  {
    name: 'LeetMetric App',
    status: 'Completed',
    description:
      'A web application that visualizes coding progress by displaying LeetCode statistics, solved problems, and user performance through an intuitive dashboard.',
    tech: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
  },
  {
    name: 'Portfolio v2',
    status: 'In Progress',
    description:
      'A cinematic developer portfolio featuring glassmorphism, Framer Motion animations, responsive layouts, and modern UI/UX.',
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

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            transition={{ duration: 1.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel flex min-h-[26rem] flex-col rounded-lg p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-neon-cyan">
                mission 0{index + 1}
              </span>
              <span className="rounded-full border border-neon-green/40 bg-neon-green/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-neon-green shadow-[0_0_18px_rgba(57,255,136,0.18)]">
                {project.status}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base">
              {project.description}
            </p>

            <div className="mt-7">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon-green">Tech Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-slate-100 shadow-[inset_0_0_16px_rgba(57,255,136,0.04)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-7">
              {project.links && (
                <div className="mb-7 flex flex-wrap gap-3">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors duration-500 hover:border-neon-purple/60 hover:text-neon-purple"
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-lg border border-neon-green/35 bg-neon-green/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors duration-500 hover:border-neon-green/70 hover:text-neon-green"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              )}
              <div className="h-px bg-gradient-to-r from-neon-green via-neon-purple to-transparent" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
