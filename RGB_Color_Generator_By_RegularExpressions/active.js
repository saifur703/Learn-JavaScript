let color = document.querySelector('.color');
let submit = document.querySelector('.submit');
let rval = document.querySelector('.r');
let gval = document.querySelector('.g');
let bval = document.querySelector('.b');

submit.addEventListener('click', function() {
  rval.innerHTML = '';
  let v = color.value;

  // FF00FF

  let regEx = /#([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})/;

  if (v.length === 4 || v.length === 7) {
    let output = regEx.exec(v);

    if (output === null) {
      rval.innerHTML = 'Not a Valid Number';
    } else {
      rval.innerHTML = `R: ${getColor(output[1])}`;
      gval.innerHTML = `G: ${getColor(output[2])}`;
      bval.innerHTML = `B: ${getColor(output[3])}`;

      document.getElementById('box').style.backgroundColor = v;
      document.getElementById('box').append('Color');
    }
  } else {
    rval.innerHTML = 'Not a Valid Number';
  }
});

function getColor(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}
