/*
 * Створіть об'єкт із кількома ключами на ваш розсуд.
 * І наведіть приклади використання keys, hasOwn, values.
 */

export default function taskSix() {
  const myObject = {
    name: "Yevhenii",
    age: 25,
    city: "Kyiv",
    isStudent: false,
  };
  console.log(Object.keys(myObject));
  console.log(Object.hasOwn(myObject, "age"));
  console.log(Object.values(myObject));
}
