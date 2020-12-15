'use strict';

(function () {
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

 window.utils = {
    onInputFocusDisplay : onInputFocusDisplay,
    onInputBlurDisplay : onInputBlurDisplay
  };
})();
