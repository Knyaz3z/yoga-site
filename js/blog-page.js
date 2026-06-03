// ========================================
// Blog Page — scroll animations
// ========================================

(function () {
  const cards = document.querySelectorAll('.blog-card');
  const hero = document.querySelector('.blog-hero');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('blog-card--visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((c) => observer.observe(c));

  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add('blog-hero--visible');
    });
  }
})();
