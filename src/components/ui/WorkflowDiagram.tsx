import { motion } from 'framer-motion';

interface WorkflowStep {
  label: string;
  description?: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  title?: string;
}

export function WorkflowDiagram({ steps, title }: WorkflowDiagramProps) {
  return (
    <div>
      {title && (
        <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-8">
          {title}
        </p>
      )}

      {/* Desktop: horizontal pipeline */}
      <div className="hidden md:flex items-stretch">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-stretch flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              <span className="text-xs font-mono text-secondary/40 mb-3">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 border border-border rounded-md bg-white px-4 py-3">
                <p className="text-sm font-semibold text-dark">{step.label}</p>
                {step.description && (
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.div>

            {idx < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-8 flex items-center justify-center pb-0 pt-[28px]"
              >
                <div className="w-full h-px bg-border relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-border" />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden space-y-2">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <span className="text-xs font-mono text-secondary/40 mt-3 flex-shrink-0 w-6">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 border border-border rounded-md bg-white px-4 py-3">
              <p className="text-sm font-semibold text-dark">{step.label}</p>
              {step.description && (
                <p className="text-xs text-secondary mt-1">{step.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
