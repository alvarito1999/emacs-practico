function* iterate(array) {
    for (let value of array) {
        yield value; //retorna cada uno de los valores segun sea el caso
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Joaquin']);
console.log(it.next().value); //Oscar
console.log(it.next().value); //David
console.log(it.next().value); //Ana
console.log(it.next().value); //Joaquin
console.log(it.next().value); //undefined
console.log(it.next().value); //undefined
console.log(it.next().value); //undefined
