import Image from "next/image";

export default function About() {
  return (
    <section id="praxis" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[13px] tabular-nums text-sage-700">01</span>
                <span className="w-6 h-px bg-ink-900/20" />
                <span className="eyebrow">Wir über uns</span>
              </div>

              <h2 className="text-display text-[clamp(2.25rem,4.5vw,4rem)] text-ink-950 leading-[1.02] balance">
                Ganzheitliche
                <br />
                <span className="italic text-sage-700">Zahnmedizin</span>{" "}
                — persönlich.
              </h2>

              <div className="mt-10 hidden lg:block">
                <div className="hairline mb-6" />
                <div className="grid grid-cols-2 gap-6">
                  <Stat n="25+" l="Jahre Erfahrung" />
                  <Stat n="6" l="Fachbereiche" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: body */}
          <div className="lg:col-span-7 space-y-14">
            <div className="space-y-6 text-[17px] leading-[1.75] text-ink-700 max-w-[58ch] pretty">
              <p className="text-[22px] leading-[1.5] text-ink-950 text-display font-normal">
                Unsere Praxis steht für ein ganzheitliches Konzept der
                ästhetischen und funktionalen Zahnheilkunde.
              </p>
              <p>
                Langjährige Erfahrung, fachliche Kompetenz sowie eine
                hochwertige, moderne technische Ausstattung ermöglichen uns,
                Ihre Wünsche mit dem bestmöglichen Ergebnis umzusetzen.
              </p>
              <p>
                Für Ihre Behandlung erstellen wir nach ausführlicher Beratung
                ein individuell auf Ihr medizinisches Anliegen abgestimmtes
                Programm.
              </p>
            </div>

            {/* Kids paragraph as a subtle inset */}
            <div className="border-l border-sage-300 pl-8 py-2 max-w-[58ch]">
              <div className="eyebrow mb-4">Engagement</div>
              <p className="text-[17px] leading-[1.7] text-ink-700 pretty">
                Zahngesundheit von Anfang an: Wir engagieren uns in der
                Landesarbeitsgemeinschaft Jugendzahnpflege und besuchen die
                Jüngsten in mehreren Kindergärten. Unser Anliegen ist es, die
                Kinder frühzeitig und spielerisch an eine gute Mundhygiene zu
                gewöhnen.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[3/2] rounded-sm overflow-hidden bg-paper-200">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2000&q=85"
                alt="Praxisräume Klaus Blumenthal"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-display text-4xl text-ink-950 leading-none">{n}</div>
      <div className="eyebrow mt-3">{l}</div>
    </div>
  );
}
