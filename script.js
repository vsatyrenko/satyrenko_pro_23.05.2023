class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  personInfo() {
    return {
      Name: this.name,
      Age: this.age,
    };
  }
}
const personTom = new Person("Tom", 30);
const personJohn = new Person("John", 25);

class Auto {
  constructor(brand, model, date, numberplate) {
    this.brand = brand;
    this.model = model;
    this.date = date;
    this.numberplate = numberplate;
    this.owner = null;
  }
  setOwner(owner) {
    if (owner instanceof Person && owner.age > 18) {
      this.owner = owner;
    } else {
      console.log("Your age is under 18");
    }
  }
  getFullInfo() {
    console.log({
      brand: this.brand,
      model: this.model,
      date: this.date,
      numberplate: this.numberplate,
      owner: this.owner ? this.owner.personInfo() : "This car has no owner",
    });
  }
}
const toyotaCar = new Auto("Toyota", "Camry", "2022", "ST2971");
const hondatCar = new Auto("Honda", "CR-V", "2023", "ST1792");

toyotaCar.setOwner(personTom);
toyotaCar.getFullInfo();

hondatCar.setOwner(personJohn);
hondatCar.getFullInfo();

//
function Persona(name, age) {
  this.name = name;
  this.age = age;

  this.personInfo = () => {
    return {
      Name: this.name,
      Age: this.age,
    };
  };
}

function Car(brand, model, date, numberplate) {
  this.brand = brand;
  this.model = model;
  this.date = date;
  this.numberplate = numberplate;
  this.owner = null;

  this.setOwner = (owner) => {
    if (owner instanceof Persona && owner.age > 18) {
      this.owner = owner;
    } else {
      console.log("Your age is under 18");
    }
  };

  this.getFullInfo = function () {
    console.log({
      brand: this.brand,
      model: this.model,
      date: this.date,
      numberplate: this.numberplate,
      owner: this.owner ? this.owner.personInfo() : "This car has no owner",
    });
  };
}

const personTrevor = new Persona("Trevor", 25);
const hondaJazz = new Car("Honda", "Jazz", "2018", "ST7771");
hondaJazz.setOwner(personTrevor);
hondaJazz.getFullInfo();

const personMaria = new Persona("Maria", 18);
const toyotaCamry = new Car("Toyota", "Camry", "2020", "ST6662");
toyotaCamry.setOwner(personMaria);
toyotaCamry.getFullInfo();
