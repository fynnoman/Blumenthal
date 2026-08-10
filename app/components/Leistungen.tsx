const services = [
  {
    n: "01",
    title: "Prophylaxe",
    lead: "Vorbeugen ist die beste Behandlung.",
    body: "Regelmäßige Kontrolluntersuchungen und die professionelle Zahnreinigung minimieren Ihr Karies- und Parodontitis-Risiko deutlich. Ergänzt bedarfsorientiert um Fissurenversiegelung, Airflow und Putztraining. Wir organisieren Ihren nächsten Termin über unser Recall-System.",
  },
  {
    n: "02",
    title: "Zahnerhalt",
    lead: "Substanzschonend, minimalinvasiv.",
    body: "Karies und schadhafte Füllungen werden substanzschonend entfernt. Die zahnfarbene Composite-Füllung stellt Funktion und Ästhetik vollständig wieder her. Bei größeren Defekten arbeiten wir mit Keramik-Inlays aus dem zahntechnischen Labor.",
  },
  {
    n: "03",
    title: "Zahnersatz",
    lead: "Kaufunktion, Ästhetik und Wohlbefinden.",
    body: "Von Kronen und Brücken bis zu Implantaten und Doppelkronen-Teilprothesen. Wir beraten Sie über die vielseitigen Möglichkeiten moderner Prothetik — inklusive Optionen, den Halt einer Vollprothese spürbar zu verbessern oder herausnehmbaren Zahnersatz ganz zu vermeiden.",
  },
  {
    n: "04",
    title: "Parodontose",
    lead: "Zahnfleischerkrankungen früh erkennen.",
    body: "Eine Zahnfleischentzündung verläuft zunächst schmerzfrei und zeigt sich oft erst durch Zahnfleischbluten. Wir erkennen sie früh, verhindern ein Übergreifen auf den Zahnhalteapparat und setzen auch bei fortgeschrittenen Fällen moderne Verfahren wie Lasertechnik ein.",
  },
  {
    n: "05",
    title: "Endodontie",
    lead: "Wurzelbehandlung mit moderner Präzision.",
    body: "Erhalt der eigenen Zähne auch nach starker Schädigung. Mit digitalem Röntgen, maschineller Aufbereitung, elektrometrischer Längenbestimmung und Laser wird der Wurzelkanal gereinigt, desinfiziert und bakteriendicht verschlossen.",
  },
  {
    n: "06",
    title: "Ästhetische Zahnheilkunde",
    lead: "Ein natürlich strahlendes Lächeln.",
    body: "Professionelles Bleaching, unauffällige Composite-Füllungen, Veneers für den Frontzahnbereich und transparente Schienen zur Korrektur von Fehlstellungen auch im Erwachsenenalter — für Zähne, die zu Ihnen passen.",
  },
];

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative py-24 lg:py-40 bg-paper-50 border-y border-ink-900/8"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[13px] tabular-nums text-sage-700">02</span>
                <span className="w-6 h-px bg-ink-900/20" />
                <span className="eyebrow">Leistungen</span>
              </div>

              <h2 className="text-display text-[clamp(2.25rem,4.5vw,4rem)] text-ink-950 leading-[1.02] balance">
                Sechs Fachbereiche,
                <br />
                <span className="italic text-sage-700">ein Anspruch.</span>
              </h2>

              <p className="mt-8 text-[16px] leading-[1.7] text-ink-600 max-w-md">
                Von der Vorsorge bis zum ästhetischen Detail — alles unter
                einem Dach, individuell auf Sie abgestimmt.
              </p>

              <div className="hidden lg:block mt-12">
                <div className="hairline mb-6" />
                <div className="eyebrow">Gesamt · 06 Bereiche</div>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-7 -mt-2">
            {services.map((s, i) => (
              <li key={s.n} className="group">
                {i > 0 && <div className="hairline" />}
                <div className="py-8 lg:py-12 grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-2 lg:col-span-2">
                    <span className="text-display text-3xl lg:text-4xl text-sage-700 leading-none tabular-nums">
                      {s.n}
                    </span>
                  </div>
                  <div className="col-span-10 lg:col-span-10">
                    <h3 className="text-display text-2xl lg:text-3xl text-ink-950 leading-[1.1] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-display italic text-lg lg:text-xl text-sage-700 mb-4">
                      {s.lead}
                    </p>
                    <p className="text-[15.5px] leading-[1.7] text-ink-700 max-w-[58ch] pretty">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
