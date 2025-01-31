// let i = 3;

// while (i) {
//   alert( i-- );
// } //1

// let i = 0;
// while (++i < 5) alert( i );// 1 2 3 4

// let i = 0;
// while (i++ < 5) alert( i );// 1 2 3 4 5

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) alert(i);
// }

// let i = 0;
// while (i < 3) {
//   alert("i");
//   i++;
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (!isPrime) continue;
  
  alert(i);
}
