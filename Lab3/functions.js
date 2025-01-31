// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

// alert(checkAge(18))

// function min(a, b) {
//   return a > b ? b : a;
// }

// alert(min(2, 5));

// function pow(x, n) {
//   let res = 1;
//   for (let i = 0; i < n; i++) res *= x;
//   return res;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n >= 1) alert(pow(x, n));

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
