'use strict';

(function () {
  var contactList = document.querySelector('.main-footer__contacts-wrapper');
  var sectionList = document.querySelector('.main-footer__sections-wrapper');

  if ((contactList) || (sectionList)) {

    var contact = 'contacts-wrapper';
    var section = 'sections-wrapper';

    var contactToggle = contactList.querySelector('.main-footer__toggle--contacts');
    var mobileContactHeader = contactList.querySelector('h3');
    var mobileSectionHeader = sectionList.querySelector('h3');
    var sectionToggle = sectionList.querySelector('.main-footer__toggle--section');

    contactList.classList.remove('main-footer__contacts-wrapper--nojs');
    sectionList.classList.remove('main-footer__sections-wrapper--nojs');

    var openToggle = function (button, list, secondList, wrapper, secondWrapper) {
      button.addEventListener('click', function () {
        if (list.classList.contains('main-footer__' + wrapper + '--close')) {
          list.classList.remove('main-footer__' + wrapper + '--close');
          list.classList.add('main-footer__' + wrapper + '--open');

          if (secondList.classList.contains('main-footer__' + secondWrapper + '--open')) {
            secondList.classList.remove('main-footer__' + secondWrapper + '--open');
            secondList.classList.add('main-footer__' + secondWrapper + '--close');
          }
        } else {
          list.classList.remove('main-footer__' + wrapper + '--open');
          list.classList.add('main-footer__' + wrapper + '--close');
        }
      });
    };

    openToggle(contactToggle, contactList, sectionList, contact, section);
    openToggle(mobileContactHeader, contactList, sectionList, contact, section);
    openToggle(sectionToggle, sectionList, contactList, section, contact);
    openToggle(mobileSectionHeader, sectionList, contactList, section, contact);
  }
})();

'use strict';

(function () {
  var form = document.querySelector('.form');

  if (form) {
    var formPhoneInput = form.querySelector('.form__phone-wrapper input');

    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    new IMask(formPhoneInput, maskOptions);

    window.utils.onInputFocusDisplay(formPhoneInput);
    window.utils.onInputBlurDisplay(formPhoneInput);
  }
})();

'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (modal) {
    var navigation = document.querySelector('.main-nav');
    var modalOpenButton = navigation.querySelector('.main-nav__call-button');
    var modalCloseButton = modal.querySelector('.modal__close-wrapper button');
    var nameInput = modal.querySelector('.modal__name-wrapper input');
    var blackLayer = document.querySelector('.black-layer');
    var bodyPage = document.querySelector('body');

    var closeModalOnEsc = function (evtBoard) {
      if ((evtBoard.key === 'Escape') && (modal.classList.contains('modal--opened'))) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
        bodyPage.classList.remove('scroll-hidden');
      }
    };

    blackLayer.addEventListener('click', function () {
      nameInput.blur();
      modal.classList.remove('modal--opened');
      modal.classList.add('modal--closed');
      bodyPage.classList.remove('scroll-hidden');
    });

    modalOpenButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        bodyPage.classList.add('scroll-hidden');
        nameInput.focus();
      }
    });

    modalCloseButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
        bodyPage.classList.remove('scroll-hidden');
      }
    });

    document.addEventListener('keydown', closeModalOnEsc);
  }
})();

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
