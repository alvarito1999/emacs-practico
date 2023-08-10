var lastName = 'David'; //declaracion y asignacion
lastName = 'Oscar'; //re-asignacion
console.log(lastName); //'Oscar'

let fruit = 'Apple'; //declaracion y asignacion
fruit = 'Kiwi'; //re-asignacion
console.log(fruit); //'Kiwi'

const animal = 'Dog'; //declaracion y asignacion
animal = 'Cat'; //re-asignacion
console.log(animal); //error

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits() //ReferenceError: fruit2 is not defined
