// ========================================
// Наши материалы — Products Block
// Плавные анимации карточек
// ========================================

(function () {
  'use strict';

  const cards = document.querySelectorAll('.products__card');
  if (!cards.length) return;

  // ─── Scroll entrance via IntersectionObserver ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = parseFloat(card.dataset.delay) || 0;
        setTimeout(() => {
          card.classList.add('products__card--visible');
        }, delay * 1000);
        observer.unobserve(card);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach((card, i) => {
    card.dataset.delay = i * 0.12;
    observer.observe(card);
  });

  // ─── Smooth mouse-tilt effect ───
  cards.forEach((card) => {
    const inner = card.querySelector('.products__card-inner');
    if (!inner) return;

    let ticking = false;

    card.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -3;
          const rotateY = ((x - centerX) / centerX) * 3;
          inner.style.transform =
            `translateY(-6px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = '';
    });
  });

})();
