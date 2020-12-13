'use strict';

(function () {
  var mobileSectionList = document.querySelector('.main-footer__sections-wrapper');

  if (document.querySelector('.main-footer__contacts-wrapper')) {
    var mobileSectionHeader = mobileSectionList.querySelector('h3');
    var mobileContactList = document.querySelector('.main-footer__contacts-wrapper');

    mobileSectionList.classList.remove('main-footer__sections-wrapper--nojs');

    mobileSectionHeader.addEventListener('click', function () {
      if (mobileSectionList.classList.contains('main-footer__sections-wrapper--close')) {
        mobileSectionList.classList.remove('main-footer__sections-wrapper--close');
        mobileSectionList.classList.add('main-footer__sections-wrapper--open');

        if (mobileContactList.classList.contains('main-footer__contacts-wrapper--open')) {
          mobileContactList.classList.remove('main-footer__contacts-wrapper--open');
          mobileContactList.classList.add('main-footer__contacts-wrapper--close');
        }
      } else {
        mobileSectionList.classList.remove('main-footer__sections-wrapper--open');
        mobileSectionList.classList.add('main-footer__sections-wrapper--close');
      }
    });
  }
})();
