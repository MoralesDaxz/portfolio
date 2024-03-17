

import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png" />
        <meta name="description" content="Portafolio, Morales Desarrollador web - Frontend." />
        <meta property="og:url" content="https://global-logistic.vercel.app/" />
        <meta property="og:title" content="Global Logistic - Servicio logístico y transporte" />
        <meta property="og:description" content="Portafolio, Morales Desarrollador web - Frontend." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png" />
      </head>

      <body className="min-w-[330px] min-h-screen flex flex-col items-center scroll-smooth">
        <NavBar />
        <main >
          {children}
        </main>

      </body>
    </html>
  );
}
