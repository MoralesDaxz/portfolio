import "./globals.css";
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
        <meta name="google-site-verification" content="l_o-q6Oqp8QKB-_I1UKMVCmvYGT235g3Jxiemo7cVCs" />
        <meta
          name="description"
          content="Frontend Developer con experiencia en soporte IT y proyectos con React, Next.js, TypeScript y diseño web moderno."
        />
        <meta property="og:url" content="https://morales-dev.vercel.app/" />
        <meta property="og:title" content="Alfredo Morales | Frontend Developer" />
        <meta
          property="og:description"
          content="Portfolio personal de Alfredo Morales: desarrollador frontend con experiencia en soporte IT, proyectos con React y Next.js, y soluciones web modernas y funcionales."
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
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
