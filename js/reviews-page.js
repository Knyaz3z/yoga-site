(function () {
  'use strict';

  // Hero fade-in
  var hero = document.querySelector('.reviews-hero');
  if (hero) {
    setTimeout(function () {
      hero.classList.add('reviews-hero--visible');
    }, 200);
  }

  // Featured review scroll animation
  var featured = document.querySelector('.review-featured-card');
  if (featured) {
    var featObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('review-featured-card--visible');
            featObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    featObserver.observe(featured);
  }

  // Review cards scroll animation
  var reviewCards = document.querySelectorAll('.review-card');
  if (reviewCards.length) {
    var cardObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('review-card--visible');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reviewCards.forEach(function (el) {
      cardObserver.observe(el);
    });
  }

})();
