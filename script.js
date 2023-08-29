const userBirthDate = prompt("Введіть свій рік народження", "");
let age = "Тобі" + " " + (2023 - userBirthDate);

if (userBirthDate === "" || userBirthDate === null) {
  age = "Шкода, що ви не захотіли ввести свою дату народження";
}

let userCity = prompt("В якому місті ви живете?", "");

if (userCity === "" || userCity === null) {
  userCity = "Шкода, що ви не захотіли ввести своє місто";
} else if (userCity === "Київ") {
  userCity = "Ти живеш у столиці України";
} else if (userCity === "Вашингтон") {
  userCity = "Ти живеш у столиці США";
} else if (userCity === "Лондон") {
  userCity = "Ти живеш у столиці Великобританії";
} else {
  userCity = "Ти живеш у місті" + " " + userCity;
}

let userSport = prompt("Який ваш улюблений вид спорту?", "");

if (userSport === "" || userSport === null) {
  userSport = "Шкода, що ви не захотіли ввести свій улюблений вид спорту";
} else if (userSport === "Теніс") {
  userSport = "Круто!Хочеш стати як Єлена Світоліна";
} else if (userSport === "Плавання") {
  userSport = "Круто!Хочеш стати як Інна Нікітіна";
} else if (userSport === "Бокс") {
  userSport = "Круто!Хочеш стати як Володимир Кличко";
} else {
  userSport = "Твій улюблений вид спорту це" + " " + userSport;
}

alert(age + " " + userCity + " " + userSport);
