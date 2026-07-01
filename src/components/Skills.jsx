import Reveal from './Reveal';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <Reveal>
        <p className="eyebrow">04 — Skills</p>
        <h2 className="heading">Tools I work with</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.06}>
            <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {cat.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="glass-chip rounded-full px-3 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
