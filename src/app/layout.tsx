import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ControlDisplayProvider } from "@/context/ControlDisplay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
          <NavBar />
          {children}
          <Footer />
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
