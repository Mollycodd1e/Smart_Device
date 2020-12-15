'use strict';

(function () {
  var form = document.querySelector('.form');
  var modalForm = document.querySelector('.modal');

  if ((form) || (modalForm)) {

    var formPhoneInput = form.querySelector('.form__phone-wrapper input');
    var modalPhoneInput = modalForm.querySelector('.modal__phone-wrapper input');

    //  var maskOptions = {
    //    mask: '+{7}(000)000-00-00'
    //  };

    //  var mask = new IMask(formPhoneInput, maskOptions);
    //  var mask = new IMask(modalPhoneInput, maskOptions);

    var onInputFocusDisplay = function (input) {
      input.addEventListener('focus', function () {
        if (input.value === '') {
          input.value = '+7(';
        }
      });
    };

    var onInputBlurDisplay = function (phoneInput) {
      phoneInput.addEventListener('blur', function () {
        if ((phoneInput.value === '+7(') || (phoneInput.value === '')) {
          phoneInput.value = '';
        }
      });
    };

    onInputFocusDisplay(formPhoneInput);
    onInputFocusDisplay(modalPhoneInput);
    onInputBlurDisplay(formPhoneInput);
    onInputBlurDisplay(modalPhoneInput);
  }
})();
