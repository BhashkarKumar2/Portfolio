import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '../data/portfolio';

const CountUp = ({ value, decimals = 0, suffix = '', start }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span>
      {n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="mx-auto -mt-8 w-full max-w-content px-6" aria-label="Key metrics">
      <div ref={ref} className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:p-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} start={inView} />
            </div>
            <div className="mt-1.5 text-xs leading-snug text-ink-faint sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
