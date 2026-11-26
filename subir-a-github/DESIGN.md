---
name: Portafolio · Alejandro Guerra Gómez
description: Afiche serigráfico a dos tintas sobre papel verde pantano para un comunicador del territorio.
colors:
  green: "#002a32"
  green-up: "#063741"
  green-line: "#1a4b54"
  green-deep: "#001b21"
  orange: "#d76b32"
  orange-hi: "#ee8d55"
  cream: "#f6ffeb"
  brown: "#43311f"
  muted: "rgba(246,255,235,.74)"
typography:
  display:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 8.6vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.88
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  headline:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.88
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.05
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 85"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  band: "clamp(4rem, 9vw, 7.5rem)"
  container: "1240px"
  stack: "0.75rem"
  grid-gap: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.green-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hi}"
    textColor: "{colors.green-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.green}"
  button-dark:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "44px"
  filter-chip-active:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.green-deep}"
  badge-win:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.7rem"
  nav-link:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    height: "44px"
    padding: "0 0.8rem"
  type-only-placeholder:
    backgroundColor: "{colors.brown}"
    textColor: "{colors.orange-hi}"
    padding: "1.2rem"
---

# Design System: Portafolio · Alejandro Guerra Gómez

## Overview

**Creative North Star: "El afiche pegado en la pared"**

El sitio es un afiche de colectivo juvenil impreso en serigrafía a dos tintas: papel verde pantano con grano, tinta naranja y tinta clara. Todo lo que aparece en pantalla tiene que poder explicarse como algo que pasó por una malla de serigrafía: bloques planos de tinta, reglas gruesas, titulares de cartel en mayúsculas condensadas, fotos reducidas a duotono. Cuando dos tintas se cruzan aparece la sobreimpresión, un marrón que solo existe porque naranja cayó sobre verde.

La densidad es de cartel, no de revista: pocos elementos, muy grandes, separados por reglas de 2px en tinta clara. El papel nunca cambia de color de fondo salvo para dar paso a una banda entera de tinta (naranja para la presentación personal, verde profundo para el pie de contacto). Las esquinas son rectas y no hay sombras: la profundidad la da el orden de impresión, no la luz.

El único gesto interactivo propio es que la tinta se levanta: al pasar el cursor por una foto de proyecto, la capa en duotono se barre hacia arriba y deja ver la foto a color. El único movimiento automático es la impresión del cartel al cargar, capa por capa.

**Key Characteristics:**
- Dos tintas (naranja y clara) sobre papel verde pantano; los tintes son gamas de esas tres bases.
- Titulares en Anybody condensada y pesada, siempre en mayúsculas; cuerpo en Atkinson Hyperlegible Next.
- Reglas de 2px en tinta clara como estructura; divisores de 1px en verde línea como detalle.
- Esquinas rectas, sin sombras, sin degradados.
- Fotos en duotono que se levantan a color al pasar el cursor.
- Grano de papel fijo sobre toda la página.

## Colors

Un papel verde pantano y dos tintas: la paleta es la de un taller de serigrafía con dos pantallas y nada más.

### Primary
- **Tinta naranja** (orange): la tinta de marca, fija. Botón principal, panel del retrato en la portada, banda de presentación, palabra destacada del titular, filtro activo, subrayado de navegación, capitular de las crónicas.
- **Naranja vivo** (orange-hi): la misma tinta aclarada para que el texto pequeño naranja se lea sobre el papel. Títulos de reconocimientos, contador, migas, etiquetas de ficha, enlaces del cuerpo, anillo de foco y estado hover del botón principal.

### Secondary
- **Tinta clara** (cream): el texto principal sobre papel, las reglas estructurales de 2px, el botón de línea, la insignia de premio.

### Tertiary
- **Sobreimpresión** (brown): naranja sobre verde. Solo como fondo de los marcadores tipográficos que reemplazan una foto inexistente, con texto en naranja vivo.

### Neutral
- **Papel verde pantano** (green): el fondo de todo el sitio y de la cabecera fija. Color de marca, fijo.
- **Papel levantado** (green-up): la franja de reconocimientos y el fondo de espera de las fotos en duotono.
- **Verde línea** (green-line): divisores de 1px dentro de listas, fichas, pies de foto y el borde de los filtros inactivos.
- **Papel profundo** (green-deep): el pie de contacto, el botón oscuro y todo texto que se imprime sobre tinta naranja.
- **Tinta clara lavada** (muted): texto secundario, bajadas, pies de foto y descripciones.

### Named Rules
**La Regla de las Dos Tintas.** Ningún color entra al sitio si no es papel verde, tinta naranja, tinta clara, una gama de ellos o su sobreimpresión. Los colores de marca (green, orange) no se tocan; se varían.

**La Regla del Texto Sobre Naranja.** Sobre una superficie de tinta naranja el texto es siempre papel profundo, nunca tinta clara.

