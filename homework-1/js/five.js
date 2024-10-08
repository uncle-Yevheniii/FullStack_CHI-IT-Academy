/*
 * Створити масив із 10 елементів і заповнити його числом 42 за
 * допомогою відповідного методу (завдання знайти його в документації, посилання в описі до лекції).
 * За допомогою splice вставити на 5-ту позицію слово "answer".
 * За допомогою find знайти це слово і вивести його у консоль.
 */

export default function taskFive() {
  const arr = new Array(10).fill(42);
  arr.splice(5, 0, "answer");
  const result = arr.find((el) => el === "answer");

  console.log(arr);
  console.log(result);
}
