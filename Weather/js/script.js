"use script";

fetch(
  "http://api.weatherstack.com/current?access_key=e8278975abb258561367cab2590794a3&query= fetch:ip"
)
  .then(res => res.json())
  .then(data => {
    const temperature = data.current.temperature;
    const country = data.location.country;
    const localtime = data.location.localtime;
    const region = data.location.region;
    const name = data.location.name;
    const windSpeed = data.current.wind_speed;
    const cloudcover = data.current.cloudcover;
    const weather_icons = data.current.weather_icons[0];

    const markup = `
      <li class="list-item">Temperature: ${temperature} C</li>
      <li class="list-item">Wind speed: ${windSpeed} m/s</li>
      <li class="list-item">Cloudcover: ${cloudcover}</li>
      <li class="list-item">Country: ${country}</li>
      <li class="list-item">Region: ${region}</li>
      <li class="list-item">Name: ${name}</li>
      <li class="list-item">Localtime: ${localtime}</li>`;

    const image = document.createElement("img");
    image.setAttribute("src", weather_icons);

    const list = document.querySelector(".list");

    list.innerHTML = markup;
  });
