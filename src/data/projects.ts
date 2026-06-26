import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'workout-tracker',
    title: 'Workout Tracker',
    description:
      'A web app for planning and logging running and weightlifting workouts — built because nothing else did exactly what I wanted.',
    problem:
      'I train consistently enough that I needed a system for it, not just a notes app. The existing tools were either too bloated or built around someone else\'s idea of how training should work.',
    solution:
      'Built my own. The app has a library of workout templates split into running and weights. At the start of each week you check off which ones you\'re planning to do. During the week you log what actually happened — distance and time for runs, exercise/weight/reps/RPE for lifting sets. At the end of the week you see the totals.',
    outcome:
      'Simple, focused tool that does exactly what\'s needed and nothing else. This was my first real project with React and Vite. The roadmap includes adaptive logic based on Garmin recovery data, but v1 had to be simple enough to finish.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'localStorage', 'Claude Code', 'GitHub'],
    featured: true,
  },
  {
    id: 'ai-audit-generator',
    title: 'AI Marketing Audit Generator',
    description:
      'A workflow that turns raw ad account data into executive-ready audit reports — built to solve a problem I had to do manually, repeatedly.',
    problem:
      'Every time I took on a new ad account, I did the same work: pull the data, look for the patterns, structure the findings, write the recommendations. The thinking was real. The process was repetitive.',
    solution:
      'Built a system to handle the repetitive part. It takes exported account history, runs it through a structured AI workflow built around real advertising best practices, and produces an audit with clear findings and actionable recommendations.',
    outcome:
      'Presentation-ready audits that eliminate manual process work while preserving the judgment that matters. The quality of output is determined by the structure fed in—getting the framework right was the hard part.',
    technologies: ['Claude API', 'Structured Prompting', 'Google Sheets', 'Workflows'],
    featured: true,
  },
  {
    id: 'ai-personal-system',
    title: 'Personal AI System',
    description:
      'A connected set of tools that handles research, planning, notes, and daily operations — built as infrastructure, not a productivity experiment.',
    problem:
      'Most people use AI tools one at a time, for one-off tasks. I wanted something more durable: a system where context carries forward, research is organized, and tools work together.',
    solution:
      'Built a personal operating layer. Obsidian is the knowledge base. AI tools handle different types of work based on what they\'re good at. Research pipelines feed back into structured notes.',
    outcome:
      'Something closer to a second brain than a chat window. Still building it—probably always will be. The discipline of building it has been as valuable as the output.',
    technologies: ['Claude', 'Claude Code', 'ChatGPT', 'Perplexity', 'Obsidian', 'Automation'],
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'This Website',
    description: 'A personal site built from scratch — no site builders, no templates, just code.',
    problem:
      'I wanted to build and own a personal website without relying on Squarespace or Webflow, and actually understand what I was building.',
    solution:
      'Built with Vite. Lightweight, responsive, designed to be simple enough to maintain. Posts are written separately and added through Claude Code. No CMS, no database.',
    outcome:
      'A learning project as much as a portfolio. Every piece of it I had to figure out, which means I actually understand how it works.',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Claude Code', 'GitHub'],
    featured: true,
  },
];
