const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    
const positiveElement = arr.filter(function(el) { 
    return el > 0;
});
const sum = positiveElement.reduce(function(item,element) {
  return item + element
});
const minElement = Math.min(...arr);
const minElementIndex = arr.indexOf(minElement);
const maxElement = Math.max(...arr);
const maxElementIndex = arr.indexOf(maxElement);
const negativElement = arr.filter(function(el)
{return el < 0});
const oddPositiveElements = arr.filter(function(el)
{return el > 0 && el % 2 != 0});
const pairedPositiveElements = arr.filter(function(el)
{return el > 0 && el % 2 == 0});
const sumOfEven = pairedPositiveElements.reduce(function(item,element) 
{return item + element });
const sumOfOdd = oddPositiveElements.reduce(function(item,element) 
{return item + element });
const productPositiveElements = positiveElement.reduce(function(item,element) 
{return item * element });
const max = Math.max(...arr);
const result = arr.map(function(el) {
    return el == max ? el : 0 
});

console.log(`Сумма масиву: ${sum}
Кількість позитивних елементів: ${positiveElement.length}
Мінімальний елемент масиву: ${minElement}
Його порядковий номер: ${minElementIndex}
Максимальний елемент масиву: ${maxElement}
Його порядковий номер: ${maxElementIndex}
Кількість негативних елементів: ${negativElement.length}
Кількість непарних позитивних елементів: ${oddPositiveElements.length}
Кількість парних позитивних елементів: ${pairedPositiveElements.length}
Сума парних позитивних елементів: ${sumOfEven}
Сума непарних позитивних елементів: ${sumOfOdd}
Добуток позитивних елементів: ${productPositiveElements}
Найбільший серед елементів масиву інші обнуленні: ${max} ${result} `);
