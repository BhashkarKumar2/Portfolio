import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="eyebrow">02 — Experience</p>
        <h2 className="heading">Where I've worked</h2>
      </Reveal>

      <div className="mt-10 space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <article className="glass glass-hover rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-1 text-base font-medium text-accent">{job.company}</p>
                </div>
                <div className="text-right text-sm text-ink-faint">
                  <p className="font-mono">{job.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1">
                    <MapPin size={13} /> {job.location}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                    {p}
                  </li>
                ))}
              </ul>

              {job.certificate && (
                <a
                  href={job.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  View certificate <ArrowUpRight size={15} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
