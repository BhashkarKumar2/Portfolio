import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { profile } from '../data/portfolio';

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: profile.socials.leetcode, label: 'LeetCode' },
  { icon: SiCodeforces, href: profile.socials.codeforces, label: 'Codeforces' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section id="top" className="relative">
      <div className="mx-auto flex min-h-screen w-full max-w-content flex-col justify-center px-6 pb-16 pt-32">
        {/* Text column */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass-chip mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-ink-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.status}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg font-medium text-ink-soft sm:text-xl">
            {profile.role} <span className="text-ink-faint/50">/</span>{' '}
            <span className="text-ink">{profile.tagline}</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-solid inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            >
              View my work <ArrowDown size={16} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink"
            >
              Download résumé <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-ink/10 sm:block" />
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass-chip flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
