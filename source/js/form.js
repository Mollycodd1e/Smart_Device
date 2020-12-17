'use strict';

(function () {
  var form = document.querySelector('.form');

  if (form) {
    var formPhoneInput = form.querySelector('.form__phone-wrapper input');

    var maskOptions = {
      mask: '+{7}(000)000-00-00',
    };

    new IMask(formPhoneInput, maskOptions);

    window.utils.onInputFocusDisplay(formPhoneInput);
    window.utils.onInputBlurDisplay(formPhoneInput);
  }
})();
