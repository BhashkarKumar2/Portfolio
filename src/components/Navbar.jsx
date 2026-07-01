import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex h-14 w-full max-w-content items-center justify-between rounded-full px-5 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-ink">
          bhashkar<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Résumé
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-content rounded-2xl md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-fit rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
