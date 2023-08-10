/*
devuelve un array con los valores correspondientes a
las propedades enumerables de un objeto
*/

const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile", PE: "Peru",};

console.log(Object.values(countries)); //[ 'Mexico', 'Colombia', 'Chile', 'Peru' ]
