import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="Organized by discipline"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 md:mt-18 grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <h3 className="text-xs font-semibold text-dark uppercase tracking-widest mb-6">
                {category.name}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-secondary hover:text-dark transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
