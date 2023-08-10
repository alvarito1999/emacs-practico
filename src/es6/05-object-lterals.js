// clasic object literals

function newUser1(user, age, country){
    return{
        user: user,
        age: age,
        country: country
    }
};

// enhanced object literals

function newUser2(user, age, country){
    return{
        user,
        age,
        country
    }
};

function newUser3(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
};

console.log(newUser1('Alvaro', 23, 'AR')); //{ user: 'Alvaro', age: 23, country: 'AR' }
console.log(newUser2('Alvaro', 23, 'AR')); //{ user: 'Alvaro', age: 23, country: 'AR' }
console.log(newUser3('Alvaro', 23, 'AR', 9)); //{ user: 'Alvaro', age: 23, country: 'AR', id: 9 }
