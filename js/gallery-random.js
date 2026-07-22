(function () {
  var TOTAL = 97;
  var ROWS = 3;
  var w = window.innerWidth;
  var cols = w > 1024 ? 7 : w > 768 ? 5 : 3;
  var COUNT = cols * ROWS;
  var container = document.getElementById('home-gallery');
  if (!container) return;

  var indices = [];
  for (var i = 1; i <= TOTAL; i++) indices.push(i);

  for (var i = indices.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }

  var selected = indices.slice(0, COUNT);
  var fragment = document.createDocumentFragment();

  for (var k = 0; k < selected.length; k++) {
    var img = document.createElement('img');
    img.src = 'assets/images/gallery/gallery_' + selected[k] + '.jpg';
    img.alt = 'Фото студии хатха-йоги Padma Aksaya';
    img.className = 'gallery__img';
    img.loading = 'lazy';
    fragment.appendChild(img);
  }

  container.appendChild(fragment);
})();
