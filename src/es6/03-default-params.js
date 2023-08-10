//funcion con parametros por defecto tradicional (antes ES6)

function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 14;
    var  country = country || 'MX';
    console.log(name,age,country);
};

newUser();
newUser('David',15,'Colombia');

//funcion con parametros por defecto ES6

function newAdmin(name = 'Oscar', age = 32, country = 'AR'){
    console.log(name, age, country);
}
newAdmin()
newAdmin('Ana', 28, 'PE');

