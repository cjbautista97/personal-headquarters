import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Process } from '@/components/sections/Process';
import { Now } from '@/components/sections/Now';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { WorkflowDiagram } from '@/components/ui/WorkflowDiagram';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-beige text-dark"
    >
      <Navbar />
      <Hero />

      {/* Approach workflow — between hero and about */}
      <section className="section-spacing-compact border-t border-border">
        <div className="container-custom">
          <WorkflowDiagram
            title="My approach"
            steps={[
              { label: 'Research' },
              { label: 'Strategy' },
              { label: 'Build' },
              { label: 'Measure' },
              { label: 'Iterate' },
            ]}
          />
        </div>
      </section>

      <About />
      <Work />
      <Experience />
      <Skills />
      <Process />
      <Now />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
