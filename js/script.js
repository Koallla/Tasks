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

// const listItem = '<li class="list-item"></li>';
const list = document.querySelector(".list");

fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const markup = data

      .map(value => `<li class="list-item">Buy ${value.ccy} ${value.buy}</li>`)
      .join(" ");

    list.insertAdjacentHTML("afterbegin", markup);
  });
