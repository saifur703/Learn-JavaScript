let canvas = document.querySelector('canvas');

let context = canvas.getContext('2d');

// context.fillStyle = '#ff0000';
// context.fillRect(1, 1, 49, 49);

// context.strokeStyle = '#ff00ff';
// context.strokeRect(0, 0, 50, 50);

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(555, 35);
// context.stroke();

let drawing = false;

oldX = 0;
oldY = 0;
context.strokeStyle = '#ff0000';
canvas.addEventListener('mousedown', e => {
  drawing = true;
  oldX = e.offsetX;
  oldY = e.offsetY;
});
canvas.addEventListener('mouseup', e => {
  drawing = false;
});
canvas.addEventListener('mousemove', e => {
  if (!drawing) {
    return false;
  }
  context.beginPath();
  context.moveTo(oldX, oldY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  oldX = e.offsetX;
  oldY = e.offsetY;
});
