import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line">
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="focus-ring font-display font-bold text-lg tracking-tight text-ink">
          NEHA<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden md:inline-flex px-4 py-2 rounded-full bg-ink text-paper font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
        >
          Let&rsquo;s Talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="focus-ring md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-[1.5px] bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-line font-mono text-sm uppercase tracking-widest"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="focus-ring block px-6 py-3 text-ink-soft hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
