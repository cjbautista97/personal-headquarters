import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock';

interface GalleryCardProps {
  slug: string;
  title: string;
  location: string;
  date?: string;
  coverLabel: string;
  index?: number;
}

export function GalleryCard({
  slug,
  title,
  location,
  date,
  coverLabel,
  index = 0,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <Link to={`/portfolio/${slug}`} className="group block">
        <PlaceholderBlock
          label={coverLabel}
          className="aspect-[4/5] w-full rounded-md transition-opacity duration-300 group-hover:opacity-70"
        />
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-dark group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-secondary mt-0.5">{location}</p>
          </div>
          {date && (
            <span className="text-xs text-secondary/70 mt-1 flex-shrink-0">
              {date}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
