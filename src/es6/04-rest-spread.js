//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b); //Apple Banana
console.log(a, fruits[1]); //Apple Banana

//object destructuring

let user = { username: 'Oscar', age:34 };
let { username, age} = user;

console.log(username, age); //Oscar 34
console.log(username, user.age); //Oscar 34

// spread operator

let person = {name: 'Oscar', age: 28};
let country = 'MX';

let data = {... person, country};
console.log(data); //{ name: 'Oscar', age: 28, country: 'MX' }

let data1 = {id:1, ... person, country};
console.log(data1); //{ id: 1, name: 'Oscar', age: 28, country: 'MX' }

// rest

function sum(num, ...values){
    console.log(values); //[ 1, 2, 3 ]
    console.log(num + values[0]); //2
    return num + values[0];
}

sum(1,1,2,3);
