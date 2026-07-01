import { GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section">
      <Reveal>
        <p className="eyebrow">06 — Education</p>
        <h2 className="heading">Academics</h2>
      </Reveal>

      <div className="mt-10 space-y-4">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.05}>
            <div className="glass glass-hover flex flex-wrap items-center justify-between gap-3 rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="glass-chip mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl text-accent">
                  <GraduationCap size={19} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{e.school}</h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{e.detail}</p>
                </div>
              </div>
              <div className="pl-14 text-sm text-ink-faint sm:pl-0 sm:text-right">
                <p className="font-mono">{e.period}</p>
                <p className="mt-0.5">{e.place}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
