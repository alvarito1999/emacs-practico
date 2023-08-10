const users = {
  alvaro: {
    country: "AR",
  },
  ana: {
    country: "CO",
  },
};

console.log(users.alvaro.country); //AR
console.log(users.ana.country); //CO
console.log(users.ana.age); //undefined

//optional chaining

// console.log(users.juan.country) //TypeError
console.log(users?.juan?.country); //undefined
