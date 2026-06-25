import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll event listener can be added here if needed for features like fade-on-scroll
    const handleScroll = () => {
      // Placeholder for scroll-based interactions
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">CJ Bautista</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              Home
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900">
              About
            </a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900">
              Projects
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-40 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Digital Marketing Analyst & Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
              Building marketing systems powered by data, automation, and AI.
              Showcasing my work through clean, modern code.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                View Projects
              </button>
              <button className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">About</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-slate max-w-none"
            >
              <p className="text-lg text-slate-600">
                I&apos;m a Digital Marketing Analyst with a passion for data-driven
                decision making and building tools that improve marketing
                efficiency. With expertise in paid media, analytics, and
                automation, I combine marketing strategy with technical skills to
                create scalable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3">Project Title</h4>
                <p className="text-slate-600 mb-4">
                  Project description goes here. This showcases your work and
                  technical skills.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    TypeScript
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate.
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold">
            Send me an email
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="container-custom flex justify-between items-center">
          <p className="text-slate-600">© 2024 CJ Bautista. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-900">
              GitHub
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
