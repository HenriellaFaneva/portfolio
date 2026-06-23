import Link from "next/link";
import { PortfolioNav } from "@/components/portfolio-nav";
import {
  experiences,
  formations,
  person,
  projects,
} from "@/lib/portfolio-data";

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ed] text-[#0c0c0c]">
      <PortfolioNav />

      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_center,#fff200_0%,#fff7a8_38%,#f7f5ed_72%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase">Parcours détaillé</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-none sm:text-8xl">
            Expériences, projets et formations.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
            Le parcours de {person.displayName} se construit à l&apos;EMIT
            Fianarantsoa, au contact des projets numériques, des événements
            professionnels et des missions de communication terrain.
          </p>
        </div>
      </section>

      <section className="rounded-t-[18px] bg-[#080808] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-white/50">
                Expériences professionnelles
              </p>
              <h2 className="mt-3 max-w-3xl text-5xl font-black leading-none sm:text-7xl">
                Une chronologie active et orientée terrain.
              </h2>
            </div>
            <Link
              href="/contact"
              className="w-fit rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-[#fff200] hover:bg-[#fff200] hover:text-black"
            >
              Discuter d&apos;un projet
            </Link>
          </div>

          <div className="mt-12 grid gap-4">
            {experiences.map((item, index) => (
              <article
                className="grid gap-6 rounded-[8px] bg-[#f7f5ed] p-5 text-black md:grid-cols-[140px_1fr_1.2fr]"
                key={item.title + item.period}
              >
                <div>
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#fff200] text-sm font-black">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-black/45">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  <p className="mt-1 text-sm font-bold">{item.place}</p>
                </div>
                <div>
                  <p className="text-sm leading-6 text-black/65">
                    {item.text}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-black/65">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase">Projets repères</p>
            <h2 className="mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">
              Les contextes qui structurent son expérience.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                className="flex min-h-32 items-end rounded-[8px] bg-white p-5 text-lg font-black shadow-sm"
                key={project}
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase">Diplômes et formations</p>
          <h2 className="mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">
            Une progression académique en communication.
          </h2>
        </div>
        <div className="grid gap-4">
          {formations.map((item) => (
            <article
              className="rounded-[8px] border border-black/10 bg-white p-6"
              key={item.title}
            >
              <p className="text-xs font-black uppercase text-black/45">
                {item.period}
              </p>
              <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
              <p className="mt-1 text-sm font-bold">{item.place}</p>
              <p className="mt-4 text-sm leading-6 text-black/65">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
