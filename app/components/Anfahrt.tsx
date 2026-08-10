export default function Anfahrt() {
  return (
    <section
      id="anfahrt"
      className="relative py-24 lg:py-40 bg-paper-50 border-y border-ink-900/8"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[13px] tabular-nums text-sage-700">04</span>
                <span className="w-6 h-px bg-ink-900/20" />
                <span className="eyebrow">Anfahrt</span>
              </div>

              <h2 className="text-display text-[clamp(2.25rem,4.5vw,4rem)] text-ink-950 leading-[1.02] balance mb-10">
                So finden Sie{" "}
                <span className="italic text-sage-700">zu uns.</span>
              </h2>

              <div className="space-y-5 text-[16px] leading-[1.7] text-ink-700 pretty max-w-[45ch]">
                <p>
                  Sie erreichen uns über die{" "}
                  <span className="text-ink-950">Rheinstraße</span> /{" "}
                  <span className="text-ink-950">Viktor-Tesch-Allee</span> als
                  auch über die{" "}
                  <span className="text-ink-950">Hubert-Müller-Straße</span>.
                </p>
                <p>
                  Parkplätze finden Sie in der Viktor-Tesch-Allee unterhalb des
                  Waldfriedhofes; von hier haben Sie über eine Treppe direkten
                  Zugang zur Laufertstraße und unserer Praxis.
                </p>
                <p>
                  Für den <span className="text-ink-950">barrierefreien Zugang</span>{" "}
                  stehen einige Parkplätze direkt in der Laufertstraße zur
                  Verfügung.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Laufertstra%C3%9Fe+12,+66115+Saarbr%C3%BCcken"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-sage-700 hover:text-sage-800 link-underline"
                >
                  Route in Google Maps öffnen
                  <span aria-hidden>↗</span>
                </a>
                <div>
                  <a
                    href="https://maps.apple.com/?q=Laufertstra%C3%9Fe+12,+66115+Saarbr%C3%BCcken"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] text-sage-700 hover:text-sage-800 link-underline"
                  >
                    In Apple Karten öffnen
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-ink-900/10 bg-paper-200">
              <iframe
                title="Karte Laufertstraße 12, 66115 Saarbrücken"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.973%2C49.247%2C6.990%2C49.257&amp;layer=mapnik&amp;marker=49.2515%2C6.9820"
                className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Marker overlay */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative flex flex-col items-center">
                  <div className="bg-ink-950 text-paper-50 text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap tracking-tight">
                    Klaus Blumenthal · Laufertstr. 12
                  </div>
                  <div className="w-px h-3 bg-ink-950" />
                  <div className="w-3 h-3 rounded-full bg-sage-700 border-2 border-paper-50 shadow-[0_0_0_1px_rgba(15,14,11,0.15)]" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between eyebrow">
              <span>OpenStreetMap · © OSM Mitwirkende</span>
              <span className="tabular-nums">49.2515° N · 06.9820° E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
