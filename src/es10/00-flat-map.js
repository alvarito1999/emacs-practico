//flat
const array1 = [1, 2, 3, 4 , [10, 11, 12, 13 , [100, 200, 300]]];
console.log(array1.flat(3))

// [
//     1,  2,  3,   4,  10,
//    11, 12, 13, 100, 200,
//   300
// ]

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));

// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]
  

