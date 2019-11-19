"use script";

const oneGetCurrentPosition = location => {
  let latitude = location.coords.latitude;
  let longitude = location.coords.longitude;
  fetch(
    `http://api.weatherstack.com/current?access_key=e8278975abb258561367cab2590794a3&query= ${latitude}, + ${longitude}`
  )
    .then(res => res.json())
    .then(data => {
      const temperature = data.current.temperature;
      const country = data.location.country;
      const localtime = data.location.localtime;
      const region = data.location.region;
      const windSpeed = data.current.wind_speed;
      const cloudcover = data.current.cloudcover;
      const timezone_id = data.location.timezone_id;

      const markup = `
        <li class="list-item">Temperature: ${temperature} ℃</li>
        <li class="list-item">Wind speed: ${windSpeed} m/s</li>
        <li class="list-item">Cloudcover: ${cloudcover}</li>
        <li class="list-item">Country: ${country}</li>
        <li class="list-item">Region: ${region}</li>
        <li class="list-item">Timezone: ${timezone_id}</li>
        <li class="list-item">Localtime: ${localtime}</li>`;

      const list = document.querySelector(".list");

      list.innerHTML = markup;
    });
};

navigator.geolocation.getCurrentPosition(oneGetCurrentPosition);
