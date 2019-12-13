var ghori = document.querySelector('.ghori');

function setTime() {
  var d = new Date();

  ghori.innerHTML = `
  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;
}

setInterval(setTime, 1000);
