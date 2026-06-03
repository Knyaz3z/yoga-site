(function () {
  'use strict';

  // Hero fade-in
  var hero = document.querySelector('.services-hero');
  if (hero) {
    setTimeout(function () {
      hero.classList.add('services-hero--visible');
    }, 200);
  }

  // Hatha intro scroll animation
  var hathaGrid = document.querySelector('.hatha-intro__grid');
  if (hathaGrid) {
    var hathaObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.parentElement.classList.add('hatha-intro--visible');
            hathaObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    hathaObserver.observe(hathaGrid);
  }

  // Service cards scroll animation
  var serviceCards = document.querySelectorAll('.service-full');
  if (serviceCards.length) {
    var cardObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-full--visible');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    serviceCards.forEach(function (el) {
      cardObserver.observe(el);
    });
  }

  // Benefit items scroll animation
  var benefitItems = document.querySelectorAll('.benefit-item');
  if (benefitItems.length) {
    var benefitObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('benefit-item--visible');
            benefitObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    benefitItems.forEach(function (el) {
      benefitObserver.observe(el);
    });
  }

})();
