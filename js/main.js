var navButton = document.querySelector('.adopt');

navButton.addEventListener('click', function () {
  console.log('clicky!!!');
  document.querySelector('form')
    .classList
    .toggle('adopt-form');
});
