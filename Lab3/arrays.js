// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

// alert(fruits.length);

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert(styles.shift());
// styles.unshift("Rap", "Reggae");

// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2]();

// const sumInput = () => {
//   let numbers = [];
//   while (true) {
//     let value = prompt("A number please?", 0);
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(Number(value));
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// alert(sumInput());

// const camelize = (str) => {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.substring(1)
//     )
//     .join("");
// };

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

const filterRange = (arr, a, b) => {
  return arr.filter((item) => a <= item && item <= b);
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);
