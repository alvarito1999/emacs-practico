//admite el uso de rest y spread con objetos

const user = {name:'Juan', age:24, country:'AR'};
const {name, ...values } = user;

console.log(name)
console.log(values)