**La Regla del Naranja Pequeño.** El naranja de marca se usa en masas grandes (bloques, titulares, capitular); cuando el naranja va en texto pequeño sobre papel, se usa naranja vivo.

## Typography

**Display Font:** Anybody (con system-ui, sans-serif), variable en ancho y peso.
**Body Font:** Atkinson Hyperlegible Next (con Atkinson Hyperlegible, system-ui).

**Character:** Anybody comprimida al 70–90 % de ancho y a peso 800–900 hace de tipo de madera de cartel; Atkinson aporta un cuerpo claro y abierto pensado para lectura fácil. El contraste es de oficio: grito de afiche arriba, texto honesto abajo.

### Hierarchy
- **Display** (850, clamp(3.4rem, 8.6vw, 6rem), 0.88): el titular de la portada en tres líneas apiladas. Mayúsculas, ancho 88 %.
- **Headline** (850, clamp(3rem, 9vw, 6rem), 0.88): encabezados de sección ("Proyectos", "Hablemos" hasta 8rem al 70 % de ancho). Mayúsculas, ancho 72 %.
- **Title** (800, 1.3rem, 1.05): títulos de tarjeta, subtítulos de crónica (h3). Mayúsculas, ancho 88 %. Las tarjetas destacadas suben a clamp(1.8rem, 3.4vw, 2.8rem) al 75 %.
- **Body** (400, 18px, 1.6): texto corrido; las crónicas a 1.1rem con un máximo de 66ch, las bajadas a 48–56ch.
- **Label** (700, 0.95rem, 0.03em, mayúsculas): navegación, botones, filtros, contador, migas, etiquetas de ficha (0.8rem con 0.06em).

### Named Rules
**La Regla del Cartel.** Todo lo que está en Anybody va en mayúsculas condensadas, salvo las citas destacadas de la banda naranja. Anybody nunca compone texto corrido.

**La Regla de la Capitular.** La crónica abre con una capitular de Anybody a 4.6rem, peso 900, ancho 70 %, en tinta naranja. Es la única ornamentación tipográfica del cuerpo.

## Layout

Contenedor de 1240px como máximo con un margen lateral fluido (gutter: 16px en teléfono, hasta 48px). Las secciones son bandas de borde a borde con padding vertical fluido (band); el contenido vive dentro del contenedor.

- **Portada:** dos columnas 1.15fr / 0.85fr; el texto a la izquierda centrado en vertical, el panel naranja a la derecha a casi toda la altura de la ventana (mín. 440px, máx. 820px). Bajo 900px pasa a una columna con el panel arriba.
- **Reconocimientos:** cinco columnas separadas por reglas verticales de 2px; 2 columnas bajo 1000px y una bajo 560px, con divisores de 1px.
- **Encabezado de sección:** titular a la izquierda, bajada de hasta 26rem a la derecha alineada abajo, cerrado por una regla de 2px.
- **Mosaico de proyectos:** retícula de 3 columnas con gap 2.4rem / 1.6rem y piezas de tamaños distintos (grande 2×2, ancha 2×1, alta 1×2, fila completa). Al filtrar, todas vuelven a 4:3 de una celda. 2 columnas bajo 960px; una bajo 620px, donde las tarjetas sencillas se vuelven filas foto 38 % / texto.
- **Crónica de proyecto:** portada a dos columnas (texto y foto), cuerpo de texto + ficha lateral fija de 320px; bajo 900px la ficha sube encima del texto.
- **Contacto:** dos columnas, titular a la izquierda y lista de canales a la derecha.

Los saltos usados son 520, 560, 620, 640, 760, 820, 860, 900, 960 y 1000px, cada uno atado a un componente.

## Elevation & Depth

El sistema es plano. No hay sombras en ningún elemento. La profundidad se expresa como orden de impresión: el papel, luego el papel levantado, luego las tintas encima. El grano del papel (ruido fractal al 12 % en mezcla soft-light) es una capa fija por encima de todo que unifica la superficie. La cabecera fija se separa del contenido con una regla de 2px, no con sombra.

### Named Rules
**La Regla Sin Sombra.** Nada proyecta sombra. Si algo necesita separarse, recibe una regla o un bloque de tinta.

**La Regla de la Sobreimpresión.** El retrato y las fotos impresas sobre naranja usan mezcla multiply, para que la tinta se combine con el papel como en una impresión real.

## Shapes

Esquinas rectas en todo (0px). La forma la dan los rectángulos de tinta y las reglas: 2px en tinta clara para estructura (cabecera, encabezados, bordes de botón, ficha lateral, tope de tarjetas), 3px en papel profundo para la cita de la banda naranja, 1px en verde línea para divisores internos. Las flechas se dibujan con un trazo SVG de 2.4 y se tiñen con la tinta del contexto.

## Components

