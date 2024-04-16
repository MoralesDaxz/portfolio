import { Footer } from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ApplyEffects from "@/components/ApplyEffects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png" />
        <meta name="description" content="Desarrollador Web - Frontend." />
        <meta property="og:url" content="https://morales-dev.vercel.app/" />
        <meta property="og:title" content="Desarrollador Web - Developer" />
        <meta property="og:description" content="Soy Alfredo Morales, presentación de mi portafolio web, proyectos y entornos prácticos desarrollados." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://i.ibb.co/wwqJ9qC/favicon-removebg-preview.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <NavBar />
        <ApplyEffects>
        {children}
        </ApplyEffects>
        <Footer />
      </body>
    </html>
  );
}
