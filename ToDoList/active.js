let input = document.querySelector('.input');
let list = document.querySelector('.list');

let task = [];
// let task = [];

// function render(elements) {
//   list.innerHTML = "";

//   elements.forEach(e => {
//     let newEl = document.createElement("li");

//     newEl.innerHTML = e;

//     list.appendChild(newEl);
//   });
// }

// input.addEventListener("keyup", e => {
//   if (e.which === 13 && e.value !== "") {
//     task.push(input.value);
//     input.value = "";

//     render(task);
//   }
// });

function render(elements) {
  list.innerHTML = '';
  elements.forEach(e => {
    let newEl = document.createElement('li');

    newEl.innerHTML = e;
    list.appendChild(newEl);
  });
}

input.addEventListener('keyup', e => {
  if (e.which === 13 && e.value !== '') {
    task.push(input.value);
    input.value = '';

    render(task);
  }
});
