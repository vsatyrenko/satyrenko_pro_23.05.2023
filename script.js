//Function-1
// const arr = ["asd", 1, "wre", 5, true, 8, false, "yer", 2];

// function calcArihmeticMean(value) {
//   let amountInt = 0;
//   let summa = 0;
//   for (let i = 0; i < value.length; i++) {
//     if (typeof value[i] == "number") {
//       amountInt += 1;
//       summa += arr[i];
//     }
//   }
//   const resalt = summa / amountInt;
//   return resalt;
// }

// console.log(calcArihmeticMean(arr));

//Function-2
// function doMath(x, znak, y) {
//   x = +prompt("Введіть перше число");
//   y = +prompt("Введіть друге число");
//   znak = prompt("Введіть знак +, -, *, /, %, ^");
//   let result;

//   switch (znak) {
//     case "+":
//       result = x + y;
//       break;
//     case "-":
//       result = x - y;
//       break;
//     case "*":
//       result = x * y;
//       break;
//     case "/":
//       result = x / y;
//       break;
//     case "%":
//       result = x % y;
//       break;
//     case "^":
//       result = Math.pow(x, y);
//       break;
//   }

//   return result;
// }

// console.log(doMath());

//Function-3
// function arrAdd() {
//   let arr = [];
//   const amount = +prompt("Введіть кількість масивів");

//   for (let i = 0; i < amount; i++) {
//     arr.push([]);

//     const elements = prompt("Введіть кількість елементів");

//     for (let j = 0; j < elements; j++) {
//       const text = prompt("Введіть значення");
//       arr[i].push(text);
//     }
//   }

//   console.log(arr);
// }

// let functionResult = arrAdd();

//Function-4
const getString = () => {
  const userString = prompt("Write string", "");
  return userString;
};

const string = getString();

const getLetterArr = () => {
  const arr = [];
  const letter = prompt("Write a letter", "");
  arr.push(letter);
  return arr;
};

const letterArr = getLetterArr();

const removeLetter = (string, arr) => {
  if (arr.length === 0) {
    return string;
  }

  const letter = arr[0];
  const index = string.indexOf(letter);

  if (index !== -1) {
    const result = string.slice(0, index) + string.slice(index + 1);
    return removeLetter(result, arr);
  }

  return removeLetter(string, arr.slice(1));
};

const newString = removeLetter(string, letterArr);
console.log(newString);
