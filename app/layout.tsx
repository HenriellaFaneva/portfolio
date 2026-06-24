import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henriella Faneva Randriamihajarivo | Portfolio",
  description:
    "Portfolio de Henriella Faneva Randriamihajarivo, Product Owner et communicante basée à Fianarantsoa.",
  verification: {
    google : 'HuAsnY_JrInXSxi4-CYlSgIeRkYUJ82ynTOT-G7n5PM',
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
