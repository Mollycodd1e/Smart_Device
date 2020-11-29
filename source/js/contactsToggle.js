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
