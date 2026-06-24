import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henriella Faneva Randriamihajarivo | Portfolio",
  description:
    "Portfolio de Henriella Faneva Randriamihajarivo, Product Owner et communicante basée à Fianarantsoa.",
  verification: {
    google : 'google-site-verification: googlee3b44f87ca3391d6.html',
  }  
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
