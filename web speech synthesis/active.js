var msg = document.querySelector('#q');
var submit = document.querySelector('#submit');
var result = document.querySelector('#result');

submit.addEventListener('click', function() {
  let c = msg.value.toLowerCase();
  let reply = '';

  if (c.match('hello') || c.match('hi')) {
    reply = 'Hello there!';
  } else if (c.match('are you robot?')) {
    reply = "No! I'm Sufia";
  } else if (c.match('how are you?')) {
    reply = "I'm fine.";
  } else if (c.match("what's your name?")) {
    reply = "I'm Robot Sufia. :) ";
  } else if (c.match('where are you from?')) {
    reply = "I'm from USA";
  } else if (c.match('do you like me?')) {
    reply = 'Yes, I like you. Because you are so brilliant and smart also.';
  } else {
    reply = "Sorry, I don't know.";
  }
  result.innerHTML = reply;

  var voiceMessage = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(voiceMessage);
});
