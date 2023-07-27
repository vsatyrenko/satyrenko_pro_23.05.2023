const array =  [ ]; 
const size = prompt('Введіть довжину масива');
for ( let i = 0; i < size; i ++)  {
	array [ i ]  =  prompt ( ' Введіть елементи '  +  ( i + 1 )); 
}
console.log (array);

const sort = array.sort();
console.log(sort);

const delet = array.splice(2,5);

console.log(delet);

console.log(` vbfdhjbhj${array}`);




