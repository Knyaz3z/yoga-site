// ========================================
// FAQ accordion
// ========================================

(function () {
  'use strict';

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((el) => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();
