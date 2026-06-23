import Image from "next/image";
import Link from "next/link";
import profileImage from "@/assets/images/Faneva-profil.jpeg";
import { PortfolioNav } from "@/components/portfolio-nav";
import { interests, languages, person, strengths } from "@/lib/portfolio-data";

const profileDetails = [
  ["Nom complet", person.fullName],
  ["Métier", person.role],
  ["Localisation", person.location],
  ["Date de naissance", person.birthDate],
];

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ed] text-[#0c0c0c]">
      <PortfolioNav />

      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8">
        <div className="absolute inset-x-0 top-0 h-[430px] bg-[radial-gradient(circle_at_center,#fff200_0%,#fff7a8_38%,#f7f5ed_72%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-xs font-black uppercase">Profil détaillé</p>
            <h1 className="mt-4 max-w-4xl text-6xl font-black leading-none sm:text-8xl">
              {person.displayName}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/70">
              Product Owner et communicante, Henriella Faneva Randriamihajarivo
              relie la parole publique, la coordination de projet et la
              communication organisationnelle. Son profil est particulièrement
              adapté aux environnements où il faut expliquer, organiser et
              fédérer.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-white shadow-2xl shadow-black/15">
            <Image
              src={profileImage}
              alt={`Portrait de ${person.fullName}`}
              fill
              loading="eager"
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-[50%_18%]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-4">
        {profileDetails.map(([label, value]) => (
          <div className="rounded-[8px] bg-white p-5 shadow-sm" key={label}>
            <p className="text-xs font-black uppercase text-black/40">
              {label}
            </p>
            <p className="mt-3 text-lg font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase">Positionnement</p>
          <h2 className="mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">
            Une communicante trilingue avec une culture produit.
          </h2>
        </div>
        <div className="grid gap-5">
          <p className="text-base leading-7 text-black/65">
            Son expérience combine des missions de product ownership, des prises
            de parole en public, des animations d&apos;événements et de
            l&apos;interprétation. Elle peut intervenir sur la clarification des
            besoins, la présentation de solutions et la coordination entre
            équipes.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {languages.map((language) => (
              <div
                className="rounded-[8px] border border-black/10 bg-white p-5 text-sm font-black"
                key={language}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {strengths.map((item, index) => (
            <article className="rounded-[8px] bg-white p-6" key={item.title}>
              <span className="flex size-9 items-center justify-center rounded-full bg-[#fff200] text-sm font-black">
                {index + 1}
              </span>
              <h3 className="mt-10 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase">Centres d&apos;intérêt</p>
          <h2 className="mt-3 max-w-md text-4xl font-black leading-none">
            Des intérêts simples qui nourrissent la curiosité.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {interests.map((interest) => (
            <div
              className="rounded-[8px] border border-black/10 bg-white p-6 text-lg font-black"
              key={interest}
            >
              {interest}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#080808] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-4xl font-black leading-none">
            Voir comment ce profil se traduit dans son parcours.
          </h2>
          <Link
            href="/parcours"
            className="w-fit rounded-full bg-[#fff200] px-5 py-3 text-sm font-black text-black"
          >
            Parcours détaillé
          </Link>
        </div>
      </section>
    </main>
  );
}
