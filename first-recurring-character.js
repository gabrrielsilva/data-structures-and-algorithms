const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

// my solution:
// function getFirstRecurringCharacter(array) {
//   const history = [];

//   for (let i = 0; i < array.length; i++) {
//     if (history.includes(array[i])) {
//       return array[i];
//     }

//     history.push(array[i]);

//     if (history.length === array.length) {
//       return undefined;
//     }
//   }
// }

function getFirstRecurringCharacter2(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    }

    map[array[i]] = i;
  }

  return undefined;
}

console.log(getFirstRecurringCharacter2(array3));
