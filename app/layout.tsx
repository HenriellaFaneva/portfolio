import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Randriamihajarivo Henriella Faneva | Portfolio",
  description:
    "Portfolio de Randriamihajarivo Henriella Faneva, Product Owner et communicante basée à Fianarantsoa.",
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
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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
