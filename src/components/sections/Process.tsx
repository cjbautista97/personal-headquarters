import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Understand the actual problem.',
    desc: "The stated problem and the real problem are rarely the same thing. I spend more time here than feels comfortable. It's worth it.",
  },
  {
    title: 'Research before building.',
    desc: "There's usually someone who's already solved a version of this. Find them. Read what worked and what didn't.",
  },
  {
    title: 'Prototype small.',
    desc: "Build the smallest thing that tests the core assumption. Scope creep is how things die before they ship.",
  },
  {
    title: 'Measure.',
    desc: "Define what success looks like before you start. Otherwise you're guessing whether anything worked.",
  },
  {
    title: 'Iterate.',
    desc: "The first version is almost never right. The goal of v1 is to learn what v2 should be.",
  },
  {
    title: 'Automate.',
    desc: "If I do something more than twice, I look at whether it should be a workflow. Repetitive work is a signal, not a baseline.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Process() {
  return (
    <section className="section-spacing bg-white border-t border-b border-border">
      <div className="container-custom">
        <SectionHeading eyebrow="Approach" title="How I work" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 md:mt-18 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants} className="space-y-3">
              <span className="text-xs font-mono text-secondary/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="font-semibold text-dark text-base leading-snug">{step.title}</h4>
              <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
