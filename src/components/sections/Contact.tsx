import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing bg-dark text-white border-t border-dark"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-8">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
            Let&apos;s work on<br className="hidden sm:block" /> something real.
          </h2>

          <p className="text-lg md:text-xl text-white/55 mb-14 max-w-xl leading-relaxed">
            If you&apos;re working on something interesting and think I could be useful — in
            marketing, in building, or somewhere in between — I&apos;d be glad to hear about it.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3 flex-wrap items-center"
          >
            <a
              href="mailto:cjbautista97@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark text-sm font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email me
            </a>

            <a
              href="https://github.com/cjbautista97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/8 hover:border-white/40 transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/cjbautista97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/8 hover:border-white/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
