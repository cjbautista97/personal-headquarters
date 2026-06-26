import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  index?: number;
}

function WorkoutTrackerDiagram() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const runDays = [true, false, true, false, true, true, false];
  const liftDays = [false, true, false, false, true, false, false];

  return (
    <div className="space-y-5">
      <p className="text-[10px] font-mono text-secondary/50 uppercase tracking-wider">Weekly log</p>
      <div className="space-y-3">
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d, i) => (
            <div key={i} className="text-center text-[10px] text-secondary/50 font-medium">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {runDays.map((active, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm transition-colors ${
                active ? 'bg-accent/70' : 'bg-border/60'
              }`}
            />
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {liftDays.map((active, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm transition-colors ${
                active ? 'bg-dark/25' : 'bg-border/60'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-5 text-[10px] text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-accent/70 rounded-sm inline-block" />
          Run
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-dark/25 rounded-sm inline-block" />
          Lift
        </span>
      </div>
    </div>
  );
}

function AuditGeneratorDiagram() {
  const stages = [
    { num: '01', label: 'Account data', sub: 'CSV export' },
    { num: '02', label: 'AI analysis', sub: 'Structured prompting' },
    { num: '03', label: 'Audit report', sub: 'Findings + recs' },
  ];

  return (
    <div className="space-y-5">
      <p className="text-[10px] font-mono text-secondary/50 uppercase tracking-wider">Workflow</p>
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
              <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center">
                <span className="text-[9px] font-mono text-secondary/60">{i + 1}</span>
              </div>
              {i < stages.length - 1 && <div className="w-px h-5 bg-border mt-1" />}
            </div>
            <div className="pb-1">
              <p className="text-xs font-semibold text-dark leading-snug">{stage.label}</p>
              <p className="text-[10px] text-secondary mt-0.5">{stage.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AISystemDiagram() {
  return (
    <div className="space-y-5">
      <p className="text-[10px] font-mono text-secondary/50 uppercase tracking-wider">System map</p>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 place-items-center">
        <div />
        <div className="bg-white border border-border rounded px-2 py-1 text-[10px] font-medium text-dark text-center whitespace-nowrap">
          Claude
        </div>
        <div />

        <div className="bg-white border border-border rounded px-2 py-1 text-[10px] font-medium text-dark text-center whitespace-nowrap">
          Obsidian
        </div>
        <div className="bg-dark text-white rounded-full w-8 h-8 flex items-center justify-center text-[9px] font-semibold">
          You
        </div>
        <div className="bg-white border border-border rounded px-2 py-1 text-[10px] font-medium text-dark text-center whitespace-nowrap">
          ChatGPT
        </div>

        <div />
        <div className="bg-white border border-border rounded px-2 py-1 text-[10px] font-medium text-dark text-center whitespace-nowrap">
          Perplexity
        </div>
        <div />
      </div>
    </div>
  );
}

function PortfolioDiagram() {
  const components = ['Navbar', 'Hero', 'Work', 'Skills', 'Contact'];

  return (
    <div className="space-y-5">
      <p className="text-[10px] font-mono text-secondary/50 uppercase tracking-wider">
        Component tree
      </p>
      <div className="space-y-1.5">
        <div className="border border-border/50 rounded px-3 py-1.5 bg-white/60">
          <span className="text-[10px] font-semibold text-secondary/50 font-mono">App</span>
        </div>
        {components.map((name) => (
          <div key={name} className="border border-border rounded px-3 py-1.5 bg-white ml-5">
            <span className="text-[10px] font-medium text-dark font-mono">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ id, index }: { id: string; index: number }) {
  const diagrams: Record<string, React.ReactNode> = {
    'workout-tracker': <WorkoutTrackerDiagram />,
    'ai-audit-generator': <AuditGeneratorDiagram />,
    'ai-personal-system': <AISystemDiagram />,
    'portfolio-website': <PortfolioDiagram />,
  };

  return (
    <div className="h-full min-h-64 bg-beige border border-border rounded-xl flex items-center justify-center p-8">
      {diagrams[id] ?? (
        <span className="text-5xl font-bold font-mono text-secondary/15">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
    </div>
  );
}

export function ProjectCard({
  id,
  title,
  description,
  problem,
  solution,
  outcome,
  technologies,
  index = 0,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      viewport={{ once: true, margin: '-60px' }}
      className="py-16 md:py-20 border-b border-border last:border-b-0"
    >
      <div
        className={`grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 ${
          isEven ? '' : 'md:grid-cols-[2fr_3fr]'
        }`}
      >
        {isEven ? (
          <>
            {/* Content left */}
            <ProjectContent
              index={index}
              title={title}
              description={description}
              problem={problem}
              solution={solution}
              outcome={outcome}
              technologies={technologies}
            />
            {/* Visual right */}
            <ProjectVisual id={id} index={index} />
          </>
        ) : (
          <>
            {/* Visual left */}
            <ProjectVisual id={id} index={index} />
            {/* Content right */}
            <ProjectContent
              index={index}
              title={title}
              description={description}
              problem={problem}
              solution={solution}
              outcome={outcome}
              technologies={technologies}
            />
          </>
        )}
      </div>
    </motion.article>
  );
}

interface ProjectContentProps {
  index: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
}

function ProjectContent({
  index,
  title,
  description,
  problem,
  solution,
  outcome,
  technologies,
}: ProjectContentProps) {
  return (
    <div>
      <div className="flex items-start gap-4 mb-5">
        <span className="text-xs font-mono text-secondary/35 mt-2.5 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-dark leading-tight">{title}</h3>
      </div>

      <p className="text-lg text-secondary mb-8 leading-relaxed">{description}</p>

      <div className="space-y-5 mb-8">
        {[
          { label: 'Problem', text: problem },
          { label: 'Solution', text: solution },
          { label: 'Outcome', text: outcome },
        ].map(({ label, text }) => (
          <div key={label} className="flex gap-5">
            <span className="text-[11px] font-semibold text-accent uppercase tracking-widest mt-1 flex-shrink-0 w-16">
              {label}
            </span>
            <p className="text-sm text-dark leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs bg-white border border-border rounded text-secondary hover:border-dark/20 hover:text-dark transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
