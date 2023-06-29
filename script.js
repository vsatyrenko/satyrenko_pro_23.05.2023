//Task-01
// const a = 10;
// const b = 5;

// if (a > b) {
//     console.log(`Число ${a} більше за число ${b}`)
// };

//Task-02
// const kilometr = 400;
// const pound = 2 * 0.305 * 1000;

// if (kilometr < pound) {
//     console.log(` Відстань ${kilometr} кілометрів меньша за відстань ${pound} фунтів`)
// } else {
//     console.log(`Відстань ${pound} фунтів більша за відстань ${kilometr} кілометрів`)
// };

//Task-03
// const a = 30;
// const b = 5;
// if (a % b === 0)  {
//     console.log('так ділиться')
// } else {
//     console.log('не ділиться')
// };

// const _b = 5;
// const _a = 30;
// if (_b % _a === 0)  {
//     console.log('так ділиться')
// } else {
//     console.log('не ділиться')
// };

//Task-04
// const number = 1234;
// lastNumber = number % 10;
// if(lastNumber % 2 === 0) {
// console.log(`Це число закінчується парною цифрою ${lastNumber}`)
// }else {
// console.log(`Це число не закінчується парною цифрою це число ${lastNumber}`)
// };

// Task-05
// const c = 45;
// const b = c % 10;
// const a = ((c - b)/10)%10;

// if (a > b) {
//     console.log('перше число більше')

//  } else {
//     console.log('друге число більше')
//  };

//Task-06
// const num = 123;
// const num3 = num % 10;
// const num2 = ((num - num3)/10) % 10;
// const num1 = ((num -(num2 * 10 + num3))/100) % 10;
// const summa = num1 + num2 + num3

//  if(summa % 2 === 0) {
//     console.log('сума парна')
//  } else {
//     console.log('сумма не парна')
// };

// const number = 123;
// const c = number % 10;
// const b = ((number - c)/10) % 10;
// const a = ((number -(b * 10 + c))/100) % 10;
// const summa = a + b + c;

// if (summa % 5 === 0) {
//     console.log('кратне 5')
// } else {
//     console.log('не кратне 5')
// };

// const c = 123;
// const d = c % 10;
// const b = ((c - d)/10) % 10;
// const a = ((c -(b * 10 + d))/100) % 10;

// if(a * b * d > 100 ) {
//     console.log('більше 100')
// } else {
//     console.log('не більше 100')
// };

//Task-07 
// const num = 654;
// const num3 = num % 10;
// const num2 = ((num - num3)/10) % 10;
// const num1 = ((num -(num2 * 10 + num3))/100) % 10;

// if (num1 === num2 === num3) {
//     console.log('так правда є однакові')
// } else {
//     console.log('ні не правда не має однакових')
// };

//Task-08
const num = 123321;

const lastNumber = num % 10
const fivethNumber = ((num - lastNumber)/10)%10;
const fourthNumber = ((num - (fivethNumber *10 + lastNumber))/100)%10;
const thirdNumber = ((num - (fourthNumber *100 + fivethNumber *10 + lastNumber))/1000)%10;
const secondNumber = ((num - (thirdNumber*1000 + fourthNumber *100 + fivethNumber *10 + lastNumber))/10000)%10;
const firstNumber = ((num - (secondNumber*10000 + thirdNumber *1000 + fourthNumber *100 + fivethNumber * 10 + lastNumber))/100000)%10;

if (firstNumber && secondNumber && thirdNumber &&  fourthNumber && fivethNumber && lastNumber) {
    console.log('так вони дзеркальні')
} else {
    console.log('вони не дзеркальні')
};
    
const num1 = 147741;

const _lastNumber = num1 % 10
const _fivethNumber = ((num1 - _lastNumber)/10)%10;
const _fourthNumber = ((num1 - (_fivethNumber *10 + _lastNumber))/100)%10;
const _thirdNumber = ((num1 - (_fourthNumber *100 + _fivethNumber *10 + _lastNumber))/1000)%10;
const _secondNumber = ((num1 - (_thirdNumber*1000 + _fourthNumber *100 + _fivethNumber *10 + _lastNumber))/10000)%10;
const _firstNumber = ((num1 - (_secondNumber*10000 + _thirdNumber *1000 + _fourthNumber *100 + _fivethNumber * 10 + _lastNumber))/100000)%10;

if (_firstNumber && _secondNumber && _thirdNumber && _fourthNumber && _fivethNumber && _lastNumber) {
    console.log('так вони дзеркальні')
} else {
    console.log('вони не дзеркальні')
};