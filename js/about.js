// ========================================
// About block — анимация по скроллу
// ========================================

const aboutBlock = document.querySelector('.about');

if (aboutBlock) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about--animated');
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.2}
  );

  aboutObserver.observe(aboutBlock);
}
