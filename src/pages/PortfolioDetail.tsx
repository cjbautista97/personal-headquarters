import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock';
import { GalleryCard } from '@/components/ui/GalleryCard';
import { galleries } from '@/data/galleries';

export function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-beige text-dark"
      >
        <Navbar />
        <section className="pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="container-custom text-center">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
              Gallery
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Location not found
            </h1>
            <Link
              to="/portfolio"
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              ← Back to all locations
            </Link>
          </div>
        </section>
        <Footer />
      </motion.div>
    );
  }

  const otherGalleries = galleries
    .filter((g) => g.slug !== gallery.slug)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-beige text-dark"
    >
      <Navbar />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container-custom">
          <Link
            to="/portfolio"
            className="text-sm text-secondary hover:text-dark transition-colors inline-flex items-center gap-1.5"
          >
            ← All locations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
              Gallery
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-dark">
              {gallery.title}
            </h1>
            <p className="text-sm text-secondary mt-4">
              {gallery.location}
              {gallery.date ? ` — ${gallery.date}` : ''}
            </p>
            <p className="text-lg text-secondary mt-4 max-w-2xl leading-relaxed">
              {gallery.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.images.map((image, idx) => (
              <motion.div
                key={image.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx % 6) * 0.06 }}
                viewport={{ once: true, margin: '-60px' }}
                className={idx % 5 === 0 ? 'col-span-2' : ''}
              >
                <PlaceholderBlock
                  label={image.label}
                  className={`w-full rounded-md ${idx % 5 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {otherGalleries.length > 0 && (
        <section className="pb-24 md:pb-32 pt-16 md:pt-20 border-t border-border">
          <div className="container-custom">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-10">
              More locations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {otherGalleries.map((g, idx) => (
                <GalleryCard
                  key={g.slug}
                  slug={g.slug}
                  title={g.title}
                  location={g.location}
                  date={g.date}
                  coverLabel={g.images[0]?.label ?? '—'}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </motion.div>
  );
}
