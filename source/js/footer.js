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
