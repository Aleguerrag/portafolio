---
name: Portafolio · Alejandro Guerra Gómez
description: Papel claro y verde pantano; un hilo naranja teje la portada y un río lleva al visitante de proyecto en proyecto.
colors:
  green: "#002a32"
  green-2: "#0c3c45"
  green-3: "#1c5660"
  sage: "#dfe9e2"
  sage-2: "#cddcd2"
  paper: "#f3f6f0"
  white: "#ffffff"
  orange: "#d76b32"
  orange-text: "#b3511c"
  orange-hi: "#ee8d55"
  orange-soft: "#f8e3d6"
  ink: "#0d2328"
  muted: "#4f6669"
  on-green: "#eef4ef"
  on-green-muted: "rgba(238,244,239,.74)"
typography:
  display:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  display-contact:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 9vw, 7rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  title-sm:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.4vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  sm: "16px"
  md: "24px"
  lg: "32px"
  pill: "999px"
spacing:
  gut: "clamp(16px, 4vw, 48px)"
  max: "1240px"
  rail-gap: "24px"
  section: "clamp(5rem, 9vw, 7.5rem)"
  stops-gap: "clamp(4rem, 8vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.green-2}"
  button-alt:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "54px"
  button-alt-hover:
    backgroundColor: "{colors.sage}"
  button-warm:
    backgroundColor: "{colors.orange}"
    textColor: "#1c0c03"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "54px"
  button-warm-hover:
    backgroundColor: "{colors.orange-hi}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "44px"
  nav-link-current:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
  tag:
    backgroundColor: "{colors.green-2}"
    textColor: "{colors.on-green}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".42rem .85rem"
  chip-skill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: ".6rem 1.1rem"
  card-rail:
    backgroundColor: "{colors.sage}"
    rounded: "{rounded.md}"
    width: "min(360px, 78vw)"
  contact-channel:
    backgroundColor: "{colors.green-2}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.sm}"
    padding: "1.05rem 1.2rem"
  contact-channel-hover:
    backgroundColor: "{colors.green-3}"
  fact-sheet:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "1.6rem"
---

# Design System: Portafolio · Alejandro Guerra Gómez

## Overview

**Creative North Star: "Tejido y río"**

La comunicación como un hilo que teje comunidad y un río que recorre el territorio. El visitante no hojea una cuadrícula: navega. Un hilo naranja cruza la portada y se teje al cargar; más abajo, sobre un bloque de verde pantano, un río se dibuja con el scroll y un punto naranja baja de parada en parada, una por proyecto. Las fotos de Alejandro aparecen a color real, con esquinas muy redondeadas, flotando despacio en la portada y siguiendo al puntero con inercia.

El sistema alterna dos suelos: papel claro (`paper`, `sage`) para leer y verde pantano (`green`) para recorrer (el río) y para escribir (el contacto). Los bloques verdes entran con las esquinas superiores redondeadas, como una hoja que sube sobre el papel. La densidad es tranquila: secciones de 5 a 7,5 rem de aire, una sola tipografía, sombras largas y suaves en lugar de bordes. Este mundo reemplaza al v3 "Afiche serigráfico", rechazado por cuadrado y rígido: aquí nada es cuadrado, nada lleva filtro sobre las fotos y todo se mueve con suavidad.

El naranja es la marca y el hilo conductor, no un relleno. Aparece como línea (el hilo, el río, la barra del carril), como punto (el logotipo, los reconocimientos, las etiquetas) y como un único botón cálido sobre verde.

**Key Characteristics:**
- Dos colores de marca fijos: verde pantano `#002a32` y naranja `#d76b32`; todo lo demás son gamas de ambos.
- Una sola familia, Schibsted Grotesk, con titulares 800 y tracking -0.035em.
- Formas redondeadas (16, 24, 32 px) y píldoras; ningún ángulo recto visible en superficies.
- Fotos a color real, sin duotono ni filtro.
- Movimiento como recorrido: hilo que se teje, río que se dibuja, fotos que flotan, portada que viaja entre páginas.
- Todo el movimiento usa transform, opacity o stroke-dashoffset, y se queda quieto con reduced-motion.

## Colors

