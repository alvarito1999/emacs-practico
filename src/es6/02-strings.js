//forma tradicional de concatenar variables que contienen strigs
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//concatenar variables que contienen strings con template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// multi-line strings tradicional
let lorem = 'esto es un string \n' + 'esto es otra linea';

// multi-line strings template literals
let lorem2 = `esta es una frase epica
esto es la continuacion de esa frase epica`;

console.log(lorem)
console.log(lorem2)