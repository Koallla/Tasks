"use script";

function findUniq(arr) {
  let UniqCount = arr[0];
  for (const element of arr) {
    if (UniqCount !== element) {
      UniqCount = element;
      return UniqCount;
    }
  }
  console.log(UniqCount);
}

console.log(findUniq([2, 1, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
