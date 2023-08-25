class Student {
  constructor(lastName, firstName, birthDate) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate;
  }
  grades = new Array(25).fill(undefined);
  attendance = new Array(25).fill(undefined);

  getStudentAge() {
    const studentAge = 2023 - this.birthDate;
    return `Вік студента ${this.lastName} ${studentAge}`;
  }

  calcAverageGrade() {
    const gradesSum = this.grades.reduce((sum, current) => sum + current, 0);
    return Math.round(gradesSum / this.grades.length);
  }

  present(grade) {
    const empty = this.grades.findIndex((value) => value === undefined);
    if (empty !== -1 && empty < 25) {
      this.grades[empty] = grade;
      this.attendance[empty] = true;
    }
  }

  absent() {
    const empty = this.grades.findIndex((value) => value === undefined);
    if (empty !== -1 && empty < 25) {
      this.grades[empty] = 0;
      this.attendance[empty] = false;
    }
  }

  summary() {
    const averageGrade = this.calcAverageGrade();
    const attendedLessons = this.attendance.filter(
      (attended) => attended
    ).length;
    const attendanceRating = attendedLessons / this.attendance.length;

    if (averageGrade > 90 && attendanceRating > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRating > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }

  getArr() {
    console.log(this.grades);
    console.log(this.attendance);
  }
}

function getRandomGrade(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getGradeAndAttandance = (student, attended, missed, min, max) => {
  for (let i = 0; i < attended; i++) {
    student.present(getRandomGrade(min, max));
  }
  for (let i = 0; i < missed; i++) {
    student.absent();
  }
};
const studentBob = new Student("Bob", "Homer", 2000);

getGradeAndAttandance(studentBob, 25, 0, 94, 100);
console.log(studentBob.getStudentAge());
console.log("Середня оцінка студента:" + studentBob.calcAverageGrade());
console.log(studentBob.summary());

const studentJohn = new Student("John", "Santos", 2001);
getGradeAndAttandance(studentJohn, 20, 5, 65, 84);

console.log(studentJohn.getStudentAge());
console.log("Середня оцінка студента:" + studentJohn.calcAverageGrade());
console.log(studentJohn.summary());

const studentBritny = new Student("Britny", "Spirs", 1999);
getGradeAndAttandance(studentBritny, 23, 2, 91, 98);

console.log(studentBritny.getStudentAge());
console.log("Середня оцінка студента:" + studentBritny.calcAverageGrade());
console.log(studentBritny.summary());
