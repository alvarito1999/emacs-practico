/*
Los métodos privados consiste en limitar el acceso a propiedades 
y métodos agregando el caracter numeral ( #). Por defecto, 
las propiedades y métodos de una clase en JavaScript son públicas, 
es decir, se puede acceder a ellos fuera de la clase.
*/

class user{
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'Hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
    //get
    get #uAge() {
        return this.age;
    }
    //set
    set #uAge(n) {
        this.age = n;
    }
}

const neron = new user('neron', 18);
console.log(neron.uAge);
console.log(neron.uAge = 25);

class Clase {
    #private(valor){
      console.log(valor)
    }
    
    public(valor){
      console.log(valor)
    }
  }
  
  const clase = new Clase()
  clase.public("Hola")  // 'Hola'
  clase.private("Hola") // TypeError: clase.private is not a function