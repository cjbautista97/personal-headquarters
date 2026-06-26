import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Now() {
  return (
    <section id="now" className="section-spacing">
      <div className="container-custom">
        <SectionHeading eyebrow="Now" title="What I'm focused on" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-dark/80"
        >
          <p>
            Right now I&apos;m focused on getting better at building things. That means shipping
            the workout tracker, extending it with adaptive logic, and continuing to develop my
            React skills through projects that actually solve problems I have.
          </p>
          <p>
            On the marketing side, I&apos;m experimenting with AI-assisted workflows —
            specifically where structured prompting can remove friction from the repetitive
            parts of account management without removing the judgment that matters.
          </p>
          <p>
            I&apos;m training consistently. Building toward a half marathon. Tracking everything.
            Still playing a lot of Riftbound and deep in fantasy baseball.
          </p>
          <p>
            I&apos;m also trying to figure out what comes next professionally. I don&apos;t have
            a clean answer to that yet. I know I want to be somewhere that builds things —
            products, tools, something real — and where I&apos;m working with people, not just
            solo. That&apos;s the direction. The specific form is still taking shape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
