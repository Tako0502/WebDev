// const ucFirst = (str) => {
//   return !str ? str : str[0].toUpperCase() + str.substring(1);
// };

// alert(ucFirst());

// const checkSpam = (str) => {
//   return (
//     str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
//   );
// };

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

// const truncate = (str, len) => {
//   return str.length > len ? str.substring(0, len - 1) + "…" : str;
// };

// console.log(truncate("What I'd like to tell on this topic is:", 20));
// console.log(truncate("Hi everyone!", 20));

const extractCurrencyValue = (str) => {
  return Number(str.substring(1));
};

console.log(extractCurrencyValue("$120") === 120);
