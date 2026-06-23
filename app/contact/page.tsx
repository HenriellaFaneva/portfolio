import Link from "next/link";
import { PortfolioNav } from "@/components/portfolio-nav";
import { person } from "@/lib/portfolio-data";

const contactCards = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
  },
  {
    label: "Téléphone",
    value: person.phone,
    href: `tel:+261346683933`,
  },
  {
    label: "Adresse",
    value: person.location,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PortfolioNav />

      <section className="px-5 pb-12 pt-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[8px] bg-[#fff200] px-6 py-20 text-center text-black">
            <div className="absolute -left-12 top-0 h-full w-28 rotate-12 bg-[#080808]" />
            <div className="absolute -right-12 top-0 h-full w-28 -rotate-12 bg-[#080808]" />
            <p className="relative text-xs font-black uppercase">
              Contact direct
            </p>
            <h1 className="relative mx-auto mt-4 max-w-3xl text-5xl font-black leading-none sm:text-7xl">
              Travaillons sur quelque chose d&apos;utile.
            </h1>
            <p className="relative mx-auto mt-6 max-w-xl text-base font-semibold leading-7">
              Pour un projet numérique, une présentation, une animation
              d&apos;événement ou une mission d&apos;interprétation, Faneva peut
              être contactée directement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:px-8 md:grid-cols-3">
        {contactCards.map((card) => {
          const content = (
            <div className="min-h-44 rounded-[8px] bg-[#f7f5ed] p-6 text-black transition hover:bg-white">
              <p className="text-xs font-black uppercase text-black/45">
                {card.label}
              </p>
              <p className="mt-8 break-words text-2xl font-black leading-tight">
                {card.value}
              </p>
            </div>
          );

          return card.href ? (
            <a href={card.href} key={card.label}>
              {content}
            </a>
          ) : (
            <div key={card.label}>{content}</div>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase text-white/45">Réseaux</p>
          <h2 className="mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">
            Retrouver Faneva sur ses réseaux.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-6">
            <p className="text-xs font-black uppercase text-white/45">
              Facebook
            </p>
            <p className="mt-8 text-2xl font-black">
              {person.social.facebook}
            </p>
          </div>
          <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-6">
            <p className="text-xs font-black uppercase text-white/45">
              Instagram
            </p>
            <p className="mt-8 text-2xl font-black">
              {person.social.instagram}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <h2 className="max-w-2xl text-4xl font-black leading-none">
          Besoin de comprendre son profil avant de la contacter ?
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/profil"
            className="rounded-full bg-[#fff200] px-5 py-3 text-sm font-black text-black"
          >
            Voir le profil
          </Link>
          <Link
            href="/parcours"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"
          >
            Voir le parcours
          </Link>
        </div>
      </section>
    </main>
  );
}
