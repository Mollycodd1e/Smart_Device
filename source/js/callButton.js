'use strict';

(function () {
  var modal = document.querySelector('.modal');

  if (document.querySelector('.modal')) {
    var navigation = document.querySelector('.main-nav');
    var modalOpenButton = navigation.querySelector('.main-nav__call-button');
    var modalCloseButton = modal.querySelector('.modal__close-wrapper button');
    var nameInput = modal.querySelector('.modal__name-wrapper input');

    var closeModalOnEsc = function (evtBoard) {
      if ((evtBoard.key === 'Escape') && (modal.classList.contains('modal--opened'))) {
        nameInput.blur();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    };

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
