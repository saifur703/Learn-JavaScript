let locations = document.querySelector('#area');
let submit = document.querySelector('#submit');
let result = document.querySelector('#result');

const BASE_URL = 'http://api.weatherstack.com';
const ACCESS_KEY = '14a5ac57d94f1ca14f1b53bb5cb249d9';

submit.addEventListener('click', e => {
  let locValue = locations.value;
  //console.log(`${BASE_URL}/current.json?key=${ACCESS_KEY}&query=${locValue}`);
  fetch(`${BASE_URL}/current?access_key=${ACCESS_KEY}&query=${locValue}`)
    .then(response => response.json())
    .then(forecast => {
      if (forecast.success === false) {
        result.innerHTML = `
        <h2>${forecast.error.info}</h2>
          `;
      } else {
        //console.log(forecast);
        result.innerHTML = `
        <ul>
        <li>
            <strong>Request Time: </strong>${forecast.current.observation_time}
        </li>
        <li>
            <strong>Temperature: </strong>${forecast.current.temperature} Degree Celcius 
        </li>
        <li>
            <strong>Request: </strong>${forecast.request.type} - ${forecast.request.query} 
        </li>
        <li>
            <strong>Time zone: </strong>${forecast.location.timezone_id}
        </li>
        </ul>
        `;
      }
    });
});
