const hours = [
  { day: "Mo", slots: ["8:00 – 12:30", "14:00 – 18:30"] },
  { day: "Di", slots: ["7:30 – 12:30", "14:00 – 18:30"] },
  { day: "Mi", slots: ["7:30 – 12:30", "14:00 – 18:00"] },
  { day: "Do", slots: ["7:30 – 12:30", "14:00 – 18:30"] },
  { day: "Fr", slots: ["7:30 – 12:30", "und nach Vereinbarung"] },
  { day: "Sa · So", slots: ["Geschlossen"] },
];

export default function Sprechzeiten() {
  return (
    <section id="sprechzeiten" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: hours */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-sage-700">03</span>
              <span className="w-6 h-px bg-ink-900/20" />
              <span className="eyebrow">Sprechzeiten</span>
            </div>

            <h2 className="text-display text-[clamp(2.25rem,4.5vw,4rem)] text-ink-950 leading-[1.02] balance mb-12">
              Wir sind{" "}
              <span className="italic text-sage-700">für Sie da.</span>
            </h2>

            <div className="border-t border-ink-900/10">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="grid grid-cols-12 items-baseline py-5 lg:py-6 border-b border-ink-900/10 group hover:bg-paper-50 transition-colors -mx-2 lg:-mx-4 px-2 lg:px-4"
                >
                  <div className="col-span-3 lg:col-span-2">
                    <span className="text-display text-2xl lg:text-3xl text-ink-950">
                      {h.day}
                    </span>
                  </div>
                  <div className="col-span-9 lg:col-span-10 space-y-1">
                    {h.slots.map((s, i) => (
                      <div
                        key={i}
                        className={`text-[16px] tabular-nums ${
                          s === "Geschlossen" || s.includes("Vereinbarung")
                            ? "text-ink-500 italic text-display"
                            : "text-ink-800"
                        }`}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-paper-50 border border-ink-900/8 rounded-sm p-8 lg:p-10">
              <div className="eyebrow mb-6">Kontakt</div>

              <div className="text-display text-3xl text-ink-950 leading-[1.1] mb-1">
                Klaus <span className="italic">Blumenthal</span>
              </div>
              <div className="text-sm text-ink-500 mb-8">Zahnarztpraxis</div>

              <div className="hairline mb-8" />

              <div className="space-y-6">
                <ContactRow label="Adresse">
                  Laufertstraße 12
                  <br />
                  66115 Saarbrücken
                </ContactRow>

                <ContactRow label="Telefon">
                  <a
                    href="tel:+4906819767105"
                    className="link-underline tabular-nums text-ink-900"
                  >
                    0681 9767105
                  </a>
                </ContactRow>

                <ContactRow label="E-Mail">
                  <a
                    href="mailto:info@zahnarzt-blumenthal.de"
                    className="link-underline text-ink-900"
                  >
                    info@zahnarzt-blumenthal.de
                  </a>
                </ContactRow>
              </div>

              <div className="hairline my-8" />

              <a
                href="tel:+4906819767105"
                className="group inline-flex w-full items-center justify-between px-5 py-3.5 rounded-full bg-sage-700 text-paper-50 text-[14px] hover:bg-sage-800 transition-colors"
              >
                <span>Termin telefonisch vereinbaren</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>

              <p className="mt-4 text-[12px] text-ink-500 leading-relaxed">
                Neue Patient:innen sind bei uns jederzeit willkommen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <div className="text-[15px] text-ink-800 leading-[1.6]">{children}</div>
    </div>
  );
}
