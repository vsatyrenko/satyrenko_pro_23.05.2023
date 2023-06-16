// task-01
// const name = prompt('Як вас звати?');
// alert (`Hello, ${name}! How are you?`);

// task-02
// const firstNumber = Number(prompt('Введіть перше число'));
// const secondNumber = Number(prompt('Введіть друге число'));
// alert (`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
// ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
// ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
// ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)

// task-03
// const value = prompt('Введіть якесь значення');
// const _value = prompt('Введіть якесь значення');
// if (value === _value) {
//     console.log(true)
// } else ( console.log(false))

// task-04
// const firstNumber = Number(prompt('Введіть перше число'));
// const secondNumber = Number(prompt('Введіть друге число'));
// const thirddNumber = Number(prompt('Введіть друге число'));
// const midleNumber = firstNumber + secondNumber + thirddNumber / 3;
// alert(`Середнє арефметичне цих чисел ${midleNumber}`)

//task-05
const number = Number(prompt('Введіть пятизначне число'));
const lastNumber = number % 10;
const fourthNumber = (number % 10) - 1; 
const thirdNumber = (number % 10) - 2; 
const secondNumber = (number % 10) - 3; 
const firstNumber = (number % 10) - 4; 
alert (`${lastNumber} ${fourthNumber} ${thirdNumber} ${secondNumber} ${firstNumber}`);

