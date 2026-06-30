import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void text-slate-100">
      <div className="fixed inset-0 -z-30 bg-[linear-gradient(125deg,#05060d,#0b1f1a,#180b2e,#05060d)] bg-[length:400%_400%] animate-gradient-slow" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(57,255,136,0.18),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(183,108,255,0.22),transparent_26%),radial-gradient(circle_at_52%_82%,rgba(66,245,255,0.11),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-40 animate-scan bg-gradient-to-b from-transparent via-neon-green/20 to-transparent blur-sm" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
