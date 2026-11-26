/* Portafolio v4 "Tejido y río": movimiento suave y navegación */
{
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const raf = (fn) => { let t = false; return () => { if (!t) { t = true; requestAnimationFrame(() => { t = false; fn(); }); } }; };

  // 1. Entrada: al terminar, la clase se va para que nada quede bloqueado
  document.querySelectorAll('.enter').forEach((el) => {
    el.addEventListener('animationend', () => el.classList.remove('enter', 'd1', 'd2', 'd3', 'd4'), { once: true });
  });

  // 2. Cabecera: se esconde al bajar, vuelve al subir
  const top = document.querySelector('.top');
  if (top) {
    let last = scrollY;
    const onScroll = raf(() => {
      const y = scrollY;
      top.classList.toggle('solid', y > 40);
      top.classList.toggle('hide', y > 320 && y > last + 2);
      if (y < last - 2) top.classList.remove('hide');
      last = y;
    });
    addEventListener('scroll', onScroll, { passive: true });
    top.addEventListener('focusin', () => top.classList.remove('hide'));
  }

  // 3. Hilo de la portada: se teje una vez
  const thread = document.querySelector('.thread path');
  if (thread) {
    const L = thread.getTotalLength();
    thread.style.strokeDasharray = L;
    if (reduce) thread.style.strokeDashoffset = 0;
    else thread.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 1800, delay: 350, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' });
  }

  // 4. Fotos flotantes: siguen al puntero con inercia (solo ratón)
  const collage = document.querySelector('.collage');
  if (collage && fine && !reduce) {
    const floats = [...collage.querySelectorAll('.float')].map((el) => ({ el, depth: +el.dataset.depth || 10, x: 0, y: 0 }));
    let tx = 0, ty = 0, running = false, ready = false, lastT = 0;
    // no seguir al puntero hasta que las fotos terminen de entrar
    Promise.all(floats.map((f) => new Promise((ok) => {
      if (!f.el.classList.contains('enter')) return ok();
      f.el.addEventListener('animationend', ok, { once: true });
      setTimeout(ok, 1600);
    }))).then(() => { ready = true; kick(); });
    const step = (t) => {
      const dt = lastT ? Math.min(64, t - lastT) : 16.7;
      lastT = t;
      const k = 1 - Math.pow(1 - 0.08, dt / 16.7);
      let moving = false;
      floats.forEach((f) => {
        f.x += (tx * f.depth - f.x) * k;
        f.y += (ty * f.depth - f.y) * k;
        if (Math.abs(tx * f.depth - f.x) > 0.05 || Math.abs(ty * f.depth - f.y) > 0.05) moving = true;
        f.el.style.transform = `translate3d(${f.x.toFixed(2)}px,${f.y.toFixed(2)}px,0)`;
      });
      running = moving;
      if (moving) requestAnimationFrame(step); else lastT = 0;
    };
    const kick = () => { if (ready && !running) { running = true; requestAnimationFrame(step); } };
    const hero = collage.closest('.hero');
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      kick();
    });
    hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
  }

  // 5. El río: se dibuja con el scroll y el punto baja de parada en parada
  const route = document.querySelector('.route');
  if (route) {
    const stops = route.querySelector('.stops');
    const river = route.querySelector('.river');
    const svg = river.querySelector('svg');
    const bed = river.querySelector('.bed');
    const flow = river.querySelector('.flow');
    const boat = river.querySelector('.boat');
    const items = [...route.querySelectorAll('.stop')];
    let len = 0, marks = [];
    const draw = () => {
      const rr = route.getBoundingClientRect(), sr = stops.getBoundingClientRect();
      river.style.top = (sr.top - rr.top - 40) + 'px';
      river.style.height = (sr.height + 80) + 'px';
      const w = river.offsetWidth, h = river.offsetHeight, mobile = innerWidth <= 860;
      const mid = w / 2, amp = w * (mobile ? 0.3 : 0.42), n = items.length;
      let d = `M${mid} 0`;
      for (let i = 0; i < n; i++) {
        const y0 = h * i / n, y1 = h * (i + 1) / n, s = i % 2 ? -1 : 1;
        d += ` C${mid + amp * s} ${y0 + (y1 - y0) * 0.33} ${mid + amp * s} ${y0 + (y1 - y0) * 0.66} ${mid} ${y1}`;
      }
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      bed.setAttribute('d', d); flow.setAttribute('d', d);
      len = flow.getTotalLength();
      flow.style.strokeDasharray = len;
      const top0 = river.getBoundingClientRect().top;
      marks = items.map((it) => (it.getBoundingClientRect().top + it.offsetHeight / 2 - top0) / h);
      update();
    };
    const update = () => {
      const r = river.getBoundingClientRect();
      const p = reduce ? 1 : Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      flow.style.strokeDashoffset = len * (1 - p);
      const pt = flow.getPointAtLength(len * p);
      boat.style.transform = `translate(${pt.x}px,${pt.y}px)`;
      items.forEach((it, i) => it.classList.toggle('reached', p >= marks[i] - 0.02));
    };
    addEventListener('scroll', raf(update), { passive: true });
    addEventListener('resize', raf(draw));
    addEventListener('load', draw);
    if (document.fonts) document.fonts.ready.then(draw);
    draw();
  }

  // 6. Carril horizontal infinito: botones, arrastre con ratón y barra de avance.
  // Se clonan las tarjetas antes y después del set original; al salir del set
  // del centro se salta sin animación al punto equivalente, así nunca hay final.
  document.querySelectorAll('[data-rail]').forEach((wrap) => {
    const rail = wrap.querySelector('.rail');
    const prev = wrap.querySelector('[data-prev]');
    const next = wrap.querySelector('[data-next]');
    const bar = wrap.querySelector('.rail-bar i');
    const originals = [...rail.querySelectorAll('.card')];
    const n = originals.length;
    if (!n) return;
    const clone = (c) => {
      const k = c.cloneNode(true);
      k.setAttribute('aria-hidden', 'true');
      k.setAttribute('tabindex', '-1');
      k.dataset.clone = '';
      k.querySelectorAll('a,button').forEach((x) => x.setAttribute('tabindex', '-1'));
      return k;
    };
    originals.forEach((c) => rail.append(clone(c)));
    [...originals].reverse().forEach((c) => rail.prepend(clone(c)));
    const cards = [...rail.querySelectorAll('.card')]; // 3 sets: [clones][originales][clones]
    const pad = () => parseFloat(getComputedStyle(rail).scrollPaddingLeft) || 0;
    const posOf = (i) => cards[i].offsetLeft - pad();
    const setW = () => cards[n].offsetLeft - cards[0].offsetLeft;
    const stops = () => cards.map((c, i) => posOf(i));
    let busy = false;
    const jump = (left) => {
      rail.classList.add('jump');
      rail.scrollLeft = left;
      requestAnimationFrame(() => rail.classList.remove('jump'));
    };
    // si quedamos en un set clonado, volvemos al del centro en la misma posición visual
    const recenter = () => {
      const w = setW(), x = rail.scrollLeft, start = posOf(n);
      if (x < start - 4) jump(x + w);
      else if (x >= start + w - 4) jump(x - w);
    };
    const sync = () => {
      const w = setW();
      const p = w > 0 ? (((rail.scrollLeft - posOf(n)) % w) + w) % w / w : 0;
      if (bar) bar.style.transform = `scaleX(${0.1 + p * 0.9})`;
    };
    const go = (left) => {
      busy = true;
      rail.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
    };
    const settle = () => { busy = false; recenter(); sync(); };
    let idle;
    rail.addEventListener('scroll', () => {
      sync();
      clearTimeout(idle);
      idle = setTimeout(() => { if (!down) settle(); }, 140);
    }, { passive: true });
    if ('onscrollend' in rail) rail.addEventListener('scrollend', () => { if (!down) settle(); });
    const page = (dir) => {
      if (busy) recenter();
      const x = rail.scrollLeft, list = stops();
      const target = dir > 0 ? list.find((v) => v > x + 4) : [...list].reverse().find((v) => v < x - 4);
      if (target !== undefined) go(target);
    };
    prev && prev.addEventListener('click', () => page(-1));
    next && next.addEventListener('click', () => page(1));
    const init = () => { jump(posOf(n)); sync(); };
    addEventListener('resize', raf(init));
    addEventListener('load', init);
    init();

    // arrastre con ratón (en táctil manda el gesto nativo)
    let down = false;
    if (fine) {
      let startX = 0, startL = 0, moved = false;
      rail.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        recenter();
        down = true; moved = false; startX = e.clientX; startL = rail.scrollLeft;
      });
      addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (!moved && Math.abs(dx) > 6) { moved = true; rail.classList.add('drag'); }
        if (moved) rail.scrollLeft = startL - dx;
      });
      addEventListener('pointerup', () => {
        if (!down) return;
        down = false;
        if (moved) {
          // encaja en la tarjeta más cercana y solo entonces devuelve el snap nativo
          const x = rail.scrollLeft, list = stops();
          const near = list.reduce((a, b) => (Math.abs(b - x) < Math.abs(a - x) ? b : a), list[0]);
          const done = () => rail.classList.remove('drag');
          if (Math.abs(near - x) < 1) { done(); settle(); return; }
          go(near);
          if ('onscrollend' in rail) rail.addEventListener('scrollend', done, { once: true });
          setTimeout(done, 450);
        }
      });
      rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
    }
  });

  // 7. Transición entre páginas: la foto de la tarjeta se convierte en la portada del proyecto
  addEventListener('pageswap', (e) => {
    const url = e.activation && e.activation.entry && e.activation.entry.url;
    if (!url || !e.viewTransition || url.includes('#')) return;
    const link = [...document.querySelectorAll('a[data-vt]')].find((a) => a.href === url);
    const img = link && (link.querySelector('img') || (link.closest('.stop') && link.closest('.stop').querySelector('.pic img')));
    if (img) {
      img.style.viewTransitionName = 'cover';
      e.viewTransition.finished.finally(() => { img.style.viewTransitionName = ''; });
    }
  });

  // 8. Embeds de Instagram a escala: se dibujan a 330 px (su ancho mínimo) y se reducen al marco
  const clips = [...document.querySelectorAll('.phone .clip')];
  if (clips.length) {
    const fit = () => clips.forEach((c) => c.style.setProperty('--s', (c.clientWidth / 330).toFixed(4)));
    addEventListener('resize', raf(fit));
    fit();
  }

  // 9. Página de proyectos: filtros por área y búsqueda
  const posts = document.querySelector('[data-posts]');
  if (posts) {
    const items = [...posts.querySelectorAll('.post')];
    const btns = [...document.querySelectorAll('.filters [data-f]')];
    const q = document.querySelector('[data-search]');
    const count = document.querySelector('[data-count]');
    const empty = document.querySelector('[data-empty]');
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let cat = 'todos';
    const apply = () => {
      const term = norm(q ? q.value.trim() : '');
      let n = 0;
      items.forEach((it) => {
        const ok = (cat === 'todos' || it.dataset.cat.split(' ').includes(cat)) && (!term || norm(it.textContent).includes(term));
        it.hidden = !ok; if (ok) n++;
      });
      // el destacado solo ocupa todo el ancho cuando se ven todos
      const all = cat === 'todos' && !term;
      items.forEach((it) => { it.classList.toggle('feat', it.dataset.feat === '1' && all); it.classList.toggle('wide', it.dataset.wide === '1' && all); });
      if (count) count.textContent = n === 1 ? '1 proyecto' : `${n} proyectos`;
      if (empty) empty.hidden = n > 0;
    };
    items.forEach((it) => { if (it.classList.contains('feat')) it.dataset.feat = '1'; });
    btns.forEach((b) => b.addEventListener('click', () => {
      cat = b.dataset.f;
      btns.forEach((x) => x.setAttribute('aria-pressed', x === b));
      const u = new URL(location.href);
      cat === 'todos' ? u.searchParams.delete('area') : u.searchParams.set('area', cat);
      history.replaceState(null, '', u);
      apply();
    }));
    q && q.addEventListener('input', apply);
    const r = document.querySelector('[data-reset]');
    r && r.addEventListener('click', () => { if (q) q.value = ''; btns[0].click(); });
    const start = new URL(location.href).searchParams.get('area');
    const sb = start && btns.find((b) => b.dataset.f === start);
    sb ? sb.click() : apply();
  }
}
