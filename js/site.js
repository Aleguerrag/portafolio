/* Portafolio v3 "Afiche": duotono a dos tintas y filtros del mosaico */
{
  // 1. Filtros SVG del duotono (verde pantano -> naranja, verde pantano -> tinta clara)
  const hex = (h) => [1, 3, 5].map((i) => (parseInt(h.slice(i, i + 2), 16) / 255).toFixed(3));
  const duo = (id, dark, light) => {
    const a = hex(dark), b = hex(light);
    // tres puntos: el tono medio se acerca a la tinta clara para que las fotos oscuras respiren
    const mid = a.map((v, i) => (v * 0.35 + b[i] * 0.65).toFixed(3));
    return `<filter id="${id}" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"/>
      <feComponentTransfer>
        <feFuncR type="table" tableValues="${a[0]} ${mid[0]} ${b[0]}"/>
        <feFuncG type="table" tableValues="${a[1]} ${mid[1]} ${b[1]}"/>
        <feFuncB type="table" tableValues="${a[2]} ${mid[2]} ${b[2]}"/>
      </feComponentTransfer></filter>`;
  };
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '0');
  svg.style.position = 'absolute';
  svg.innerHTML = duo('duo-go', '#002a32', '#e2834c') + duo('duo-gw', '#002a32', '#ffffff');

  // Las fotos de las crónicas también se imprimen a dos tintas
  document.querySelectorAll('.fig > img, .strip img, .entry > img').forEach((img) => {
    const box = document.createElement('span');
    box.className = 'duo';
    img.replaceWith(box);
    box.appendChild(img);
  });
  document.body.prepend(svg);

  // 2. Cada foto .duo recibe su capa de tinta encima (la misma imagen, ya en caché)
  document.querySelectorAll('.duo').forEach((box) => {
    const img = box.querySelector('img');
    if (!img) return;
    const ink = img.cloneNode();
    ink.className = img.classList.contains('lift') ? 'ink lift' : 'ink';
    ink.alt = '';
    ink.setAttribute('aria-hidden', 'true');
    ink.removeAttribute('fetchpriority');
    box.appendChild(ink);
  });

  // 3. Filtros por área del mosaico
  const mosaic = document.querySelector('.mosaic');
  const filters = document.querySelector('.filters');
  if (mosaic && filters) {
    const tiles = [...mosaic.querySelectorAll('.tile')];
    const count = document.querySelector('.count');
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      const f = b.dataset.f;
      filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      let n = 0;
      tiles.forEach((t) => {
        const show = f === 'todos' || t.dataset.a.split(' ').includes(f);
        t.hidden = !show;
        if (show) n++;
      });
      mosaic.classList.toggle('filtered', f !== 'todos');
      if (count) count.textContent = n === 1 ? '1 proyecto' : n + ' proyectos';
    });
  }
}
