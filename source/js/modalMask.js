'use strict';

(function () {
  var modalForm = document.querySelector('.modal');

  if (document.querySelector('.form')) {
    var phoneModalInput = modalForm.querySelector('.modal__phone-wrapper input');

    phoneModalInput.addEventListener('focus', function () {
      if (phoneModalInput.value === '') {
        phoneModalInput.value = '+7(';
      }
    });

    phoneModalInput.addEventListener('input', function () {
      if (phoneModalInput.value.length === 6) {
        phoneModalInput.value += ')';
      }
      if (phoneModalInput.value.length === 10) {
        phoneModalInput.value += '-';
      }
      if (phoneModalInput.value.length === 13) {
        phoneModalInput.value += '-';
      }
    });

    phoneModalInput.addEventListener('blur', function () {
      if ((phoneModalInput.value === '+7(') || (phoneModalInput.value === '')) {
        phoneModalInput.value = '';
      }
    });
  }
})();