Papel verdoso y verde pantano como suelos, naranja como hilo; las variantes existen para cumplir contraste, no para decorar.

### Primary
- **Verde pantano** (`green`): color de marca. Suelo del río y del contacto, botón principal, enlace activo de la navegación, titulares sobre papel, favicon. Es el único fondo oscuro del sistema.
- **Verde levantado** (`green-2`): superficie elevada sobre verde (etiquetas del río, canales de contacto, fondo de foto mientras carga) y hover del botón principal.
- **Verde medio** (`green-3`): bordes y divisores sobre verde; hover de los canales de contacto.

### Secondary
- **Naranja hilo** (`orange`): color de marca. Trazo del hilo de la portada, trazo del río y su punto, barra de avance del carril, puntos del logotipo y de los reconocimientos, anillo de foco, selección de texto y el botón cálido sobre verde. No se usa como texto pequeño sobre papel ni sobre verde.
- **Naranja texto** (`orange-text`): naranja oscurecido para texto sobre papel o blanco (4.7:1 sobre `paper`): la palabra "teje" del titular, enlaces "Ver proyecto", migas, etiquetas de la ficha, cifra de la insignia.
- **Naranja claro** (`orange-hi`): naranja para texto sobre verde (6.2:1): el punto de "Hablemos.", enlaces del río, flechas de canales; también hover del botón cálido.
- **Naranja lavado** (`orange-soft`): fondo de citas destacadas y de la píldora de premio en las fichas de proyecto, siempre con texto verde.

### Neutral
- **Papel** (`paper`): fondo de página, `theme-color` y relleno interior de los nodos de la línea de tiempo.
- **Verde lavado** (`sage`): superficie suave sobre papel: fondo de foto mientras carga, hover de botones claros y de la navegación, chips de herramientas.
- **Borde salvia** (`sage-2`): bordes de 1,5 px en botones claros y chips, divisores de listas, pista del carril, scrollbar.
- **Blanco** (`white`): tarjetas elevadas sobre papel (reconocimientos, sobre mí, ficha del proyecto, insignia), botón alternativo, barra de navegación translúcida (78 %).
- **Tinta** (`ink`): texto de cuerpo sobre papel.
- **Gris verdoso** (`muted`): texto secundario sobre papel o blanco (5.6:1 sobre `paper`).
- **Texto sobre verde** (`on-green`) y **texto secundario sobre verde** (`on-green-muted`): cuerpo y texto de apoyo dentro del río y del contacto.

### Named Rules
**La regla del hilo.** El naranja de marca (`orange`) es línea, punto o un único botón cálido por vista; nunca un fondo de sección ni un filtro sobre fotos.

**La regla de la variante legible.** Texto naranja sobre papel usa `orange-text`; sobre verde usa `orange-hi`. El naranja de marca puro queda para trazos, puntos y el botón.

## Typography

