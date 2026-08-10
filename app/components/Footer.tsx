export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-ink-950 text-paper-100">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Big claim */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-paper-100/60">
                Zahnarztpraxis · Saarbrücken
              </span>
            </div>
            <h3 className="text-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] text-paper-50 balance">
              Wir freuen uns auf{" "}
              <span className="italic text-sage-300">Ihren Besuch.</span>
            </h3>
          </div>
          <div className="lg:col-span-4 lg:self-end">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+4906819767105"
                className="border border-paper-100/15 rounded-sm px-4 py-4 hover:border-paper-100/30 transition-colors"
              >
                <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-1.5">
                  Anrufen
                </div>
                <div className="text-[15px] text-paper-50 tabular-nums">
                  0681 9767105
                </div>
              </a>
              <a
                href="mailto:info@zahnarzt-blumenthal.de"
                className="border border-paper-100/15 rounded-sm px-4 py-4 hover:border-paper-100/30 transition-colors"
              >
                <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-1.5">
                  E-Mail
                </div>
                <div className="text-[13px] text-paper-50 truncate">
                  info@zahnarzt-blumenthal.de
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Info columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-paper-100/10">
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-4">
              Praxis
            </div>
            <address className="not-italic text-[14px] leading-[1.7] text-paper-100/85">
              Klaus Blumenthal
              <br />
              Laufertstraße 12
              <br />
              66115 Saarbrücken
            </address>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-4">
              Sprechzeiten
            </div>
            <div className="text-[14px] leading-[1.7] text-paper-100/85 tabular-nums">
              Mo – Do &nbsp;· 08:00 – 18:30
              <br />
              Fr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· 07:30 – 12:30
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-[14px] text-paper-100/85">
              {[
                ["Wir über uns", "#praxis"],
                ["Leistungen", "#leistungen"],
                ["Anfahrt", "#anfahrt"],
                ["Notdienst", "#notdienst"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-paper-50 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-paper-100/55 mb-4">
              Rechtliches
            </div>
            <ul className="space-y-2 text-[14px] text-paper-100/85">
              <li>
                <a href="/impressum" className="hover:text-paper-50 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-paper-50 transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-10 border-t border-paper-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-paper-100/50">
          <div>
            © {new Date().getFullYear()} Klaus Blumenthal — Alle Rechte vorbehalten
          </div>
          <div className="tabular-nums">Zahnarztpraxis · Saarbrücken</div>
        </div>
      </div>
    </footer>
  );
}
