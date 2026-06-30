import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'Authentication', 'Authorization', 'Google OAuth'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Deployment',
    skills: ['Docker (Basics)', 'Render', 'Vercel', 'Git', 'GitHub', 'DevOps Basics'],
  },
  {
    title: 'Computer Science',
    skills: [
      'Data Structures & Algorithms (Basics)',
      'Object-Oriented Programming',
      'Computer Networking',
    ],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Postman', 'npm'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-kicker">capability matrix</p>
        <h2 className="section-title">Skills mapped by engineering area.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, boxShadow: '0 0 34px rgba(57,255,136,0.28), 0 0 78px rgba(183,108,255,0.18)' }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-lg p-5 sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_14px_rgba(57,255,136,0.85)]" />
              <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-100 shadow-[inset_0_0_18px_rgba(57,255,136,0.05)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
