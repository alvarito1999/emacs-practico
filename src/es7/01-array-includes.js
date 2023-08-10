/*
con el metodo include podemos consultar si determinado elemento
existe en un array.
*/

//include es type sensitive

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(4)); //true
console.log(numbers.includes('4')); //false
console.log(numbers.includes(1)); //true
console.log(numbers.includes(7)); //false

//include es case sensitive.

const names = ["Oscar", "Raul", "Juana"];

console.log(names.includes("Oscar")); //true
console.log(names.includes("oscar")); //false
console.log(names.includes("Raul")); //true
console.log(names.includes("Juana")); //true
console.log(names.includes("Ana")); //false
console.log(names.includes("Roberto")); //false
