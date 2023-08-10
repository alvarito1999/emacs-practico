/* 
el metodo .padStart(n, 'message') agrega como padding el texto 'message', 
al inicio de la cadena que invoca el metodo, hasta que la cadena
resultante tenga n caracteres. 
*/

const string = 'Hello';

console.log(string.padStart(7, 'hi')); //hiHello
console.log(string.padStart(10, 'hi')); //hihihHello
console.log(string.padStart(15, 'hi')); //hihihihihiHello


//el metodo .padEnd hace lo mismo que .padStart solo que rellena con caracteres al final

console.log(string.padEnd(7, '_')); //Hello__
console.log(string.padEnd(10, '_')); //Hello_____
console.log(string.padEnd(15, '_')); //Hello__________

