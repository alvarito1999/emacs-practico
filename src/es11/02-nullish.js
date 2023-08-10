//Nullish Coalescing (??).

const anotherNumber1 = 1;

//definimos que si anotherNumber1 === null entonces anotherNumber1 = 5
const validate1 = anotherNumber1 ?? 5;

//como anotherNumber1 !== null entonces anotherNumber1 = anotherNumber1
console.log(validate1); //1

const anotherNumber2 = null;

//definimos que si anotherNumber2 === null entonces anotherNumber2 = 5
const validate2 = anotherNumber2 ?? 5;

//como anotherNumber1 === null entonces anotherNumber1 = 5
console.log(validate2); //5
