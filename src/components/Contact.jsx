import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import Reveal from './Reveal';
import { profile } from '../data/portfolio';

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: profile.socials.leetcode, label: 'LeetCode' },
  { icon: SiCodeforces, href: profile.socials.codeforces, label: 'Codeforces' },
];

const Contact = () => {
  return (
    <footer id="contact" className="section pb-12">
      <Reveal>
        <div className="glass overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <p className="eyebrow justify-center">07 — Contact</p>
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-soft">
            I'm open to internships, full-time roles, and interesting collaborations. The fastest
            way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-solid inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Phone size={16} /> {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass-chip flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-faint">
        <p>© {new Date().getFullYear()} Bhashkar Kumar. All rights reserved.</p>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-ink"
        >
          Résumé <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
};

export default Contact;
