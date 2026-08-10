import LegalHeader from "../components/LegalHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · Zahnarztpraxis Klaus Blumenthal",
};

export default function ImpressumPage() {
  return (
    <main className="relative bg-paper-100">
      <LegalHeader title="Impressum." eyebrow="Rechtliches" />

      <article className="pb-24 lg:pb-40">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10 space-y-14">
          <Section title="Verantwortlich für den Inhalt">
            <address className="not-italic text-[16px] leading-[1.75] text-ink-800">
              Klaus Blumenthal
              <br />
              Laufertstraße 12
              <br />
              66115 Saarbrücken
            </address>
            <div className="mt-6 space-y-1.5 text-[15px] text-ink-700">
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

          <Section title="Konzeption, Design und Realisation">
            <p className="text-[16px] leading-[1.7] text-ink-800">
              Statement GmbH
            </p>
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
