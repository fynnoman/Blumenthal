export default function Notdienst() {
  return (
    <section id="notdienst" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-sage-700">05</span>
              <span className="w-6 h-px bg-ink-900/20" />
              <span className="eyebrow">Notdienst</span>
            </div>
            <h2 className="text-display text-[clamp(1.75rem,3.5vw,3rem)] text-ink-950 leading-[1.05] balance">
              Am Wochenende oder{" "}
              <span className="italic text-sage-700">Feiertag?</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-ink-900/10 rounded-sm p-8 lg:p-10 bg-paper-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[16px] leading-[1.7] text-ink-700 pretty">
                  Die Kassenzahnärztliche Vereinigung organisiert für die
                  Wochenenden und Feiertage einen{" "}
                  <span className="text-ink-950">Notdienst</span>, den Sie
                  aktuell online einsehen können.
                </p>
              </div>
              <a
                href="https://www.zahnaerzte-saarland.de"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 shrink-0 px-6 py-3.5 rounded-full bg-ink-950 text-paper-50 text-[14px] hover:bg-ink-800 transition-colors"
              >
                Zum Notdienst
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
