'use strict';

(function () {
  var form = document.querySelector('.form');

  if (document.querySelector('.form')) {
    var phoneNumberInput = form.querySelector('.form__phone-wrapper input');

    phoneNumberInput.addEventListener('focus', function () {
      if (phoneNumberInput.value === '') {
        phoneNumberInput.value = '+7(';
      }
    });

    phoneNumberInput.addEventListener('input', function () {
      if (phoneNumberInput.value.length === 6) {
        phoneNumberInput.value += ')';
      }
      if (phoneNumberInput.value.length === 10) {
        phoneNumberInput.value += '-';
      }
      if (phoneNumberInput.value.length === 13) {
        phoneNumberInput.value += '-';
      }
    });

    phoneNumberInput.addEventListener('blur', function () {
      if ((phoneNumberInput.value === '+7(') || (phoneNumberInput.value === '')) {
        phoneNumberInput.value = '';
      }
    });
  }
})();
