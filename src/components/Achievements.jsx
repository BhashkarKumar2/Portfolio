import { Trophy, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <Reveal>
        <p className="eyebrow">05 — Achievements</p>
        <h2 className="heading">Competitive programming</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover group flex h-full items-start gap-4 rounded-2xl p-6 sm:p-7"
            >
              <span className="glass-chip flex h-11 w-11 flex-none items-center justify-center rounded-xl text-accent">
                <Trophy size={20} />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
                  <ArrowUpRight
                    size={17}
                    className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
                <p className="mt-1 text-sm text-ink-soft">{a.detail}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
