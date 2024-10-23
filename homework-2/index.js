/*
 * Створити функцію, яка при створенні приймає об'єкт, наприклад: {access-token: 'qwerty'}
 * і додає його до кожної структури даних, що буде передана в результуючу функцію.
 * Також до об'єкта буде додано поле count. При кожному виклику воно має збільшуватися на 1.
 */

const data = { "access-token": "qwerty" };

function addParamsToRequest(params) {
  let count = 0;
  return function (data) {
    return {
      ...data,
      ...params,
      count: count++,
    };
  };
}
const sendData = addParamsToRequest(data);
const result1 = sendData({ name: "John", age: 30 });
const result2 = sendData({ city: "Kyiv", location: "UA" });

console.log(result1, result2);
/*
 * Викличте його так, щоб ім'я та вік були вказані (значення неважливі).
 * Потім створіть функцію, яка буде це робити постійно при її виклику.
 */

const obj = {
  getData: function () {
    console.log(`Person name is: ${this.name} and age ${this.age}`);
  },
};

function createBoundCaller(name, age) {
  return obj.getData.bind({ name: name, age: age });
}

const callData = createBoundCaller("Bob", 25);
callData();
callData();

/*
 * Задача — пройтися по об'єкту рекурсивно, знайти всі файли та повернути їхні імена у вигляді масиву.
 */

const root = {
  name: "name",
  type: "folder",
  children: [
    {
      name: "folder 1",
      type: "folder",
      children: [
        {
          name: "folder 2",
          type: "folder",
          children: [
            {
              name: "file 3",
              type: "file",
              size: 30,
            },
          ],
        },
      ],
    },
    {
      name: "file 1",
      type: "file",
      size: 10,
    },
    {
      name: "file 2",
      type: "file",
      size: 20,
    },
  ],
};

function find(obj, type) {
  let result = [];

  if (obj.type === type) {
    result.push(obj.name);
  } else {
    obj.children.forEach((child) => {
      result = result.concat(find(child, type));
    });
  }

  return result;
}

console.log(find(root, "file"));

/*
 * Створіть базовий об'єкт Людина з такими властивостями: -name -phone
 * Метод introduce, який виводить у консоль фразу: Привіт, мене звати {name}, мій номер {phone}.
 * Створіть об'єкти Студент і Викладач, які будуть наслідувати властивості та методи від об'єкта Людина.
 * - Для Студента додайте додаткову властивість course (курс) і метод study, який виводить: Я навчаюся на {course} курсі.
 * - Для Викладача додайте додаткову властивість subject (предмет) і метод teach, який виводить: Я викладаю {subject}.
 * Реалізуйте наслідування за допомогою конструктора функції або класів (оберіть один підхід).
 */

//!формат ES6 (через class).

class Human {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  introduce() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
  }
}
const human = new Human("Bob", "000000000000");
human.introduce();

class Student extends Human {
  constructor(name, phone, course) {
    super(name, phone);
    this.course = course;
  }

  study() {
    console.log(`Я навчаюся на ${this.course} курсі`);
  }
}

const student = new Student("John", "111111111111", "Math");
student.study();
student.introduce();

class Teacher extends Human {
  constructor(name, phone, subject) {
    super(name, phone);
    this.subject = subject;
  }

  teach() {
    console.log(`Я викладаю ${this.subject}`);
  }
}
const teacher = new Teacher("Ju", "222222222222", "Programming");
teacher.teach();
teacher.introduce();

//!формат ES5 (через prototype).

function HumanES5(name, phone) {
  this.name = name;
  this.phone = phone;
}
HumanES5.prototype.introduce = function () {
  console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
};

const humanES5 = new HumanES5("Bob ES5", "000000000000");
humanES5.introduce();

function StudentES5(name, phone, course) {
  HumanES5.call(this, name, phone);
  this.course = course;
}

StudentES5.prototype = Object.create(HumanES5.prototype);
StudentES5.prototype.constructor = StudentES5;
StudentES5.prototype.study = function () {
  console.log(`Я навчаюся на ${this.course} курсі`);
};

const studentES5 = new StudentES5("John ES5", "111111111111", "Math");
studentES5.study();
studentES5.introduce();

function TeacherES5(name, phone, subject) {
  HumanES5.call(this, name, phone);
  this.subject = subject;
}

TeacherES5.prototype = Object.create(HumanES5.prototype);
TeacherES5.prototype.constructor = TeacherES5;
TeacherES5.prototype.teach = function () {
  console.log(`Я викладаю ${this.subject}`);
};
const teacherES5 = new TeacherES5("Ju ES5", "222222222222", "Programming");
teacherES5.teach();
teacherES5.introduce();
