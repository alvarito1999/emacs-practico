/*
Set es parecido al array, pero una de las diferencias
es que impide agregar elementos repetidos
*/

const list = new Set();
list.add('item1');
list.add('item2');
list.add('item3');

console.log(list);//Set(3) { 'item1', 'item2', 'item3' }

list.add('item3');
list.add('item3');
list.add('item3');
list.add('item3');

console.log(list);//Set(3) { 'item1', 'item2', 'item3' }


