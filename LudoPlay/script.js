let result = document.querySelector('#result');
let action = document.querySelector('#action');
let action2 = document.querySelector('#action2');

action.addEventListener('click', function() {
  let ludo = Math.ceil(Math.random() * 6);

  result.innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; ' + ludo;
});
action2.addEventListener('click', function() {
  let ludo = Math.ceil(Math.random() * 6);

  result.innerHTML = '&nbsp; &nbsp; &nbsp; &nbsp; ' + ludo;
});
