import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 lg:pt-48 pb-20 lg:pb-28 min-h-[100vh] flex flex-col justify-between"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-6 h-px bg-sage-600" />
              <span className="eyebrow">Zahnarztpraxis · Saarbrücken</span>
            </div>

            <h1 className="text-display text-[clamp(3rem,8vw,7.5rem)] text-ink-950 leading-[1] tracking-tightest balance">
              Herzlich
              <br />
              <span className="italic text-sage-700">willkommen.</span>
            </h1>

            <div className="mt-12 max-w-[54ch] space-y-6 text-[17px] leading-[1.7] text-ink-700 pretty">
              <p>
                Schön, dass Sie sich über unsere Praxis informieren möchten.
                Mit diesem Praxiswegweiser bieten wir Ihnen einen ersten
                Einblick in die Möglichkeiten der modernen Zahnmedizin.
              </p>
              <p>
                Bei Ihren Fragen und Wünschen stehen wir Ihnen jederzeit gerne
                mit Rat und Tat zur Seite. Besuchen Sie uns in unseren Räumen
                in Saarbrücken in der{" "}
                <span className="text-ink-950">Laufertstraße 12</span>.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#sprechzeiten"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ink-950 text-paper-50 text-[14px] hover:bg-ink-800 transition-colors"
              >
                Termin vereinbaren
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-ink-900/15 text-ink-800 text-[14px] hover:border-ink-900/40 transition-colors"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-paper-200">
              <Image
                src="/klaus-blumenthal.png"
                alt="Klaus Blumenthal in seiner Praxis"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="eyebrow">Klaus Blumenthal · Praxisinhaber</span>
              <span className="eyebrow">Est. 1996</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10 w-full mt-20">
        <div className="hairline mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-8">
            <div>
              <div className="eyebrow mb-1.5">Heute geöffnet</div>
              <div className="text-[15px] text-ink-900 tabular-nums">
                08:00 – 12:30 · 14:00 – 18:30
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-ink-900/10" />
            <div>
              <div className="eyebrow mb-1.5">Direkt anrufen</div>
              <a
                href="tel:+4906819767105"
                className="text-[15px] text-ink-900 tabular-nums hover:text-sage-700 transition-colors"
              >
                0681 9767105
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-ink-500">
            <div className="w-1.5 h-1.5 rounded-full bg-sage-600 animate-pulse" />
            <span className="eyebrow text-ink-500">Wir sind für Sie da</span>
          </div>
        </div>
      </div>
    </section>
  );
}
