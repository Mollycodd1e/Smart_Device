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

    document.addEventListener('keydown', function (evttab) {
      if ((evttab.key === 'Tab') && (modal.classList.contains('modal--opened')) && (document.activeElement === modalCloseButton)) {
        nameInput.focus();
        evttab.preventDefault();
      }
    });

    document.addEventListener('keydown', function (evtshift) {
      if ((evtshift.shiftKey && evtshift.key === 'Tab') && (modal.classList.contains('modal--opened')) && (document.activeElement === nameInput)) {
        modalCloseButton.focus();
        evtshift.preventDefault();
      }
    });
  }
})();
