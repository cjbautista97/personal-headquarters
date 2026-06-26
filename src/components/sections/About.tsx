import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="section-spacing bg-white border-t border-b border-border">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About"
          title="From advertising to building things"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 lg:gap-20 mt-14 md:mt-18"
        >
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-dark/80">
            <p>
              I got into paid advertising because I was drawn to the puzzle of it. You have a
              hypothesis about what a person wants. You write something, design something,
              spend money on it, and find out immediately if you were right. That feedback loop
              is addictive.
            </p>
            <p>
              What I didn&apos;t expect is how much of the job is actually operations. Managing
              data across platforms. Building reports that people will actually read. Running
              the same audit process on every new account. After enough repetition, I started
              asking: why am I doing this manually?
            </p>
          </div>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-dark/80">
            <p>
              That question is what pulled me toward building things. Not because I wanted to
              become an engineer — I didn&apos;t — but because I could see clearly what the
              tool needed to do and I wanted to build it myself. So I started learning. React,
              Vite, Tailwind. AI-assisted development.
            </p>
            <p>
              I&apos;m someone who follows a thing until I understand it. Marketing, code,
              training, whatever it is — I want to know how the pieces fit together, not just
              which button to press.
            </p>
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 max-w-3xl border-l-2 border-accent pl-8 py-1"
        >
          <p className="text-xl md:text-2xl font-medium text-dark leading-relaxed">
            "The ads and the software are the same thing. Both are about getting from a messy
            problem to something that actually works."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
