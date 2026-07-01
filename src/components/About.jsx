import Reveal from './Reveal';
import { profile } from '../data/portfolio';

const highlights = [
  { k: 'Focus', v: 'Full-stack & agentic AI systems' },
  { k: 'Currently', v: 'Final-year B.Tech, DTU' },
  { k: 'Toolkit', v: 'React · Node · Spring Boot · LangGraph' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="eyebrow">01 — About</p>
        <h2 className="heading">A bit about me</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal delay={0.05}>
          <div className="glass h-full rounded-2xl p-7 sm:p-8">
            <p className="text-lg leading-relaxed text-ink-soft">{profile.about}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="glass h-full rounded-2xl p-7 sm:p-8">
            {highlights.map((h, i) => (
              <div
                key={h.k}
                className={`flex items-baseline justify-between gap-4 py-3 ${
                  i !== highlights.length - 1 ? 'border-b border-ink/10' : ''
                }`}
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {h.k}
                </dt>
                <dd className="text-right text-sm font-medium text-ink">{h.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
