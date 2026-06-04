// ========================================
// Студия Йоги — Main Entry Point
// Загружает модули после готовности DOM
// ========================================

const scripts = [
  '/js/menu.js',
  '/js/emotional.js',
  '/js/about.js',
  '/js/gallery.js',
  '/js/faq.js',
  '/js/auverda.js',
  '/js/padma-aksaya.js',
  '/js/asan-library.js',
  '/js/products.js',
  '/js/scroll-top.js',
  '/js/forms-validation.js',
  '/js/modal.js'
];

scripts.forEach(src => {
  const s = document.createElement('script');
  s.src = src;
  s.async = false; // ТЕПЕРЬ это работает! Скрипты скачаются параллельно, но выполнятся строго по очереди.
  document.head.appendChild(s);
});

