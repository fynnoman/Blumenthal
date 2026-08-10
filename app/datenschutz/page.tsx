import LegalHeader from "../components/LegalHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz · Zahnarztpraxis Klaus Blumenthal",
};

export default function DatenschutzPage() {
  return (
    <main className="relative bg-paper-100">
      <LegalHeader title="Datenschutzerklärung." eyebrow="Rechtliches" />

      <article className="pb-24 lg:pb-40">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10 space-y-14">
          <Section title="Verantwortliche Stelle">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Verantwortliche Stelle im Sinne der Datenschutzgesetze,
              insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <address className="not-italic mt-5 text-[16px] leading-[1.75] text-ink-900">
              Klaus Blumenthal
              <br />
              Laufertstraße 12
              <br />
              66115 Saarbrücken
            </address>
            <div className="mt-4 space-y-1.5 text-[15px] text-ink-700">
              <div>
                <span className="eyebrow mr-3">Tel</span>
                <a
                  href="tel:+4906819767105"
                  className="link-underline tabular-nums text-ink-900"
                >
                  0681 9767105
                </a>
              </div>
              <div>
                <span className="eyebrow mr-3">Mail</span>
                <a
                  href="mailto:info@zahnarzt-blumenthal.de"
                  className="link-underline text-ink-900"
                >
                  info@zahnarzt-blumenthal.de
                </a>
              </div>
            </div>
          </Section>

          <div className="hairline" />

          <Section title="Ihre Betroffenenrechte">
            <p className="text-[16px] leading-[1.75] text-ink-800 mb-4">
              Unter den angegebenen Kontaktdaten unseres Datenschutz­beauftragten
              können Sie jederzeit folgende Rechte ausüben:
            </p>
            <ul className="space-y-2.5 text-[16px] leading-[1.75] text-ink-800 list-none pl-0">
              {[
                "Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung",
                "Berichtigung unrichtiger personenbezogener Daten",
                "Löschung Ihrer bei uns gespeicherten Daten",
                "Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen",
                "Widerspruch gegen die Verarbeitung Ihrer Daten bei uns",
                "Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben",
              ].map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-sage-700 tabular-nums text-[13px] pt-1.5 shrink-0">
                    0{i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-700">
              Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
              jederzeit mit Wirkung für die Zukunft widerrufen. Sie können sich
              jederzeit mit einer Beschwerde an die für Sie zuständige
              Aufsichts­behörde wenden. Eine Liste der Aufsichts­behörden mit
              Anschrift finden Sie unter{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-ink-900"
              >
                bfdi.bund.de
              </a>
              .
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Zwecke der Datenverarbeitung">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser
              Datenschutz­erklärung genannten Zwecken. Eine Übermittlung Ihrer
              persönlichen Daten an Dritte zu anderen als den genannten Zwecken
              findet nicht statt. Wir geben Ihre persönlichen Daten nur an
              Dritte weiter, wenn:
            </p>
            <ul className="mt-4 space-y-2.5 text-[16px] leading-[1.75] text-ink-800">
              {[
                "Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,",
                "die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,",
                "die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,",
                "die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.",
              ].map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-sage-700 tabular-nums text-[13px] pt-1.5 shrink-0">
                    0{i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="hairline" />

          <Section title="Löschung bzw. Sperrung der Daten">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wir halten uns an die Grundsätze der Datenvermeidung und
              Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten
              daher nur so lange, wie dies zur Erreichung der hier genannten
              Zwecke erforderlich ist oder wie es die vom Gesetzgeber
              vorgesehenen Speicherfristen vorsehen. Nach Fortfall des
              jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die
              entsprechenden Daten routinemäßig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder gelöscht.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Verwendung von Kartendiensten">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Zur Darstellung der Anfahrt binden wir eine Karte von{" "}
              <span className="text-ink-900">OpenStreetMap</span> ein. Der
              Betrieb der Karten erfolgt durch die OpenStreetMap Foundation.
              Beim Aufruf der Startseite werden technische Verbindungsdaten an
              die Server von OpenStreetMap übertragen. Nähere Informationen
              finden Sie in der{" "}
              <a
                href="https://osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-ink-900"
              >
                Datenschutz­erklärung von OpenStreetMap
              </a>
              .
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Änderung unserer Datenschutzbestimmungen">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wir behalten uns vor, diese Datenschutz­erklärung anzupassen,
              damit sie stets den aktuellen rechtlichen Anforderungen entspricht
              oder um Änderungen unserer Leistungen umzusetzen, z. B. bei der
              Einführung neuer Services. Für Ihren erneuten Besuch gilt dann
              die neue Datenschutz­erklärung.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Fragen zum Datenschutz">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail oder wenden Sie sich direkt an die für den
              Datenschutz verantwortliche Person in unserer Organisation:
            </p>
            <div className="mt-5 space-y-1 text-[16px] text-ink-900">
              <div>Klaus Blumenthal</div>
              <a
                href="mailto:info@zahnarzt-blumenthal.de"
                className="link-underline"
              >
                info@zahnarzt-blumenthal.de
              </a>
            </div>
          </Section>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-display text-2xl lg:text-3xl text-ink-950 leading-tight mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
