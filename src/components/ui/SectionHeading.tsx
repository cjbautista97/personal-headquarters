import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  delay?: number;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  delay = 0,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={alignClass}
    >
      {eyebrow && (
        <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
