import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.12, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-lg border border-white/10 bg-black/35 px-4 py-3 shadow-glow backdrop-blur-2xl sm:px-5"
      >
        <a
          href="#home"
          className="font-display text-sm font-black uppercase tracking-[0.22em] text-white sm:text-base"
          aria-label="Kashif Akram home"
        >
          KA
        </a>

        <div className="flex items-center gap-1 overflow-x-auto rounded-lg border border-white/5 bg-white/[0.035] p-1">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-md px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-300 transition-colors duration-500 hover:text-white sm:text-xs"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md border border-neon-green/30 bg-neon-green/10 shadow-[0_0_18px_rgba(57,255,136,0.22)]"
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
