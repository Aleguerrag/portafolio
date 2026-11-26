# Portafolio · Alejandro Guerra Gómez

Sitio publicado: https://aleguerrag.github.io/portafolio/

Sitio estático (HTML, CSS y JS), sin dependencias ni paso de compilación.

## Estructura
- `index.html`: portada, reconocimientos, mosaico de proyectos con filtros y contacto
- `sobre-mi.html`: trayectoria, formación, habilidades y herramientas
- `proyectos/*.html`: una página por proyecto, en formato de crónica
- `css/site.css`: todos los estilos (los colores de la marca están en `:root`)
- `js/site.js`: filtros del mosaico y aparición suave de la galería
- `assets/img/`: imágenes optimizadas (WebP)
- `assets/hoja-de-vida-alejandro-guerra-gomez.pdf`: hoja de vida descargable
- `portafolio-alejandro/`: versión original del sitio, guardada como respaldo

## Cómo añadir un proyecto nuevo
1. Sube la foto a `assets/img/` en formato `.webp`, con un máximo de 1600 px de ancho y menos de 150 KB.
2. Copia una página de `proyectos/` (por ejemplo `asojem.html`) con un nombre nuevo, en minúsculas y con guiones.
3. Cambia el título, la frase de entrada (`dek`), el relato y la ficha lateral (`Rol`, `Periodo`...).
4. En `index.html`, copia una tarjeta `<a class="tile" ...>` dentro de `.mosaic` y cambia:
   - `href`: la página nueva
   - `data-a`: una o varias áreas separadas por espacio (`estrategica`, `social`, `investigacion`, `eventos`)
   - la imagen, el título (`h3`) y la línea de rol (`p`)
5. Actualiza el número de proyectos en `<p class="count">`.
6. Solo una tarjeta lleva la clase `lg` (la grande): la del proyecto más importante.