### Buttons
Bloques de tinta macizos, de cartel.
- **Shape:** rectos (0px), alto mínimo 52px, padding horizontal 1.5rem, borde de 2px del mismo color que el relleno.
- **Primary:** tinta naranja con texto papel profundo, Label a 1rem/800. Puede llevar una flecha SVG de 18px.
- **Hover / Focus:** sube 2px y pasa a naranja vivo; la flecha avanza 3px. Al presionar baja 1px y escala a 0.98. Foco: contorno de 3px en naranja vivo con separación de 3px (papel profundo sobre naranja).
- **Line:** transparente con borde y texto en tinta clara; al pasar el cursor se rellena de tinta clara con texto verde.
- **Dark:** papel profundo con texto claro, para usar sobre la banda naranja; al pasar el cursor pasa a verde pantano.

### Chips (filtros)
- **Style:** transparentes, texto claro, borde de 2px en verde línea, alto 44px, Label a 0.9rem.
- **State:** el activo es un bloque de tinta naranja con texto papel profundo; el inactivo enciende el borde a tinta clara al pasar el cursor.

### Cards / Containers (tarjeta de proyecto)
- **Corner Style:** recto (0px).
- **Background:** ninguno; la foto en duotono hace de bloque, en 4:3 por defecto.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** regla de 2px en tinta clara encima del texto.
- **Internal Padding:** 0.85rem sobre el título; gap de 0.9rem entre foto y texto.
- **Hover:** la tarjeta sube 2px, la foto escala a 1.03, la tinta se levanta y el título pasa a naranja vivo. El foco de teclado también levanta la tinta.
- **Insignia de premio:** bloque de tinta clara en la esquina superior izquierda de la foto, texto papel profundo en Label 0.78rem/800.
- **Marcador tipográfico:** si no hay foto, bloque de sobreimpresión con el nombre en Anybody 850 al 72 % en naranja vivo, alineado abajo.

### Navigation
- **Style:** cabecera fija en papel verde con regla inferior de 2px; monograma "AG" en un cuadro de tinta naranja de 34px y nombre en Anybody 800.
- **Links:** Label en mayúsculas, alto 44px. El activo y el hover muestran una barra de 3px en tinta naranja que crece desde la izquierda (0.3s, ease exponencial).
- **Mobile:** bajo 640px se oculta el nombre junto al monograma y el enlace Inicio, y se aprieta el padding.

### Foto en duotono (componente propio)
Cada foto de proyecto se imprime dos veces: la foto a color abajo y encima una copia filtrada a dos tintas (verde pantano a naranja claro). Al pasar el cursor, la copia se recorta hacia arriba con clip-path en 0.55s y deja la foto a color. El retrato de la portada usa el filtro verde a blanco con multiply sobre el panel naranja.

### Ficha de proyecto
Recuadro con borde de 2px en tinta clara, padding 1.5rem, fijo a 88px del borde superior. Lista de definiciones: etiqueta en Label 0.8rem naranja vivo, valor en cuerpo 700; divisores de 1px en verde línea.

### Lista de canales (contacto)
Filas con etiqueta en Label, valor en cuerpo 700 y flecha de 18px en naranja vivo; divisores de 1px. Al pasar el cursor, el valor pasa a naranja vivo y la flecha avanza 5px.

### Movimiento
Un solo momento automático: al cargar la portada, el panel naranja se imprime de abajo arriba (clip-path, 0.42s), luego el retrato y las tres líneas del titular suben 24px escalonadas cada 0.06s, y el resto aparece en 0.35s. Curva cubic-bezier(.16,1,.3,1). Con movimiento reducido, todo queda quieto.

## Do's and Don'ts

### Do:
- **Do** construir cada superficie con papel verde, tinta naranja, tinta clara y sus gamas; el texto sobre naranja siempre en papel profundo.
- **Do** separar con reglas de 2px en tinta clara la estructura y con 1px en verde línea los detalles.
- **Do** componer los titulares en Anybody 800–900, mayúsculas, ancho 70–90 %, interlineado 0.86–1.
- **Do** pasar toda foto de proyecto por el duotono y dejar que la tinta se levante al pasar el cursor y al recibir foco.
- **Do** usar naranja vivo para el texto naranja pequeño y el anillo de foco sobre papel.
- **Do** mantener objetivos táctiles de al menos 44px (52px en botones).

### Don't:
- **Don't** usar sombras, degradados ni esquinas redondeadas en superficies de tinta.
- **Don't** introducir un tercer color de tinta ni alterar los valores base de green y orange.
- **Don't** componer texto corrido en Anybody ni usar Atkinson para titulares.
- **Don't** poner texto en tinta clara sobre la tinta naranja.
- **Don't** añadir movimientos automáticos más allá de la impresión del cartel en la portada.
- **Don't** usar fotos a todo color sin duotono en el mosaico ni en las crónicas.
