import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryCard } from '@/components/ui/GalleryCard';
import { galleries } from '@/data/galleries';

export function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-beige text-dark"
    >
      <Navbar />

      <section className="pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Gallery"
            title="Photography"
            subtitle="A collection of favorite frames, organized by shoot and location."
          />

          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {galleries.map((gallery, idx) => (
              <GalleryCard
                key={gallery.slug}
                slug={gallery.slug}
                title={gallery.title}
                location={gallery.location}
                date={gallery.date}
                coverLabel={gallery.images[0]?.label ?? '—'}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
