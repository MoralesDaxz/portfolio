import "./globals.css";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { ControlDisplayProvider } from "@/context/ControlDisplay";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ES">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://i.ibb.co/54ktrkM/portfolio-Icon.png"
        />
        <meta name="description" content="Desarrollador Web - Frontend." />
        <meta property="og:url" content="https://morales-dev.vercel.app/" />
        <meta property="og:title" content="Alfredo Morales - Developer" />
        <meta
          property="og:description"
          content="Soy Alfredo Morales, presentación de mi portafolio web, proyectos y entornos prácticos desarrollados."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:image"
          content="https://i.ibb.co/54ktrkM/portfolio-Icon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ControlDisplayProvider>
          {children}
          <Footer />
          <ToTop/>
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
