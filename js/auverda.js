// ========================================
// Аюрведа — переключение дошей
// ========================================

const doshaData = {
  vata: {
    title: 'Вата',
    desc: 'Воздух и Эфир',
    qualities: 'Легкость, сухость, холод, подвижность, тонкость',
    physical: 'Худое телосложение, сухая кожа, нестабильное пищеварение, холодные руки и ноги',
    mental: 'Творческий, энергичный, быстро соображающий, иногда тревожный',
    balance: 'Теплые, успокаивающие и питательные практики. Отдавайте предпочтение медленной, размеренной йоге, такой как восстановительная и инь-йога. Установите регулярный распорядок дня и питайтесь теплой, приготовленной пищей.',
    widths: [152, 84, 183]
  },
  pitta: {
    title: 'Питта',
    desc: 'Огонь и Вода',
    qualities: 'Горячий, острый, маслянистый, легкий, проникающий',
    physical: 'Среднее телосложение, теплая кожа, хорошее пищеварение, склонность к воспалениям',
    mental: 'Целеустремленный, амбициозный, интеллектуальный, раздражительный при дисбалансе',
    balance: 'Охлаждающие и успокаивающие практики. Выбирайте прохладные, увлажняющие виды йоги, такие как инь-йога или шивананда. Избегайте перегрева и интенсивных тренировок. Отдавайте предпочтение свежей, охлаждающей пище и проводите больше времени на природе.',
    widths: [175, 120, 90]
  },
  kapha: {
    title: 'Капха',
    desc: 'Земля и Вода',
    qualities: 'Тяжелый, медленный, холодный, маслянистый, стабильный',
    physical: 'Крупное телосложение, гладкая кожа, крепкий иммунитет, склонность к набору веса',
    mental: 'Спокойный, заботливый, терпеливый, привязанный к рутине, иногда апатичный',
    balance: 'Стимулирующие и активизирующие практики. Занимайтесь энергичными видами йоги, такими как аштанга или виньяса. Отдавайте предпочтение легкой, сухой и теплой пище. Избегайте тяжелой и маслянистой пищи. Поддерживайте активный образ жизни.',
    widths: [80, 160, 140]
  }
};

const auverdaButtons = document.querySelectorAll('.auverda__button');
const storyHeader = document.querySelector('.story-header');
const storyHeaderDesc = document.querySelector('.story-header-desc');
const storyDescs = document.querySelectorAll('.story__item-desc');
const chartsDesc = document.querySelector('.charts__desc');
const chartsChars = document.querySelectorAll('.charts__char');

function setDosha(doshaKey) {
  const data = doshaData[doshaKey];
  if (!data) return;

  auverdaButtons.forEach(btn => {
    btn.classList.toggle('is-button-active', btn.dataset.dosha === doshaKey);
  });

  [storyHeader, storyHeaderDesc, chartsDesc].forEach(el => el.style.opacity = '0');
  storyDescs.forEach(el => el.style.opacity = '0');

  setTimeout(() => {
    storyHeader.textContent = data.title;
    storyHeaderDesc.textContent = data.desc;
    storyDescs[0].textContent = data.qualities;
    storyDescs[1].textContent = data.physical;
    storyDescs[2].textContent = data.mental;
    chartsDesc.textContent = data.balance;

    [storyHeader, storyHeaderDesc, chartsDesc].forEach(el => el.style.opacity = '1');
    storyDescs.forEach(el => el.style.opacity = '1');
  }, 200);

  chartsChars.forEach(chart => {
    chart.classList.toggle('active', chart.dataset.dosha === doshaKey);
  });

  chartsChars.forEach(chart => {
    chart.querySelectorAll('.charts-stroke-move').forEach(s => s.style.width = '');
  });

  requestAnimationFrame(() => {
    const activeChart = document.querySelector('.charts__char.active');
    if (activeChart) {
      const strokes = activeChart.querySelectorAll('.charts-stroke-move');
      const chartDosha = activeChart.dataset.dosha;
      const w = doshaData[chartDosha]?.widths;
      if (w) {
        strokes.forEach((stroke, i) => {
          if (w[i] !== undefined) {
            stroke.style.width = w[i] + 'px';
          }
        });
      }
    }
  });
}

auverdaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setDosha(btn.dataset.dosha);
  });
});

requestAnimationFrame(() => {
  const activeChart = document.querySelector('.charts__char.active');
  if (activeChart) {
    const strokes = activeChart.querySelectorAll('.charts-stroke-move');
    const w = doshaData[activeChart.dataset.dosha]?.widths;
    if (w) {
      strokes.forEach((stroke, i) => {
        if (w[i] !== undefined) stroke.style.width = w[i] + 'px';
      });
    }
  }
});
