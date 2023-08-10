//declarando
class User {}

//instancia de clase
const newUser = new User();

//herencia
class user {
  //metodos
  greetings() {
    return "Hello";
  }
}

const juan = new user(); // instancia 1
console.log(juan.greetings()); //Hello
const jose = new user(); // instancia 2
console.log(jose.greetings()); //Hello

//constructor
class user {
  //constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greetings() {
    return "Hello";
  }
}

const david = new user();

//this

class user {
  //constructor
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greetings() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana')
console.log(ana.greetings())


// setters & getters

class user{
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
    //get
    get uAge() {
        return this.age;
    }
    //set
    set uAge(n) {
        this.age = n;
    }
}

const neron = new user('neron', 18);
console.log(neron.uAge);
console.log(neron.uAge = 25);


