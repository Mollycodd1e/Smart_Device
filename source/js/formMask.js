'use strict';

(function () {
  var form = document.querySelector('.form');
  var modalForm = document.querySelector('.modal');

  if ((document.querySelector('.form')) || (document.querySelector('.modal'))) {

    var phoneNumberInput = form.querySelector('.form__phone-wrapper input');
    var phoneModalInput = modalForm.querySelector('.modal__phone-wrapper input');

    var formTelefonMask = function (formInput) {
      formInput.addEventListener('focus', function () {
        if (formInput.value === '') {
          formInput.value = '+7(';
        }
      });

      formInput.addEventListener('input', function () {
        if (formInput.value.length === 6) {
          formInput.value += ')';
        }
        if (formInput.value.length === 10) {
          formInput.value += '-';
        }
        if (formInput.value.length === 13) {
          formInput.value += '-';
        }
      });

      formInput.addEventListener('blur', function () {
        if ((formInput.value === '+7(') || (formInput.value === '')) {
          formInput.value = '';
        }
      });
    };

    formTelefonMask(phoneNumberInput);
    formTelefonMask(phoneModalInput);
  }
})();
