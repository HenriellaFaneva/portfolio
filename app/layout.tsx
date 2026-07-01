import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Randriamihajarivo Henriella Faneva | Portfolio",
  description:
    "Portfolio de Randriamihajarivo Henriella Faneva, Product Owner et communicante basée à Fianarantsoa.",

    keywords: [
    "Product Owner",
    "Randriamihajarivo",
    "Faneva",
    "Henriella",
    "Interprete",
    "Fianarantsoa",
    "Portfolio",
    "Madagascar",
  ],

  authors: [{ name: "Randriamihajarivo Henriella Faneva" }],

  openGraph: {
    title: "Randriamihajarivo Henriella Faneva | Portfolio",
    description:
      "Portfolio de Randriamihajarivo Henriella Faneva, Product Owner et communicante basée à Fianarantsoa.",
    url: "https://fanevahenriellaportfolio.vercel.app/",
    siteName: "Portfolio Faneva",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  verification: {
    google : 'HuAsnY_JrInXSxi4-CYlSgIeRkYUJ82ynTOT-G7n5PM',
    other : {
      'msvalidate.01' : 'F6704E17278318EBB73FEF86541DBF60',
    }, 
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9YN13H48SS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-9YN13H48SS');
          `}
        </Script>

        
        </body>
    </html>
  );
}
