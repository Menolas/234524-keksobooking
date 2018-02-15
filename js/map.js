'use strict';

(function () {
  var PIN_MAIN_WIDTH = 62;
  var PIN_MAIN_HEIGHT = 80;
  var MAX_Y = 500;
  var MIN_Y = 100;
  var offerHandle = window.card.userMap.querySelector('.map__pin--main');
  var offerAddressInput = window.form.form.querySelector('input[name="address"]');
  var offerXCoord = offerHandle.offsetLeft;
  var offerYCoord = offerHandle.offsetTop;

  offerAddressInput.value = offerXCoord + ', ' + offerYCoord;

  var onMainPinClick = function () {
    window.card.userMap.classList.remove('map--faded');
    window.form.enableForm();
    window.pin.renderSimilarPins();
  };

  offerHandle.addEventListener('mouseup', function () {
    onMainPinClick();
  });

  offerHandle.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, onMainPinClick);
  });

  window.pin.similarPins.addEventListener('click', function (event) {
    var target = event.target;
    while (target !== event.currentTarget) {
      if (target.className === 'map__pin') {
        window.pin.getHighlight(target);
        var i = target.getAttribute('data-position');
        window.card.getPopup(window.data.usersOffers[i]);
        return;
      }
      target = target.parentNode;
    }
  });
})();
