/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  var messages = document.querySelectorAll('.messages');

  messages.forEach(function (el) {
    var messageContainer = el.querySelector('.messages__container');

    var closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.setAttribute('class', 'messages__button');

    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('class', 'messages__close');

    var closeBtnText = document.createElement('span');
    closeBtnText.setAttribute('class', 'visually-hidden');
    closeBtnText.innerText = Drupal.t('Close message');

    messageContainer.appendChild(closeBtnWrapper);
    closeBtnWrapper.appendChild(closeBtn);
    closeBtn.appendChild(closeBtnText);

    closeBtn.addEventListener('click', function () {
      el.classList.add('hidden');
    });
  });
})(Drupal);