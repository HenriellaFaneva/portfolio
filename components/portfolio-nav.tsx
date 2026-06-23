import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/profil", label: "Profil" },
  { href: "/parcours", label: "Parcours" },
  { href: "/contact", label: "Contact" },
];

export function PortfolioNav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1 text-[11px] font-semibold shadow-sm backdrop-blur">
      {links.map((link) => (
        <Link
          href={link.href}
          className="rounded-full px-3 py-1.5 transition hover:bg-[#fff200]"
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
