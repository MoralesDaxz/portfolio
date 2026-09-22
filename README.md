# Portfolio personal de Alfredo Morales

Portfolio web desarrollado con Next.js y React para presentar información profesional, proyectos, stack tecnológico y formulario de contacto. La aplicación está pensada como una landing page moderna, responsiva y con animaciones suaves para destacar habilidades y trabajos realizados.

## Descripción

Este proyecto funciona como CV/portfolio personal y muestra:

- Introducción personal y resumen profesional
- Sección de proyectos con enlaces y tecnologías usadas
- Área de tecnologías y herramientas
- Formulario de contacto con validación y captcha
- Navegación adaptable y experiencia móvil/desktop
- Animaciones de entrada y scroll

La app usa un enfoque de contenido centralizado en archivos de datos para facilitar futuras actualizaciones sin tocar demasiados componentes.

## Tecnologías utilizadas

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Formspree
- reCAPTCHA
- React Icons
- react-type-animation

## Requisitos previos

- Node.js 18 o superior
- npm, yarn o pnpm
- Git

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd portfolio
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto y añade la clave pública de reCAPTCHA:

```bash
NEXT_PUBLIC_SITE_WEB=tu_site_key_de_recaptcha
```

> El formulario de contacto utiliza Google reCAPTCHA y la variable `NEXT_PUBLIC_SITE_WEB` para activarlo.

## Scripts disponibles

En el archivo `package.json` existen estos scripts:

```bash
npm run dev
```

Inicia la app en modo desarrollo en el puerto 3001.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run start
```

Levanta el proyecto compilado en modo producción.

```bash
npm run lint
```

Ejecuta la verificación de lint con Next.js.

## Cómo ejecutar el proyecto

### Desarrollo

```bash
npm run dev
```

Luego abre esta URL en el navegador:

```text
http://localhost:3001
```

### Producción

```bash
npm run build
npm run start
```

## Estructura del proyecto

```text
portfolio/
├── public/
│   ├── curriculum/
│   └── images/
│       └── projects/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── aboutMe/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── projects/
│   │   ├── technologies/
│   │   └── Landing.tsx
│   ├── context/
│   │   └── ControlDisplay.tsx
│   ├── data/
│   │   └── information/
│   │       ├── aboutMe.js
│   │       ├── projects.js
│   │       └── stack.tech.js
│   └── assets/
├── hooks/
│   └── ControlDisplay/
├── extras/
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── .gitignore
├── README.md
└── yarn.lock
```

## Información y contenido

La información principal del sitio está separada en archivos dentro de `src/data/information`:

- `aboutMe.js`: texto del perfil profesional y resumen personal
- `projects.js`: listado de proyectos con título, descripción, imagen, URL y stack
- `stack.tech.js`: tecnologías que se muestran en la sección de skills

Esto permite mantener el contenido del portfolio de forma ordenada y reutilizable.

## Componentes principales

### `src/app/page.tsx`

Es el punto de entrada principal. Monta la vista principal del landing.

### `src/components/Landing.tsx`

Compone la estructura general del portfolio:

- Navbar
- About me
- Proyectos
- Tecnologías
- Contacto
- Footer

### `src/components/contact/Form.tsx`

Formulario de contacto con:

- Campos de correo y mensaje
- envío mediante Formspree
- validación HTML requerida
- integración con reCAPTCHA

### `src/context/ControlDisplay.tsx`

Contexto global para manejar estados de visualización dentro de la UI, especialmente relacionados con componentes modales/menús.

## Personalización rápida

Si quieres editar el portfolio, estos son los puntos más importantes:

- Cambiar textos personales: `src/data/information/aboutMe.js`
- Añadir o modificar proyectos: `src/data/information/projects.js`
- Cambiar tecnologías mostradas: `src/data/information/stack.tech.js`
- Ajustar estilos generales: `src/app/globals.css`
- Cambiar metadata SEO: `src/app/layout.tsx`

## Despliegue

El proyecto está listo para desplegarse en plataformas como:

- Vercel
- Netlify
- cualquier hosting compatible con Next.js

Para Vercel, el proceso recomendado es:

1. Conectar el repositorio
2. Seleccionar el proyecto
3. Configurar variables de entorno, incluyendo `NEXT_PUBLIC_SITE_WEB`
4. Desplegar

## Notas adicionales

- El puerto de desarrollo está configurado explícitamente en `3001` en `package.json`.
- La app incluye assets locales para proyectos, imágenes y archivos de currículo en `public/`.
- El proyecto usa un diseño con efecto visual tipo fondos dinámicos y overlays para una experiencia más moderna.

## Autor

Alfredo Morales

Desarrollador Frontend / Fullstack Junior orientado a crear interfaces limpias, funcionales y escalables.
