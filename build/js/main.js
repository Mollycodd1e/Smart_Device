'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (document.querySelector('.modal')) {
    var navigation = document.querySelector('.main-nav');
    var modalOpenButton = navigation.querySelector('.main-nav__call-button');
    var modalCloseButton = modal.querySelector('.modal__close-wrapper button');
    var nameInput = modal.querySelector('.modal__name-wrapper input');
    var blackLayer = document.querySelector('.black-layer');

    var closeModalOnEsc = function (evtBoard) {
      if ((evtBoard.key === 'Escape') && (modal.classList.contains('modal--opened'))) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    };

    blackLayer.addEventListener('click', function () {
      nameInput.blur();
      modal.classList.remove('modal--opened');
      modal.classList.add('modal--closed');
      blackLayer.style = 'display: none;';
    });

    modalOpenButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        nameInput.focus();
        blackLayer.style = 'display: block;';
      }
    });

    modalCloseButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
        blackLayer.style = 'display: none;';
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
