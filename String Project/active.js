let longText = document.querySelector('#longText');
let shortText = document.querySelector('#shortText');
let result = document.querySelector('#result');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function(e) {
  e.preventDefault();

  let match = longText.value.indexOf(shortText.value);

  if (match === -1) {
    result.innerHTML = `
    The value ${longText.value} was not found!
      `;
  } else {
    result.innerHTML = `
    The value ${shortText.value} is found at ${match} number index.
      `;
  }
});