**Display Font:** Schibsted Grotesk (con system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (con system-ui, sans-serif)

**Character:** Una grotesca de periódico, firme en 800 con tracking cerrado para titulares, cálida y legible en 400 para el texto largo de las crónicas. Una sola familia de 400 a 900 cargada desde Google Fonts.

### Hierarchy
- **Display** (800, `clamp(3rem,6vw,5.4rem)`, 1): titular de la portada, en `green` con una palabra en `orange-text`. Las portadas de proyecto usan `clamp(2.6rem,5.6vw,4.8rem)`; la 404, `clamp(3.2rem,9vw,6rem)`.
- **Display contacto** (800, `clamp(3.2rem,9vw,7rem)`, -0.05em): solo "Hablemos." en el pie de contacto.
- **Headline** (800, `clamp(2.5rem,5.4vw,4.6rem)`, 1): encabezados de sección, máx. 14ch. Variantes cercanas: "Más proyectos" `clamp(2.2rem,4.6vw,3.8rem)`, sobre mí `clamp(2.1rem,4.2vw,3.4rem)`, h2 de crónica `clamp(1.8rem,3.4vw,2.6rem)`.
- **Title** (800, `clamp(1.7rem,2.8vw,2.4rem)`, 1): nombre de cada parada del río.
- **Title pequeño** (800, 1.3rem, 1.15, -0.025em): título de tarjeta del carril; h3 de crónica a 1.35rem.
- **Lead** (400, `clamp(1.08rem,1.4vw,1.22rem)`, 1.6): entradillas de portada y de proyecto, máx. 40–46ch, en `muted` con `strong` en `ink`.
- **Body** (400, 17px, 1.6): texto base. En crónicas sube a 1.1rem con máx. 66ch; el primer párrafo va a 1.25rem en `green`.
- **Label** (600, 0.84rem): etiquetas del río, términos de la ficha, nombre del canal. Siempre en minúscula normal, sin versalitas ni tracking abierto.

### Named Rules
**La regla de una sola voz.** Todo el sitio usa Schibsted Grotesk; la jerarquía sale del peso (800 contra 400/600) y del tamaño, nunca de una segunda familia.

**La regla del titular apretado.** Todo h1–h4 lleva 800, tracking -0.035em, interlínea 1 y `text-wrap: balance`.

## Layout

Contenedor centrado `.wrap` de `min(1240px, 100% - 2·gut)` con margen lateral fluido `clamp(16px,4vw,48px)`. Las secciones respiran con `clamp(5rem,9vw,7.5rem)` vertical; los bloques verdes (río y contacto) suben sobre el papel con esquinas superiores de 32 px.

- **Portada:** 100svh, dos columnas iguales (texto | collage de tres fotos posicionadas en absoluto, altura `min(76svh,660px)`). Bajo 900 px se apila y el collage baja a 440 px (360 px bajo 520 px).
- **Reconocimientos:** una tarjeta blanca con cinco columnas separadas por filetes `sage-2`; bajo 1000 px se vuelve fila desplazable con snap.
- **Río:** paradas en zigzag de dos columnas (foto | texto, alternando) con hueco central de `clamp(3rem,10vw,9rem)` por donde serpentea el río de 240 px. Bajo 860 px el río pasa al borde izquierdo (40 px) y las paradas se apilan con 44 px de sangría.
- **Carril:** scroll horizontal a sangre con snap, alineado al contenedor por `scroll-padding`, tarjetas de tres anchos (360, 520 ancha, 3/4 alta) con 24 px de hueco.
- **Proyecto:** portada de dos columnas (texto | foto 4/3.2), cuerpo en `1fr | 320px` con ficha pegajosa a 96 px; bajo 900 px la ficha sube arriba y deja de ser pegajosa.
- **Contacto:** dos columnas (titular y botón | lista de canales); bajo 760 px una.

La cabecera es flotante y fija: logotipo píldora a la izquierda, navegación píldora translúcida a la derecha; `scroll-padding-top` de 96 px para anclas.

## Elevation & Depth

Profundidad por sombras largas, suaves y teñidas de verde, más el contraste entre papel y blanco. No hay bordes duros: donde hace falta un contorno se usa un `inset` de 1,5 px en `sage-2`.

### Shadow Vocabulary
- **Sombra larga** (`box-shadow: 0 28px 56px -32px rgba(0,42,50,.45)`): fotos flotantes de la portada, insignia, foto de portada de proyecto, hover de tarjetas del carril.
- **Sombra corta** (`box-shadow: 0 12px 28px -18px rgba(0,42,50,.4)`): superficies blancas en reposo (reconocimientos, sobre mí, ficha, navegación).
- **Halo del punto** (`box-shadow: 0 0 0 8px rgba(215,107,50,.22)`): el punto del río; el punto de cada etiqueta gana un halo de 5 px al ser alcanzado.

### Named Rules
**La regla de la sombra que respira.** Las sombras siempre tienen desplazamiento negativo de expansión (-18 a -32 px) y tinte verde; nada de sombras grises cortas ni duras.

## Shapes

Todo es redondo. Tres radios: 32 px (`lg`) para fotos grandes, bloques verdes y tarjetas de sección; 24 px (`md`) para tarjetas del carril, ficha, citas, imágenes de crónica; 16 px (`sm`) para canales de contacto, citas de sobre mí y miniaturas. Botones, navegación, etiquetas, chips y premios son píldoras (999 px). Los puntos son círculos de 7 a 20 px. El hilo y el río son curvas Bézier con extremos redondeados (`stroke-linecap: round`), 2,5–3 px de grosor; el lecho del río es un trazo blanco al 7 % de 46 px (12 px en móvil). Las fotos de sobre mí dentro de una tarjeta usan `lg - 8px` para seguir el borde exterior.

## Components

### Botones
Píldoras táctiles y seguras, con flecha que avanza.
- **Forma:** píldora (999 px), alto mínimo 54 px, relleno lateral 1.6rem, 700 a 1rem.
- **Principal:** `green` con texto blanco; hover `green-2`.
- **Alternativo:** blanco con texto `green` y contorno interior 1,5 px `sage-2`; hover `sage`. Para la hoja de vida sobre papel.
- **Cálido:** `orange` con texto casi negro `#1c0c03`; hover `orange-hi`. Solo sobre verde, uno por vista (descargar hoja de vida en el contacto).
- **Estados:** presión `scale(.97)` en 160 ms; el icono SVG de 18 px avanza 3 px (abajo en la variante "down") en hover. Hover solo con puntero fino.
- **Enlace "Ver proyecto":** texto 700 en `orange-text` (o `orange-hi` sobre verde) con flecha que avanza 4 px.

### Navegación
- Barra píldora blanca al 78 % con `backdrop-filter: blur(14px) saturate(1.4)` y sombra corta. Enlaces de 44 px de alto, 600 a .94rem; el actual en `green` con texto blanco; hover `sage`.
- El logotipo es un punto naranja de 12 px más "Alejandro Guerra"; al bajar 40 px gana su propia píldora translúcida.
- La cabecera se esconde al bajar más de 320 px y vuelve al subir o al recibir foco. Bajo 620 px se oculta "Inicio" y el apellido.

### Etiquetas y chips
- **Etiqueta del río:** píldora `green-2` con punto naranja de 7 px, 600 a .84rem, texto `on-green`.
- **Premio sobre foto:** píldora blanca con texto `green`, 700 a .8rem, en la esquina superior izquierda de la foto.
- **Chip de habilidad:** píldora blanca con contorno `sage-2`, 600 a .96rem, texto `green`; variante herramienta en `sage` sin contorno.

### Tarjetas / Contenedores
- **Tarjeta del carril:** foto 4/3 (o 3/4 alta, o ancha de 520 px) con radio 24 px sobre `sage`, título y descripción debajo, sin caja. Hover: la foto sube 4 px, gana sombra larga y la imagen hace zoom a 1.03.
- **Parada del río:** foto 4/3 con radio 32 px sobre `green-2`, texto al lado con título, etiqueta, párrafo y enlace. Mismo hover que la tarjeta.
- **Superficies blancas:** reconocimientos, sobre mí y ficha con sombra corta; radio 32 px (secciones) o 24 px (ficha), relleno 1.6rem en la ficha.
- **Cita destacada:** fondo `orange-soft`, texto `green` 700–800, radio 16–24 px.
- **Siguiente proyecto:** bloque `green` de radio 24 px con el título en 800 y una flecha naranja enmascarada que avanza 5 px; el bloque sube 3 px en hover.

### Canales de contacto
- Filas `green-2` de radio 16 px: nombre del canal en `on-green-muted` 600, valor en 600, flecha `orange-hi` a la derecha. Hover `green-3` y la flecha avanza 4 px; presión `scale(.985)`.

### Línea de tiempo
- Lista con una línea vertical de 2 px en degradado de `orange` a `sage-2`; cada hito es un anillo naranja de 16 px relleno de `paper`, con título 700 en `green` y detalle en `muted`. Es el hilo del sistema llevado a la trayectoria.

### Hilo de la portada (firma)
- Curva SVG a sangre detrás de la portada, trazo `orange` de 2,5 px. Se teje una vez al cargar (stroke-dashoffset, 1800 ms, retardo 350 ms, `ease-out`).

### El río (firma)
- Curva SVG en zigzag generada por JS a partir de la posición de las paradas: un lecho blanco al 7 % y un trazo `orange` de 3 px que se dibuja con el scroll (progreso cuando el río cruza el 60 % de la ventana). Un punto naranja de 20 px con halo recorre la curva; cada parada alcanzada agranda el punto de su etiqueta a 1.35 con halo.

### Collage flotante (firma)
- Tres fotos de radio 32 px con sombra larga, posicionadas en absoluto. Cada una flota en vertical (-8 a 10 px, 7 a 9,5 s, alternado, desfasadas) y, con ratón, sigue al puntero con inercia según `data-depth` (-14, 22, 12). La insignia blanca "Oro · Premios Xpoiler 2025" se posa sobre el collage.

### Movimiento
El movimiento es central a este mundo y es un sistema propio:
- **Curvas:** `--ease-out` `cubic-bezier(.23,1,.32,1)` para casi todo (entradas, hover, presión, hilo); `--ease-drawer` `cubic-bezier(.32,.72,0,1)` para la cabecera y la foto que viaja entre páginas; `--ease-io` `cubic-bezier(.77,0,.175,1)` está declarado pero sin uso. Cambios de color con `ease` en 200–300 ms.
- **Duraciones:** presión 160 ms; color 200 ms; flechas 250 ms; elevación de fotos 350 ms; zoom de imagen 700 ms; entrada 800 ms (fotos 1 s); cabecera 450 ms; hilo 1800 ms; salida de página 280 ms y entrada 500 ms; foto compartida 550 ms.
- **Entrada única:** elementos `.enter` suben 18 px desde opacidad 0 (los titulares desde .35, las fotos desde 28 px y escala .96) con escalones de 70, 140, 220 y 300 ms; al terminar, la clase se retira.
- **Interacción:** presión `scale(.97)` en botones y `.985` en fotos y filas; hover eleva -4 px y amplía la imagen a 1.03; flechas avanzan 3–5 px. Los hover solo existen con `hover:hover` y `pointer:fine`.
- **Scroll:** el río se dibuja y el punto avanza; la cabecera se esconde y vuelve; el carril tiene snap, botones anterior/siguiente que saltan de tarjeta en tarjeta, arrastre con ratón que encaja en la tarjeta más cercana y una barra naranja de avance (scaleX de .1 a 1).
- **Entre páginas:** `@view-transition` entre documentos; la página sale subiendo 12 px y entra desde 16 px; la foto de la tarjeta o parada pulsada se convierte en la portada del proyecto (`view-transition-name: cover`).
- **Reduced motion:** sin view transitions ni entradas; todas las animaciones se anulan y las transiciones bajan a .01 ms; el hilo y el río se muestran completos, el collage no sigue al puntero, el carril se desplaza sin suavizado y `scroll-behavior` vuelve a `auto`.

## Do's and Don'ts

### Do:
- **Do** mantener `#002a32` y `#d76b32` como base fija; cualquier tono nuevo es una gama de uno de los dos.
- **Do** usar `orange-text` para texto naranja sobre papel y `orange-hi` sobre verde.
- **Do** redondear toda superficie con 16, 24 o 32 px, y usar píldora para botones, navegación, etiquetas y chips.
- **Do** mostrar las fotos del repositorio a color real con `object-fit: cover` y un `object-position` ajustado a cada encuadre.
- **Do** animar solo transform, opacity y stroke-dashoffset con `--ease-out`, y dejar todo en reposo con `prefers-reduced-motion`.
- **Do** limitar el hover a `@media (hover:hover) and (pointer:fine)` y dar a todo lo pulsable una presión (`scale(.97)` o `.985`).
- **Do** reutilizar el hilo naranja (línea, punto, anillo) para unir piezas nuevas en lugar de introducir otro adorno.

### Don't:
- **Don't** volver a la cuadrícula de tarjetas cuadradas ni al afiche rígido del v3: nada de esquinas rectas en superficies.
- **Don't** aplicar duotono, filtro naranja ni tinte sobre las fotos.
- **Don't** usar el naranja de marca como fondo de sección ni más de un botón cálido por vista.
- **Don't** añadir una segunda familia tipográfica ni etiquetas en mayúsculas con tracking abierto.
- **Don't** usar sombras duras, desplazadas o grises; las sombras son largas, suaves y teñidas de verde.
- **Don't** dejar movimiento continuo fuera del collage de la portada: el resto anima una vez o en respuesta al scroll o al puntero.
