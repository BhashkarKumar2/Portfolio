import { Github, ArrowUpRight, Cpu } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/portfolio';

const ProjectCard = ({ p, index }) => {
  const flip = index % 2 === 1;
  return (
    <article className="glass glass-hover overflow-hidden rounded-3xl">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Visual */}
        <div
          className={`relative min-h-[220px] overflow-hidden lg:min-h-[340px] ${
            flip ? 'lg:order-2' : ''
          }`}
        >
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/25 via-fuchsia-400/20 to-sky-400/25">
              <Cpu className="text-white/70" size={64} strokeWidth={1.2} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-7 sm:p-9">
          <h3 className="text-2xl font-semibold text-ink">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>

          <ul className="mt-4 space-y-2">
            {p.points.map((pt, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="glass-chip rounded-full px-3 py-1 font-mono text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>

          {(p.links.demo || p.links.github) && (
            <div className="mt-6 flex items-center gap-3">
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Live demo <ArrowUpRight size={15} />
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  <Github size={15} /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <Reveal>
        <p className="eyebrow">03 — Work</p>
        <h2 className="heading">Selected projects</h2>
      </Reveal>

      <div className="mt-10 space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
