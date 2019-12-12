let number = document.querySelector('#number');

let submit = document.querySelector('#submit');

let list = document.querySelector('#list');

submit.addEventListener('click', function() {
  //   for (let i = 1; i <= 10; i++) {
  //     // console.log(number.value * i);
  //     // list.innerHTML = `

  //     //     <li>
  //     //       ${number.value} X ${i} = ${number.value} * ${i}
  //     //     </li>

  //     //   `;
  //   }

  for (var i = 1; i <= 10; i++) {
    // if (Number.isInteger(number.value)) {
    //   list.innerHTML = 'The Provided Value is not a Number.';
    // }
    document.write(`
    <li>${number.value} x ${i} = ${number.value * i + '<br/>'}</li>
    `);
  }
});
