(function () {
  'use strict';

  /* ---------- validation rules ---------- */

  var rules = {
    name: {
      test: function (val) {
        return val.trim().length >= 2 && /^[а-яёa-z\s-]+$/i.test(val.trim());
      },
      msg: 'Введите имя (минимум 2 буквы)'
    },
    phone: {
      test: function (val) {
        var digits = getRawDigits(val);
        if (digits[0] === '7' || digits[0] === '8') digits = digits.slice(1);
        return digits.length === 10;
      },
      msg: 'Введите корректный номер телефона'
    },
    email: {
      test: function (val) {
        if (!val.trim()) return true;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
      },
      msg: 'Введите корректный email'
    }
  };

  /* ---------- helpers ---------- */

  function getRawDigits(val) {
    return val.replace(/\D/g, '');
  }

  function detectRule(input) {
    var p = (input.placeholder || '').toLowerCase();
    if (/имя|name/i.test(p)) return 'name';
    if (/телефон|тел|phone/i.test(p)) return 'phone';
    if (/email|почт/i.test(p)) return 'email';
    return null;
  }

  function getErrorContainer(input) {
    var parent = input.parentNode;
    var err = parent.querySelector('.form-field-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form-field-error';
      parent.appendChild(err);
    }
    return err;
  }

  function validateField(input) {
    var ruleName = detectRule(input);
    if (!ruleName) return true;

    var rule = rules[ruleName];
    var valid = rule.test(input.value);
    var errEl = getErrorContainer(input);

    if (!valid) {
      errEl.textContent = rule.msg;
      input.classList.add('form-input--invalid');
    } else {
      errEl.textContent = '';
      input.classList.remove('form-input--invalid');
    }

    return valid;
  }

  /* ---------- phone mask ---------- */

  function applyPhoneMask(input) {
    var start = input.selectionStart;
    var rawBefore = getRawDigits(input.value.slice(0, start)).length;

    var digits = getRawDigits(input.value);
    if (digits.length === 0) { input.value = ''; return; }
    if (digits[0] === '7' || digits[0] === '8') digits = digits.slice(1);
    digits = digits.slice(0, 10);

    var formatted = '+7';
    var positions = [];
    var pos = 3;
    formatted += ' (';
    pos += 2;

    for (var i = 0; i < digits.length; i++) {
      if (i === 3) { formatted += ') '; pos += 2; }
      if (i === 6 || i === 8) { formatted += '-'; pos += 1; }
      formatted += digits[i];
      positions.push(pos);
      pos++;
    }

    input.value = formatted;

    var cursor = rawBefore === 0 ? 3 : positions[rawBefore - 1];
    if (cursor == null) cursor = formatted.length;
    input.setSelectionRange(cursor, cursor);
  }

  /* ---------- events ---------- */

  document.addEventListener('input', function (e) {
    var input = e.target;

    if (detectRule(input) === 'phone') {
      applyPhoneMask(input);
    }

    if (input.classList.contains('form-input--invalid')) {
      validateField(input);
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (form.tagName !== 'FORM') return;

    var inputs = form.querySelectorAll('input, textarea');
    var allValid = true;

    inputs.forEach(function (input) {
      if (!validateField(input)) allValid = false;
    });

    if (!allValid) e.preventDefault();
  });

})();
