import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  },
});

export function Hero() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40">
      <div className="container-custom">
        <motion.div initial="hidden" animate="visible" className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp(0)}
            className="text-xs font-semibold text-secondary uppercase tracking-widest mb-10"
          >
            Digital Marketing × Software Development
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.06] tracking-tight text-dark mb-10 md:mb-14"
          >
            I build systems<br className="hidden sm:block" /> that make<br className="hidden sm:block" /> marketing<br className="hidden sm:block" /> work better.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp(0.2)}
            className="text-xl md:text-2xl text-secondary mb-7 leading-relaxed max-w-xl"
          >
            Paid social strategist. Vibe coder. Somewhere in between.
          </motion.p>

          {/* Body */}
          <motion.p
            variants={fadeUp(0.3)}
            className="text-base md:text-lg text-dark/80 leading-relaxed max-w-2xl mb-14 md:mb-16"
          >
            I run Meta and TikTok campaigns for a living. Outside of that, I build tools —
            workflow systems, training apps, audit generators — that solve problems I ran into
            and couldn&apos;t find a clean solution for. The ads and the software are the same
            thing: getting from a messy problem to something that actually works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.4)}
            className="flex gap-3 flex-wrap items-center"
          >
            <a
              href="#work"
              className="px-7 py-3.5 bg-dark text-white text-sm font-medium rounded-md hover:bg-dark/85 transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-border text-dark text-sm font-medium rounded-md hover:bg-white hover:border-dark/20 transition-all"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
