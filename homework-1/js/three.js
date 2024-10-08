/*
 * Створити масив об'єктів
 * (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]})
 * і використати метод filter, щоб вивести всіх, кому більше 20 років.
 */

export default function taskThree() {
  const people = [
    { name: "John", age: 20, pets: ["cat", "dog"] },
    { name: "Jane", age: 30, pets: ["bird"] },
    { name: "Bob", age: 15, pets: ["fish", "rabbit"] },
    { name: "Alice", age: 40, pets: ["horse", "pig"] },
  ];

  const older = people.filter((person) => person.age > 20);
  console.log(older);
}
