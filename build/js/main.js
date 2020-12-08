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
    });

    modalOpenButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--closed')) {
        modal.classList.remove('modal--closed');
        modal.classList.add('modal--opened');
        nameInput.focus();
      }
    });

    modalCloseButton.addEventListener('click', function () {
      if (modal.classList.contains('modal--opened')) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
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
