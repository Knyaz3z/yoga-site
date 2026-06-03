// ========================================
// Gallery Page — scroll animations
// ========================================

(function () {
  const sections = document.querySelectorAll('.gallery-section');
  const hero = document.querySelector('.gallery-hero');

  // Entrance observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gallery-section--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((s) => observer.observe(s));

  // Hero fade-in on load
  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add('gallery-hero--visible');
    });
  }

  // CTA button
  const ctaBtn = document.querySelector('.gallery-cta .btn-primary');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const form = document.querySelector('.form-block');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
})();
