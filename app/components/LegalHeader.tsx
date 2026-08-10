"use client";

import Link from "next/link";

export default function LegalHeader({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper-100/85 backdrop-blur-md border-b border-ink-900/8">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-1.5 h-1.5 rounded-full bg-sage-600" />
            <span className="text-display text-[19px] tracking-tightest text-ink-950">
              Klaus <span className="italic font-normal">Blumenthal</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-ink-700 hover:text-ink-950 transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> Zur Startseite
          </Link>
        </div>
      </header>

      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="mx-auto max-w-[880px] px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-sage-600" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="text-display text-[clamp(2.25rem,5vw,4.5rem)] text-ink-950 leading-[1] balance">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
}
