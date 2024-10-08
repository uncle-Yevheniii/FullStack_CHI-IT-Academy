/*
 * За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину.
 * Результат вивести у консоль.
 */

export default function taskFour() {
  const people = [
    { name: "John", age: 20, pets: ["cat", "dog"] },
    { name: "Jane", age: 30, pets: ["bird"] },
    { name: "Bob", age: 15, pets: ["fish", "rabbit"] },
    { name: "Alice", age: 40, pets: ["horse", "pig"] },
  ];

  people.map((person) => {
    person.pets.push("parrot");
    console.log(person);
  });
}
