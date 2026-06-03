// ========================================
// Emotional block — анимация по скроллу
// ========================================

const emotialBlock = document.querySelector('.emotial');

if (emotialBlock) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('emotial--animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.5}
  );

  observer.observe(emotialBlock);
}
