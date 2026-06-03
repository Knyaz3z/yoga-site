// ========================================
// Библиотека Асан — Tab switching
// ========================================

(function () {
  'use strict';

  const asanas = [
    {
      nameRu: 'Поза горы',
      nameLat: 'Tadasana',
      time: '1-2 мин',
      level: 'для начинающих',
      effect: 'Влияние: Улучшает осанку, укрепляет мышцы бедер и повышает осознание всего тела.',
      photo: 'assets/images/hatha_img_1.jpg',
      steps: [
        'Встаньте прямо, поставив стопы вместе или на ширине таза.',
        'Равномерно распределите вес тела на обе стопы.',
        'Выпрямите ноги и слегка подтяните коленные чашечки вверх.',
        'Вытяните позвоночник, раскройте грудную клетку и опустите плечи.',
        'Опустите руки вдоль тела, направив ладони к бедрам.',
        'Макушкой тянитесь вверх, сохраняя спокойное и ровное дыхание.'
      ]
    },
    {
      nameRu: 'Поза дерева',
      nameLat: 'Vrksasana',
      time: '1-2 мин',
      level: 'для начинающих',
      effect: 'Влияние: Укрепляет ноги и спину, улучшает равновесие и концентрацию.',
      photo: 'assets/images/hatha_img_2.jpg',
      steps: [
        'Встаньте в Тадасану и найдите устойчивое положение.',
        'Перенесите вес тела на левую ногу.',
        'Согните правую ногу и поставьте стопу на внутреннюю сторону левого бедра или голени.',
        'Соедините ладони перед грудью в жесте намасте..',
        'Сохраняя равновесие, поднимите руки вверх над головой.',
        'Зафиксируйте взгляд в одной точке и дышите ровно.'
      ]
    },
    {
      nameRu: 'Собака мордой вниз',
      nameLat: 'Adho Mukha Svanasana',
      time: '1-3 мин',
      level: 'для начинающих',
      effect: 'Влияние: Растягивает спину и заднюю поверхность ног, укрепляет руки и плечи.',
      photo: 'assets/images/hatha_img_3.jpg',
      steps: [
        'Встаньте на четвереньки, расположив ладони под плечами, а колени под тазом.',
        'Расставьте пальцы рук широко и плотно прижмите ладони к полу.',
        'Подожмите пальцы ног и приподнимите колени от пола.',
        'Поднимите таз вверх, выпрямляя ноги настолько, насколько позволяет гибкость.',
        'Подтяните ягодицы и нижнюю треть живота. ',
        'Вытяните спину в одну линию, направляя макушку в точку между ладоней. Лопатки направлены к бедрам.',
        'Расслабьте шею и удерживайте позу с ровным дыханием.'
      ]
    },
    {
      nameRu: 'Поза воина II',
      nameLat: 'Virabhadrasana II',
      time: '1-2 мин',
      level: 'для начинающих',
      effect: 'Влияние: Укрепляет ноги, раскрывает тазобедренные суставы, развивает выносливость.',
      photo: 'assets/images/hatha_img_4.jpg',
      steps: [
        'Встаньте прямо и расставьте ноги широко в стороны.',
        'Разверните правую стопу наружу на 90 градусов, левую слегка внутрь.',
        'Согните правое колено так, чтобы оно оказалось над лодыжкой.',
        'Вытяните руки в стороны на уровне плеч ладонями вниз.',
        'Положение таза открытое. \n' +
        'Руки и плечи на одной линии. ',
        'Направьте взгляд поверх правой руки.\n' +
        'Сохраняйте устойчивое положение и ровное дыхание.'
      ]
    },
    {
      nameRu: 'Поза ребенка',
      nameLat: 'Balasana',
      time: '1-3 мин',
      level: 'для начинающих',
      effect: 'Влияние: Успокаивает ум, мягко растягивает бедра и спину, снимает напряжение.',
      photo: 'assets/images/gallery/gallery_1.jpg',
      steps: [
        'Встаньте на колени и сядьте тазом на пятки.',
        'Соедините большие пальцы ног и слегка разведите колени.',
        'Наклоните корпус вперед и опустите живот на бедра.',
        'Опустите лоб на пол или на опору перед собой.',
        'Вытяните руки вперед либо расположите их вдоль тела.',
        'Расслабьте все тело и дышите медленно и спокойно.'
      ]
    }
  ];

  const tabs = document.querySelectorAll('.asan-library__tab');
  const photo = document.getElementById('asanPhoto');
  const nameRu = document.getElementById('asanNameRu');
  const nameLat = document.getElementById('asanNameLat');
  const time = document.getElementById('asanTime');
  const level = document.getElementById('asanLevel');
  const effect = document.getElementById('asanEffect');
  const steps = document.getElementById('asanSteps');
  const prevBtn = document.getElementById('asanPrev');
  const nextBtn = document.getElementById('asanNext');

  let current = 0;

  function render(index) {
    const a = asanas[index];
    photo.src = a.photo;
    photo.alt = a.nameRu;
    nameRu.textContent = a.nameRu;
    nameLat.textContent = a.nameLat;
    time.textContent = a.time;
    level.textContent = a.level;
    effect.textContent = a.effect;
    steps.innerHTML = a.steps.map((s, i) =>
      `<li class="asan-library__step">
        <span class="asan-library__step-num">${i + 1}</span>
        <span class="asan-library__step-text">${s}</span>
      </li>`
    ).join('');

    tabs.forEach(t => t.classList.remove('asan-library__tab--active'));
    tabs[index].classList.add('asan-library__tab--active');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === asanas.length - 1;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      current = parseInt(tab.dataset.asan, 10);
      render(current);
    });
  });

  prevBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      render(current);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (current < asanas.length - 1) {
      current++;
      render(current);
    }
  });

  render(0);
})();
