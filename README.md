# Conjunto Folklórico Amistad

Landing page responsive desarrollada con React + Vite y estética vintage inspirada en el folklore argentino.

## Requisitos

- Node.js 18 o superior
- npm

## Ejecutar

```bash
npm install
npm run dev
```

Luego abrí la dirección que muestra Vite, normalmente:

`http://localhost:5173`

## Compilar para producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/main.jsx` — componentes y contenido de la landing.
- `src/styles.css` — estilos, responsive, slider y estética vintage.
- `public/assets/` — imágenes SVG locales usadas como placeholders.
- `index.html` — documento principal.

## Reemplazar las imágenes

Podés reemplazar los SVG de `public/assets/` por JPG/PNG manteniendo los mismos nombres, o cambiar las rutas en `src/main.jsx`.

Las cuatro imágenes de integrantes son placeholders vintage para que el sitio funcione sin depender de imágenes externas. Cuando tengas las fotos reales, reemplazalas por las fotografías del conjunto.

## Formulario

El formulario actualmente muestra una confirmación en pantalla y no envía datos a un servidor. Para producción se puede conectar a Formspree, EmailJS, un backend propio o una API.
