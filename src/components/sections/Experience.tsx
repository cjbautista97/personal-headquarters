import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const experiences = [
  {
    company: 'Independent',
    role: 'Paid Social Strategist',
    period: '2021 – Present',
    current: true,
    description:
      'Managing Meta and TikTok ad accounts — strategy, creative testing, campaign structure, optimization, and reporting. The scope is wide because I own decisions start to finish.',
    points: [
      'Strategy, creative testing, and campaign structure for DTC ecommerce accounts',
      'Built reporting systems that actually get read and used by stakeholders',
      'Run account audits that changed how budgets were allocated',
      'Developed AI-assisted workflows to eliminate repetitive account management work',
    ],
  },
];

export function Experience() {
  return (
    <section className="section-spacing bg-white border-t border-b border-border">
      <div className="container-custom">
        <SectionHeading eyebrow="Experience" title="Professional background" />

        <div className="mt-14 md:mt-18 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6 md:gap-10">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div className="w-px flex-1 bg-border mt-2" />
                </div>

                {/* Content */}
                <div className="pb-12 last:pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-accent/10 text-accent rounded uppercase tracking-wide">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary mb-5">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-base text-dark/80 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-4 text-sm text-dark/75 leading-relaxed">
                        <span className="text-accent flex-shrink-0 mt-0.5">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
