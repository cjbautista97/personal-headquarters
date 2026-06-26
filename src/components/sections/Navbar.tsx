import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '@/data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filteredNav = navItems.filter((item) => item.label !== 'Home');

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full bg-beige/90 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border' : ''
      }`}
    >
      <div className="container-custom py-5 flex justify-between items-center">
        <a
          href="/"
          className="text-sm font-semibold text-dark tracking-tight hover:text-secondary transition-colors"
        >
          CJ Bautista
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {filteredNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-secondary hover:text-dark transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:cjbautista97@gmail.com"
          className="md:hidden text-sm text-secondary hover:text-dark transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
