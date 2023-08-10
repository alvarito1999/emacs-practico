const entries = new Map([['name', 'Oscar'], ['age', 34]]);
console.log(entries) //Map(2) { 'name' => 'Oscar', 'age' => 34 }
console.log(Object.fromEntries(entries)) //{ name: 'Oscar', age: 34 }