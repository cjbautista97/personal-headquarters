import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-dark border-t border-white/8 py-10 md:py-12"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-white/30">© 2025 CJ Bautista. All rights reserved.</p>
          <a
            href="#"
            className="text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
