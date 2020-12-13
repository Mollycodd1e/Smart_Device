'use strict';

(function () {
  var mobileContactList = document.querySelector('.main-footer__contacts-wrapper');

  if (document.querySelector('.main-footer__contacts-wrapper')) {
    var mobileContactHeader = mobileContactList.querySelector('h3');
    var mobileSectionList = document.querySelector('.main-footer__sections-wrapper');

    mobileContactList.classList.remove('main-footer__contacts-wrapper--nojs');

    mobileContactHeader.addEventListener('click', function () {
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
