import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="section-spacing bg-white border-t border-b border-border overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative">
              <img
                src="/images/cj-portrait.png"
                alt="CJ Bautista"
                className="w-full object-cover rounded-xl"
                style={{ aspectRatio: '3 / 4' }}
              />
              {/* Subtle caption under photo */}
              <p className="mt-4 text-xs text-secondary text-center tracking-wide">
                CJ Bautista — Los Angeles
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:pt-2"
          >
            <SectionHeading
              eyebrow="About"
              title="From advertising to building things"
            />

            <div className="mt-10 space-y-6 text-base md:text-lg leading-relaxed text-dark/80">
              <p>
                I got into paid advertising because I was drawn to the puzzle of it. You have a
                hypothesis about what a person wants. You write something, design something,
                spend money on it, and find out immediately if you were right. That feedback
                loop is addictive.
              </p>
              <p>
                What I didn&apos;t expect is how much of the job is actually operations.
                Managing data across platforms. Building reports that people will actually read.
                Running the same audit process on every new account. After enough repetition,
                I started asking: why am I doing this manually?
              </p>
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

            {/* Pull quote */}
            <blockquote className="mt-12 border-l-2 border-accent pl-7 py-1">
              <p className="text-lg md:text-xl font-medium text-dark leading-relaxed">
                "The ads and the software are the same thing. Both are about getting from a
                messy problem to something that actually works."
              </p>
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
