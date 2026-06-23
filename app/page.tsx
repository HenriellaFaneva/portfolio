import Image from "next/image";
import Link from "next/link";
import profileRemoved from "@/assets/images/Faneva-profil-removebg-preview.png";
import profileImage from "@/assets/images/Faneva-profil.jpeg";
import { PortfolioNav } from "@/components/portfolio-nav";
import {
  experiences,
  faqs,
  formations,
  languages,
  person,
  projects,
  strengths,
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ed] text-[#0c0c0c]">
      <PortfolioNav />

      <section className="relative mx-auto flex min-h-[760px] w-full max-w-7xl flex-col overflow-hidden px-5 pb-10 pt-20 sm:px-8 lg:min-h-[820px]">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_center,#fff200_0%,#fff7a8_36%,#f7f5ed_68%)]" />
        <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold uppercase">
          <span>Fianarantsoa / Madagascar</span>
          <span className="text-right">Product Owner & Communication</span>
        </div>

        <div className="relative z-10 mt-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase">Portfolio</p>
          <h1 className="mx-auto max-w-6xl text-6xl font-black leading-none sm:text-8xl md:text-[8rem] lg:text-[10rem]">
            FANEVA
          </h1>
        </div>

        <div className="relative z-10 mt-2 grid flex-1 items-end gap-8 lg:grid-cols-[1fr_520px_1fr]">
          <p className="max-w-xs self-center text-sm font-medium leading-6">
            {person.fullName} transforme la communication, les événements et
            les projets numériques en expériences claires et humaines.
          </p>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[800px] -translate-y-16 lg:-translate-y-28">
            <Image
              src={profileRemoved}
              alt={`Portrait de ${person.fullName}`}
              fill
              loading="eager"
              sizes="(max-width: 768px) 88vw, 800px"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          <p className="max-w-xs self-center justify-self-end text-right text-sm font-medium leading-6">
            Une voix trilingue, organisée et orientée projet, portée par la
            relation publique et la communication organisationnelle.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase">Profil</p>
          <h2 className="mt-3 max-w-lg text-4xl font-black leading-none sm:text-5xl">
            Une présence professionnelle qui sait porter une idée en public.
          </h2>
          <Link
            href="/profil"
            className="mt-8 inline-flex rounded-full bg-[#fff200] px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
          >
            Découvrir le profil
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-[0.8fr_1fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-white shadow-sm">
            <Image
              src={profileImage}
              alt={`Deuxième portrait de ${person.fullName}`}
              fill
              sizes="(max-width: 768px) 90vw, 360px"
              className="object-cover object-[50%_18%]"
            />
          </div>
          <div className="self-end">
            <p className="max-w-2xl text-base leading-7 text-black/70">
              Née le {person.birthDate} et basée à {person.location}, J'ai
              construit mon parcours entre product ownership, animation
              d&apos;événements, présentation de projets et interprétation.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {languages.map((language) => (
                <div
                  className="rounded-[8px] border border-black/10 bg-white p-5"
                  key={language}
                >
                  <span className="text-sm font-black">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="max-w-md text-4xl font-black leading-none sm:text-5xl">
            Compétences pour porter les projets plus loin.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-black/65">
            Mes atouts, gestion de stress et aptitude à travailler en équipe,
            complètent une base solide en communication publique et pilotage de
            projets.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {strengths.map((item, index) => (
            <article
              className="min-h-56 rounded-[8px] bg-white p-6 shadow-sm"
              key={item.title}
            >
              <div className="mb-10 flex size-9 items-center justify-center rounded-full bg-[#fff200] text-sm font-black">
                {index + 1}
              </div>
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-t-[18px] bg-[#080808] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-3xl text-5xl font-black leading-none sm:text-7xl">
              Parcours & projets marquants
            </h2>
            <Link
              href="/parcours"
              className="w-fit rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-[#fff200] hover:bg-[#fff200] hover:text-black"
            >
              Voir mon parcours
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {experiences.slice(0, 3).map((item) => (
              <article
                className="min-h-64 rounded-[8px] bg-[#f7f5ed] p-5 text-black"
                key={item.title + item.period}
              >
                <p className="text-xs font-black uppercase text-black/45">
                  {item.period}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-bold">{item.place}</p>
                <p className="mt-6 text-sm leading-6 text-black/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((project) => (
              <div
                className="flex min-h-28 items-end rounded-[8px] border border-white/10 bg-white/[0.06] p-4 text-sm font-black"
                key={project}
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase">Formations</p>
          <h2 className="mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">
            Une base académique orientée communication.
          </h2>
        </div>
        <div className="grid gap-3">
          {formations.map((item) => (
            <div
              className="rounded-[8px] border border-black/10 bg-white p-5 text-base font-bold leading-6"
              key={item.title}
            >
              {item.title} - {item.text}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase">Questions fréquentes</p>
          <h2 className="mt-3 max-w-sm text-4xl font-black leading-none sm:text-5xl">
            Ce qu&apos;il faut savoir.
          </h2>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-black/10 bg-white">
          {faqs.map((item, index) => (
            <details
              className="group border-b border-black/10 last:border-b-0"
              open={index === 0}
              key={item.q}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-black">
                {item.q}
                <span className="text-xl group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-black/60">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="rounded-t-[18px] bg-[#080808] px-5 pb-8 pt-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[8px] bg-[#fff200] px-6 py-16 text-center text-black">
            <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-[#080808]" />
            <div className="absolute -right-10 top-0 h-full w-24 -rotate-12 bg-[#080808]" />
            <h2 className="relative mx-auto max-w-2xl text-4xl font-black leading-none sm:text-6xl">
              Travaillons sur quelque chose d&apos;utile.
            </h2>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
                href="/contact"
              >
                Page contact
              </Link>
              <a
                className="rounded-full border border-black/20 px-5 py-3 text-sm font-bold"
                href={`mailto:${person.email}`}
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
