import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll event listener can be added here if needed for features like fade-on-scroll
    const handleScroll = () => {
      // Placeholder for scroll-based interactions
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-slate-900"
    >
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">CJ Bautista</h1>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
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
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              I build systems that make marketing work better.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              Paid social strategist. Vibe coder. Somewhere in between.
            </p>
            <div className="flex gap-4 mb-12">
              <a
                href="#work"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Get in touch
              </a>
            </div>
            <div className="max-w-2xl">
              <p className="text-slate-600 leading-relaxed">
                I run Meta and TikTok campaigns for a living. Outside of that, I build tools
                — workflow systems, training apps, audit generators — that solve problems I
                ran into and couldn&apos;t find a clean solution for. The ads and the software
                are the same thing. Both are about getting from a messy problem to something
                that actually works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            About
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6 text-slate-700 leading-relaxed"
          >
            <p>
              I got into paid advertising because I was drawn to the puzzle of it. You have a
              hypothesis about what a person wants. You write something, design something, spend
              money on it, and find out immediately if you were right. That feedback loop is
              addictive.
            </p>
            <p>
              What I didn&apos;t expect is how much of the job is actually operations. Managing
              data across platforms. Building reports that people will actually read. Running
              the same audit process on every new account. After enough repetition, I started
              asking: why am I doing this manually?
            </p>
            <p>
              That question is what pulled me toward building things. Not because I wanted to
              become an engineer — I didn&apos;t — but because I could see clearly what the tool
              needed to do and I wanted to build it myself. So I started learning. React, Vite,
              Tailwind. AI-assisted development. Working in the terminal, pushing to GitHub,
              iterating until something runs.
            </p>
            <p>
              I work solo at my company. There&apos;s no team to bounce ideas off, no one doing
              this job next to me. That&apos;s been uncomfortable, but it&apos;s also made me
              more self-reliant about figuring things out. When I hit a wall, I research it,
              test it, or find someone who&apos;s been there before.
            </p>
            <p>
              I&apos;m based in Orange County. Outside of work I run — building toward
              half-marathon mileage — and track recovery obsessively with a Garmin. I read
              seriously. I&apos;ve been getting into photography again after a long gap.
              I&apos;ve played basketball most of my life.
            </p>
            <p>
              None of that is separate from how I work. I&apos;m someone who follows a thing
              until I understand it. Marketing, code, training, whatever it is — I want to know
              how the pieces fit together, not just which button to press.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work / Projects Section */}
      <section id="work" className="section-padding">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Featured projects
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="border-l-4 border-slate-200 pl-8 py-4 hover:border-slate-400 transition-colors"
              >
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-lg text-slate-600 mb-6">{project.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Problem</p>
                    <p className="text-slate-700">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Solution</p>
                    <p className="text-slate-700">{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Outcome</p>
                    <p className="text-slate-700">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded hover:bg-slate-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Professional experience
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6 text-slate-700 leading-relaxed"
          >
            <div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Paid social advertising</h4>
              <p>
                I manage Meta and TikTok ad accounts — strategy, creative testing, campaign
                structure, optimization, reporting. The scope of the job is wide because
                I&apos;m the only one doing it. That means I own decisions start to finish:
                what we test, what we cut, what we scale.
              </p>
            </div>
            <div>
              <p>
                The work I&apos;m most proud of isn&apos;t the campaigns that performed.
                It&apos;s the infrastructure around them. I&apos;ve built reporting systems that
                actually get used. I&apos;ve run account audits that changed how budgets were
                allocated. I&apos;ve translated platform data into plain-language
                recommendations for people who don&apos;t live in Ads Manager.
              </p>
            </div>
            <div>
              <p>
                The hardest part of this kind of role is the absence of feedback loops. The
                platforms change. Attribution is murky. You make your best call based on what
                you know, measure what you can, and update when you&apos;re wrong. I&apos;ve
                gotten comfortable with that uncertainty.
              </p>
            </div>
            <div>
              <p>
                Previous work has included Google Ads, ecommerce campaigns, lead generation, and
                working directly with clients to improve conversion rates and reduce cost per
                acquisition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Skills
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <h4 className="text-lg font-bold mb-4 text-slate-900">{category.name}</h4>
                <div className="flex gap-2 flex-wrap">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            My process
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-slate-600 mb-8">
              Problems that matter are usually messier than they first appear. Here&apos;s how I
              approach them.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Understand the actual problem.',
                  desc: 'The stated problem and the real problem are rarely the same thing. I spend more time here than feels comfortable. It\'s worth it.',
                },
                {
                  title: 'Research before building.',
                  desc: 'There\'s usually someone who\'s already solved a version of this. Find them. Read what worked and what didn\'t.',
                },
                {
                  title: 'Prototype small.',
                  desc: 'Build the smallest thing that tests the core assumption. Scope creep is how things die before they ship.',
                },
                {
                  title: 'Measure.',
                  desc: 'Define what success looks like before you start. Otherwise you\'re guessing whether anything worked.',
                },
                {
                  title: 'Iterate.',
                  desc: 'The first version is almost never right. The goal of v1 is to learn what v2 should be.',
                },
                {
                  title: 'Automate.',
                  desc: 'If I do something more than twice, I look at whether it should be a workflow. Repetitive work is a signal, not a baseline.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Now Section */}
      <section id="now" className="section-padding">
        <div className="container-custom">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Now
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-6 text-slate-700 leading-relaxed"
          >
            <p>
              Right now I&apos;m focused on getting better at building things. That means
              shipping the workout tracker, extending it with adaptive logic, and continuing to
              develop my React skills through projects that actually solve problems I have.
            </p>
            <p>
              On the marketing side, I&apos;m experimenting with AI-assisted workflows —
              specifically where structured prompting can remove friction from the repetitive
              parts of account management without removing the judgment that matters.
            </p>
            <p>
              I&apos;m training consistently. Building toward a half marathon. Tracking
              everything. Still playing a lot of Riftbound and deep in fantasy baseball.
            </p>
            <p>
              I&apos;m also trying to figure out what comes next professionally. I don&apos;t
              have a clean answer to that yet. I know I want to be somewhere that builds things
              — products, tools, something real — and where I&apos;m working with people, not
              just solo. That&apos;s the direction. The specific form is still taking shape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact</h3>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              If you&apos;re working on something interesting and think I could be useful — in
              marketing, in building, or somewhere in between — I&apos;d be glad to hear about
              it.
            </p>
            <div className="flex gap-6 justify-center items-center flex-wrap">
              <a
                href="mailto:cjbautista97@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="https://github.com/cjbautista97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/cjbautista97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600">© 2024 CJ Bautista. All rights reserved.</p>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
          >
            Back to top
          </a>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;
