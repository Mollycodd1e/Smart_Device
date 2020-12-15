'use strict';

(function () {
  var modalWindow = document.querySelector('.modal');

  if (modalWindow) {

    var nameInputValue = modalWindow.querySelector('.modal__name-wrapper input');
    var phoneInputValue = modalWindow.querySelector('.modal__phone-wrapper input');
    var questionInputValue = modalWindow.querySelector('.modal__textarea-wrapper textarea');

    modalWindow.addEventListener('submit', function () {
      localStorage.setItem('Name', nameInputValue.value);
      localStorage.setItem('Phone', phoneInputValue.value);
      localStorage.setItem('Question', questionInputValue.value);
    });

    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    new IMask(phoneInputValue, maskOptions);

    window.utils.onInputFocusDisplay(phoneInputValue);
    window.utils.onInputBlurDisplay(phoneInputValue);
  }
})();
