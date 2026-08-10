"use client";

import { useEffect, useState } from "react";

const links = [
  ["Praxis", "#praxis"],
  ["Leistungen", "#leistungen"],
  ["Sprechzeiten", "#sprechzeiten"],
  ["Anfahrt", "#anfahrt"],
  ["Notdienst", "#notdienst"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper-100/85 backdrop-blur-md border-b border-ink-900/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-1.5 h-1.5 rounded-full bg-sage-600" />
          <span className="text-display text-[19px] tracking-tightest text-ink-950">
            Klaus <span className="italic font-normal">Blumenthal</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link text-[13px] text-ink-700 hover:text-ink-950 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+4906819767105"
            className="hidden md:inline-block text-[13px] text-ink-700 hover:text-ink-950 transition-colors tabular-nums"
          >
            0681 9767105
          </a>
          <a
            href="#sprechzeiten"
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-paper-50 bg-sage-700 hover:bg-sage-800 transition-colors rounded-full"
          >
            Termin
          </a>
        </div>
      </div>
    </header>
  );
}
