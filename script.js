const input = prompt("Введіть мінімум 6 елементів");
const array = input.split(" ");
const sort = array.sort();
const delet = array.splice(2,5);

console.log(array);