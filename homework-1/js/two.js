/*
 * Створити масив, що складається з елементів різних типів (примітивів)
 * (число, рядок, булева змінна) довжиною 10 елементів. Вивести їх тип за допомогою
 * typeof у консоль.
 */

export default function taskTwo() {
  const array = [1, "string", true, 2, "string2", false, 3, "string3", true, 4];

  //for
  for (let i = 0; i < array.length; i += 1) {
    console.log(typeof array[i]);
  }

  //for of
  for (const element of array) {
    console.log(typeof element);
  }

  //forEach
  array.forEach((element) => {
    console.log(typeof element);
  });

  //while
  let i = 0;
  while (i < array.length) {
    console.log(typeof array[i]);
    i += 1;
  }

  //do while
  let j = 0;
  do {
    console.log(typeof array[j]);
    j += 1;
  } while (j < array.length);
}
