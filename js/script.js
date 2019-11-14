"use script";
// ==========================================================
// Уникальное число
// function findUniq(arr) {
//   let UniqCount = arr[0];

//   for (const element of arr) {
//     if (UniqCount !== arr[1] && UniqCount !== arr[2]) {
//       return UniqCount;
//     }

//     if (UniqCount !== element) {
//       UniqCount = element;
//       return UniqCount;
//     }
// //   }
// // }
// function findUniq(arr) {
//   return +arr.filter(value => {
//     return arr.indexOf(value) == arr.lastIndexOf(value);
//   });
// }

// console.log(findUniq([2, 1, 1, 1, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));
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

// function filter_list() {
//   const result = filter_list.filter(function(number) {
//     return number > 0;
//   });
//   alert(result);
// }

// filter_list([1, 2, "a", "b"]);
// filter_list([1, "a", "b", 0, 15]);
// filter_list([1, 2, "aasf", "1", "123", 123]);

// ===========================================================================================
// Добавить знак & перед последним именем

// function list(names) {
//   const AllNames = names.reduce((acc, name) => acc + name.name);

//   console.log(AllNames);
// }

// list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
// // returns 'Bart, Lisa & Maggie'

// list([{ name: "Bart" }, { name: "Lisa" }]);
// // // returns 'Bart & Lisa'

// list([{ name: "Bart" }]);
// // // returns 'Bart'

// list([]);
// // returns ''
