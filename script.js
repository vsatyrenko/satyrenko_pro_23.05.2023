// HW-03 Task 02
const birth = prompt('Введіть ваш рік народження');
const age = 2023 - birth;
const city = prompt('В якому місті ви живите');
const sports = prompt('Введіть ваш улюбленний вид спорту')

let howOld;
let userCity;
let typeOfSport;

if (birth) {
    howOld = `Ваш вік ${age}`}
    else
    howOld = 'Шкода, що Ви не захотіли ввести свій рік народження';

if (city === 'Київ') {
        userCity = `Ти живеш у столиці ${city}`}
    else if (city === 'Вашингтон') {
        userCity = `Ти живеш у столиці ${city}`}
    else if (city === 'Лондон') {
        userCity = `Ти живеш у столиці ${city}`}
    else if (city) {
        userCity = `Ти живеш у місті ${city}`
    }else 
        userCity = 'Шкода, що Ви не захотіли ввести своє місто';
        
if(sports === 'Футбол') {
        typeOfSport = 'Круто! Хочеш стати Андрієм Шевченко?'
        }
    else if(sports === 'Бокс') {
        typeOfSport = 'Круто! Хочеш стати Віталієм чи Володимиром Кличко?'
        }
    else if(sports === 'Важка атлетика') {
        typeOfSport = 'Круто! Хочеш стати Василем Вірастюком?'
        }
    else
        typeOfSport = 'Шкода, що Ви не захотіли ввести свій улюбленний вид спорту';


alert (`${howOld} 
${userCity}
${typeOfSport}`);