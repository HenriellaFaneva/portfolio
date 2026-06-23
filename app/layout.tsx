import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henriella Faneva Randriamihajarivo | Portfolio",
  description:
    "Portfolio de Henriella Faneva Randriamihajarivo, Product Owner et communicante basée à Fianarantsoa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
