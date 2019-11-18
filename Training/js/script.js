"use script";
// ==========================================================
// Уникальное число
// function findUniq(arr) {
//   let UniqCount = arr[0];

//   for (const element of arr) {
//     if (UniqCount !== arr[1]) {
//       return UniqCount;
//     }
//     if (UniqCount !== element) {
//       UniqCount = element;
//       return UniqCount;
//     }
//   }
// }

// console.log(findUniq([2, 1, 1, 1, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// ==========================================================
// Четное или не четное
// function even_or_odd(number) {
//   const passed = number % 2 === 0;
//   if (passed) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(even_or_odd(2));
// console.log(even_or_odd(0));
// console.log(even_or_odd(7));
// console.log(even_or_odd(1));

// ====================================================================================
// Выбрать из массива только числа
// function filter_list(array) {
//   // const result = array.filter(item => typeof item === "number");
//   const result = array.filter(item => Number.isInteger(item));
//   console.log(result);
// }

// filter_list([1, 2, "a", "b"]);
// filter_list([1, "a", "b", 0, 15]);
// filter_list([1, 2, "aasf", "1", "123", 123]);

// =======================================================
// const double = arrays => {
//   const newArray = [];
//   for (let array of arrays) {
//     newArray.push(array * 2);
//   }
//   console.log(newArray);
// };

// double([1, 2, 3]);

// const add = arrays => {
//   let total = 0;
//   for (let array of arrays) {
//     total += array;
//   }
//   console.log(total);
// };

// add([1, 2, 3]);

// const array1 = ["a", "b", "c"];

// array1.forEach = element => {
//   return element;
// };

// console.log(array1.forEach(array1));

// =======================================================

// const list = document.querySelector(".list");

// fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     const markup = data

//       .map(
//         value =>
//           `<li class="list-item">Buy ${value.ccy} ${value.buy} Sale ${value.sale}</li>`
//       )
//       .join(" ");

//     list.insertAdjacentHTML("afterbegin", markup);
//   });

// =======================================================

// const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome"
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   }
// })
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// =======================================================
// FETCH
// fetch("https://swapi.co/api/planets")
//   .then(res => res.json())
//   .then(data => {
//     const planets = data.results;
//     let i = 0;

//     const planetName = planets.map(planet =>
//       console.log(`${i++} ` + planet.name)
//     );
//   });

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// key DarkSky = 18648bab4c8328661bc43b01df85e327;
// buypassCORS = https://cors-anywhere.herokuapp.com/
// api.openweathermap.org/data/2.5/weather?q=London

// =======================================================
// OPENWEATHER
// const key = "48d7ba55d76cf45b84f2e89c5d99ee83";
// //api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

// fetch("https://api.darksky.net/forecast/[key]/[latitude],[longitude]")
//   .then(res => res.json())
//   .then(data => console.log(data));

// =======================================================
// APIXU
// key = e8278975abb258561367cab2590794a3;

// const baseUrl = "http://api.weatherstack.com/";

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
