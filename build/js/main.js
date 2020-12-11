'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (document.querySelector('.modal')) {
    var navigation = document.querySelector('.main-nav');
    var modalOpenButton = navigation.querySelector('.main-nav__call-button');
    var modalCloseButton = modal.querySelector('.modal__close-wrapper button');
    var nameInput = modal.querySelector('.modal__name-wrapper input');
    var blackLayer = document.querySelector('.black-layer');
    var bod = document.querySelector('body');

    var closeModalOnEsc = function (evtBoard) {
      if ((evtBoard.key === 'Escape') && (modal.classList.contains('modal--opened'))) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
        bod.classList.remove('scroll-hidden');
      }
    };

    blackLayer.addEventListener('click', function () {
      nameInput.blur();
      modal.classList.remove('modal--opened');
      modal.classList.add('modal--closed');
      bod.classList.remove('scroll-hidden');
    });

    modalOpenButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        bod.classList.add('scroll-hidden');
        nameInput.focus();
      }
    });

    modalCloseButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
        bod.classList.remove('scroll-hidden');
      }
    });

    document.addEventListener('keydown', closeModalOnEsc);
  }
})();

'use strict';

(function () {
  var contactList = document.querySelector('.main-footer__contacts-wrapper');

  if (document.querySelector('.main-footer__contacts-wrapper')) {
    var sectionList = document.querySelector('.main-footer__sections-wrapper');
    var contactToggle = contactList.querySelector('.main-footer__toggle--contacts');

    contactToggle.addEventListener('click', function () {
      if (contactList.classList.contains('main-footer__contacts-wrapper--close')) {
        contactList.classList.remove('main-footer__contacts-wrapper--close');
        contactList.classList.add('main-footer__contacts-wrapper--open');

        if (sectionList.classList.contains('main-footer__sections-wrapper--open')) {
          sectionList.classList.remove('main-footer__sections-wrapper--open');
          sectionList.classList.add('main-footer__sections-wrapper--close');
        }
      } else {
        contactList.classList.remove('main-footer__contacts-wrapper--open');
        contactList.classList.add('main-footer__contacts-wrapper--close');
      }
    });
  }
})();

'use strict';

(function () {
  var form = document.querySelector('.form');
  var modalForm = document.querySelector('.modal');

  if ((document.querySelector('.form')) || (document.querySelector('.modal'))) {

    var formPhoneInput = form.querySelector('.form__phone-wrapper input');
    var modalPhoneInput = modalForm.querySelector('.modal__phone-wrapper input');

    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    var mask = new IMask(formPhoneInput, maskOptions);
    var mask = new IMask(modalPhoneInput, maskOptions);

    var focusInput = function (input) {
      input.addEventListener('focus', function () {
        if (input.value === '') {
          input.value = '+7(';
        }
      });
    };

    var blurInput = function (phoneInput) {
      phoneInput.addEventListener('blur', function () {
        if ((phoneInput.value === '+7(') || (phoneInput.value === '')) {
          phoneInput.value = '';
        }
      });
    };

    focusInput(formPhoneInput);
    focusInput(modalPhoneInput);
    blurInput(formPhoneInput);
    blurInput(modalPhoneInput);
  }
})();

'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (document.querySelector('.modal')) {

    var nameInputValue = modal.querySelector('.modal__name-wrapper input');
    var phoneInputValue = modal.querySelector('.modal__phone-wrapper input');
    var questionInputValue = modal.querySelector('.modal__textarea-wrapper textarea');

    modal.addEventListener('submit', function () {
      localStorage.setItem('Name', nameInputValue.value);
      localStorage.setItem('Phone', phoneInputValue.value);
      localStorage.setItem('Question', questionInputValue.value);
    });
  }
})();

'use strict';

(function () {
  var mobileContactList = document.querySelector('.main-footer__contacts-wrapper');

  if (document.querySelector('.main-footer__contacts-wrapper')) {
    var mobileSectionList = document.querySelector('.main-footer__sections-wrapper');

    mobileContactList.addEventListener('click', function () {
      if (mobileContactList.classList.contains('main-footer__contacts-wrapper--close')) {
        mobileContactList.classList.remove('main-footer__contacts-wrapper--close');
        mobileContactList.classList.add('main-footer__contacts-wrapper--open');

        if (mobileSectionList.classList.contains('main-footer__sections-wrapper--open')) {
          mobileSectionList.classList.remove('main-footer__sections-wrapper--open');
          mobileSectionList.classList.add('main-footer__sections-wrapper--close');
        }
      } else {
        mobileContactList.classList.remove('main-footer__contacts-wrapper--open');
        mobileContactList.classList.add('main-footer__contacts-wrapper--close');
      }
    });
  }
})();

'use strict';

(function () {
  var sectionList = document.querySelector('.main-footer__sections-wrapper');

  if (document.querySelector('.main-footer__sections-wrapper')) {
    var sectionToggle = sectionList.querySelector('.main-footer__toggle--section');
    var contactList = document.querySelector('.main-footer__contacts-wrapper');

    sectionToggle.addEventListener('click', function () {
      if (sectionList.classList.contains('main-footer__sections-wrapper--close')) {
        sectionList.classList.remove('main-footer__sections-wrapper--close');
        sectionList.classList.add('main-footer__sections-wrapper--open');

        if (contactList.classList.contains('main-footer__contacts-wrapper--open')) {
          contactList.classList.remove('main-footer__contacts-wrapper--open');
          contactList.classList.add('main-footer__contacts-wrapper--close');
        }
      } else {
        sectionList.classList.remove('main-footer__sections-wrapper--open');
        sectionList.classList.add('main-footer__sections-wrapper--close');
      }
    });
  }
})();
