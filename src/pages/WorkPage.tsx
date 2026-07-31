import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Work } from '@/components/sections/Work';
import { Footer } from '@/components/sections/Footer';

export function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-beige text-dark"
    >
      <Navbar />
      <Work />
      <Footer />
    </motion.div>
  );
}
