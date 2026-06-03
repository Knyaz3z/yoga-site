/**
 * Padma Aksaya — Lotus Animation Controller
 * Запускает анимацию при появлении секции в viewport (IntersectionObserver)
 */

(function () {
  'use strict';

  const section = document.getElementById('padma-section');
  const lotusWrap = document.getElementById('padma-lotus');
  const studioName = document.getElementById('padma-studio-name');
  const svg = document.getElementById('lotus-svg');

  let hasPlayed = false;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate({
                     el,
                     prop,
                     from,
                     to,
                     duration,
                     delay = 0,
                     easeFn = easeOutCubic,
                     unit = '',
                     onComplete
                   }) {
    setTimeout(() => {
      const start = performance.now();

      function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = from + (to - from) * easeFn(progress);
        el.style[prop] = value + unit;
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          el.style[prop] = to + unit;
          if (onComplete) onComplete();
        }
      }

      requestAnimationFrame(frame);
    }, delay);
  }

  function fadeIn({
                    el,
                    duration,
                    delay = 0,
                    fromX = 0,
                    toX = 0,
                    fromY = 0,
                    toY = 0,
                    easeFn = easeOutCubic
                  }) {
    el.style.opacity = '0';
    el.style.transform = `translate(${fromX}px, ${fromY}px)`;
    setTimeout(() => {
      const start = performance.now();

      function frame(now) {
        const t = Math.min((now - start) / duration, 1);
        const e = easeFn(t);
        el.style.opacity = e;
        const cx = fromX + (toX - fromX) * e;
        const cy = fromY + (toY - fromY) * e;
        el.style.transform = `translate(${cx}px, ${cy}px)`;
        if (t < 1) requestAnimationFrame(frame);
        else {
          el.style.opacity = '1';
          el.style.transform = `translate(${toX}px, ${toY}px)`;
        }
      }

      requestAnimationFrame(frame);
    }, delay);
  }

  function svgFade(el, toOpacity, duration, delay = 0, easeFn = easeOutCubic) {
    if (!el) return;
    const from = parseFloat(el.getAttribute('opacity') || '0');
    const to = toOpacity;
    setTimeout(() => {
      const start = performance.now();

      function frame(now) {
        const t = Math.min((now - start) / duration, 1);
        el.setAttribute('opacity', from + (to - from) * easeFn(t));
        if (t < 1) requestAnimationFrame(frame);
        else el.setAttribute('opacity', to);
      }

      requestAnimationFrame(frame);
    }, delay);
  }

  function bloomPetal(el, duration, delay) {
    if (!el) return;
    setTimeout(() => {
      el.setAttribute('opacity', '0');
      el.style.transformOrigin = el.getAttribute('transform-origin') || '200px 240px';
      el.style.transform = 'scale(0.1) rotate(-15deg)';
      const start = performance.now();

      function frame(now) {
        const t = Math.min((now - start) / duration, 1);
        const e = easeOutCubic(t);
        const scale = 0.1 + 0.9 * e;
        const deg = -15 + 15 * e;
        el.setAttribute('opacity', e);
        el.style.transform = `scale(${scale}) rotate(${deg}deg)`;
        if (t < 1) requestAnimationFrame(frame);
        else {
          el.setAttribute('opacity', '1');
          el.style.transform = 'scale(1) rotate(0deg)';
        }
      }

      requestAnimationFrame(frame);
    }, delay);
  }

  function expandDivider(el, delay) {
    setTimeout(() => {
      el.style.width = '80%';
    }, delay);
  }

  function runAnimation() {
    if (hasPlayed) return;
    hasPlayed = true;

    section.classList.add('is-visible');

    const glow = svg.querySelector('.lotus-glow');
    const stem = svg.querySelector('.lotus-stem');
    const leafL = svg.querySelector('.lotus-leaf-left');
    const leafR = svg.querySelector('.lotus-leaf-right');
    const waterRing = svg.querySelector('.water-ring');
    const waterRing2 = svg.querySelector('.water-ring-2');
    const waterRing3 = svg.querySelector('.water-ring-3');
    const center = svg.querySelector('.lotus-center');
    const centerInner = svg.querySelector('.lotus-center-inner');
    const stamens = svg.querySelector('.stamens');
    const petalsL3 = [...svg.querySelectorAll('.petal.l3')];
    const petalsL2 = [...svg.querySelectorAll('.petal.l2')];
    const petalsL1 = [...svg.querySelectorAll('.petal.l1')];
    const panels = [...section.querySelectorAll('.padma-panel')];
    const dividers = [...section.querySelectorAll('.padma-divider')];

    svgFade(waterRing, 0.35, 800, 0);
    svgFade(waterRing2, 0.2, 900, 100);
    svgFade(waterRing3, 0.12, 1000, 200);

    svgFade(stem, 0.7, 700, 300);
    svgFade(leafL, 0.6, 700, 450);
    svgFade(leafR, 0.6, 700, 500);

    svgFade(glow, 1, 1200, 500, easeInOutCubic);

    petalsL3.forEach((p, i) => bloomPetal(p, 900, 600 + i * 120));
    petalsL2.forEach((p, i) => bloomPetal(p, 950, 1000 + i * 100));
    petalsL1.forEach((p, i) => bloomPetal(p, 1000, 1380 + i * 90));

    svgFade(center, 1, 700, 1900, easeOutCubic);
    svgFade(centerInner, 1, 500, 2200, easeOutCubic);
    svgFade(stamens, 1, 600, 2400, easeOutCubic);

    setTimeout(() => {
      lotusWrap.classList.add('lotus-animated');
    }, 2600);

    panels.forEach(panel => {
      const delay = parseInt(panel.dataset.delay || '1000', 10);
      const isLeft = panel.classList.contains('padma-panel--left');
      fadeIn({
        el: panel,
        duration: 1100,
        delay,
        fromX: isLeft ? -40 : 40,
        toX: 0,
        easeFn: easeOutCubic,
      });
    });

    dividers.forEach((d, i) => expandDivider(d, 1600 + i * 200));

    fadeIn({
      el: studioName,
      duration: 1200,
      delay: 2200,
      fromY: 20,
      toY: 0,
      easeFn: easeInOutCubic,
    });

    const mainDivider = studioName.querySelector('.padma-divider');
    if (mainDivider) expandDivider(mainDivider, 2800);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          runAnimation();
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.25}
  );

  if (section) {
    observer.observe(section);
  }

})();
