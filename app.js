const runes = [
  "mental",
  "nature",
  "fire",
  "water",
  "earth",
  "air",
  "disperse",
  "propulsion",
  "cold",
  "barrier",
  "summon",
  "blood",
  "light",
  "body",
  "consumption",
  "life",
  "death"
];

function result(numRunes) {
  let results = [];
  switch (numRunes) {
    case 1:
      return runes;
    case 2:
      for (let i = 0; i < runes.length - 1; i++) {
        for (let j = i + 1; j < runes.length; j++) {
          results.push(`${runes[i]} ${runes[j]}`);
        }
      }
      return results;
    case 3:
      for (let i = 0; i < runes.length - 1; i++) {
        for (let j = i + 1; j < runes.length; j++) {
          for (let k = i + 2; k < runes.length; k++) {
            results.push(`${runes[i]} ${runes[j]} ${runes[k]}`);
          }
        }
      }
      return results;
    case 4:
      for (let i = 0; i < runes.length - 1; i++) {
        for (let j = i + 1; j < runes.length; j++) {
          for (let k = i + 2; k < runes.length; k++) {
            for (let m = i + 3; m < runes.length; m++) {
              results.push(`${runes[i]} ${runes[j]} ${runes[k]} ${runes[m]}`);
            }
          }
        }
      }
  }
}

console.log(result(2));

// let results = [];
// for (let i = 0; i < runes.length - 1; i++) {
//   for (let j = i + 1; j < runes.length; j++) {
//     for (let k = i + 2; k < runes.length; k++) {
//       for (let m = i + 3; m < runes.length; m++) {
//         results.push(`${runes[i]} ${runes[j]} ${runes[k]} ${runes[m]}`);
//       }
//     }
//   }
// }
// console.table(results);

// function string_recurse(active, rest) {
//   if (rest.length == 0) {
//     console.log(active);
//   } else {
//     string_recurse(active + rest.charAt(0), rest.substring(1, rest.length));
//     string_recurse(active, rest.substring(1, rest.length));
//   }
// }

// string_recurse("", runes);
// function combinations(str) {
//   debugger;
//   let fn = function(active, rest, a) {
//     if (!active && !rest) {
//       return;
//     }
//     if (!rest) {
//       a.push(active);
//     } else {
//       fn(active + rest[0], rest.slice(1), a);
//       fn(active, rest.slice(1), a);
//     }
//     return a;
//   };
//   return fn("", str, []);
// }

// combinations([
//   "mental",
//   "nature",
//   "fire",
//   "water",
//   "earth",
//   "air",
//   "disperse",
//   "propulsion",
//   "cold",
//   "barrier",
//   "summon",
//   "blood",
//   "light",
//   "body",
//   "consumption",
//   "life",
//   "death"
// ]);
