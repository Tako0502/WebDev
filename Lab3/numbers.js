// let a = Number(prompt("The first number?", ""));
// let b = Number(prompt("The second number?", ""));

// alert(a + b);

// const readNumber = () => {
//   let num = prompt("Enter a number please?", 0);

//   while (true) {
//     if (!num || num === "" || num === " ") {
//       return null;
//     }
//     if (Number(num) === num) {
//       return n;
//     }
//     num = prompt("Enter a number please?", 0);
//   }
// };

// alert(`Read: ${readNumber()}`);

// const random = (min, max) => {
//   return min + Math.random() * (max - min);
// };

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

const randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));



