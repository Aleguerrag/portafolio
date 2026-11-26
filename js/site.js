/* Portafolio v2: filtros del mosaico y aparición suave de la galería */
{
  const mosaic = document.querySelector('.mosaic');
  if (mosaic) {
    const tiles = [...mosaic.querySelectorAll('.tile')];
    tiles.forEach((t, i) => { t.style.transitionDelay = Math.min(i, 6) * 40 + 'ms'; });

    // Aparece una sola vez, cuando la galería entra en pantalla
    if ('IntersectionObserver' in window) {
      const seenObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { mosaic.classList.add('seen'); seenObserver.disconnect(); }
        });
      }, { threshold: 0.05 });
      seenObserver.observe(mosaic);
    } else {
      mosaic.classList.add('seen');
    }

    // Filtros por área
    const filters = document.querySelector('.filters');
    const count = document.querySelector('.count');
    if (filters) {
      filters.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const f = b.dataset.f;
        filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        let n = 0;
        tiles.forEach((t) => {
          const show = f === 'todos' || t.dataset.a.split(' ').includes(f);
          t.hidden = !show;
          t.style.transitionDelay = '0ms';
          if (show) n++;
        });
        mosaic.classList.toggle('filtered', f !== 'todos');
        if (count) count.textContent = n === 1 ? '1 proyecto' : n + ' proyectos';
      });
    }
  }
}
