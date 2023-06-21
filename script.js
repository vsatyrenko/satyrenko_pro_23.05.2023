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
const a = Number(prompt('Введіть пятизначне число'));
const fivethNumber = a % 10;
const fourthNumber = ((a - fivethNumber)/10)%10;
const thirdNumber = ((a - (fourthNumber *10 + fivethNumber))/100)%10;
const secondNumber = ((a - (thirdNumber *100 + fourthNumber *10 + fivethNumber))/1000)%10;
const firstNumber = ((a - (secondNumber*1000 + thirdNumber *100 + fourthNumber *10 + fivethNumber))/10000)%10; 
alert (`${fivethNumber} ${fourthNumber} ${thirdNumber} ${secondNumber} ${firstNumber}`);