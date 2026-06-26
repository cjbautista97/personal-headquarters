import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { WorkflowDiagram } from '@/components/ui/WorkflowDiagram';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export function Work() {
  return (
    <section id="work" className="section-spacing">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          subtitle="Selected work across marketing systems, AI tools, and full-stack development"
        />

        <div className="mt-16 md:mt-20">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} {...project} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-border"
        >
          <WorkflowDiagram
            title="Development workflow"
            steps={[
              { label: 'Plan', description: 'Understand the actual problem' },
              { label: 'Design', description: 'Prototype the smallest thing' },
              { label: 'Build', description: 'Ship incrementally' },
              { label: 'Test', description: 'Measure what matters' },
              { label: 'Iterate', description: 'Refine and improve' },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
