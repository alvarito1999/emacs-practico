//replace

const string1 = "JavaScript es un maravilloso lenguaje de programacion";
const replaceString = string1.replace("JavaScript", "TypeScript");
console.log(string1); //JavaScript es un maravilloso lenguaje de programacion
console.log(replaceString); //TypeScript es un maravilloso lenguaje de programacion

//replaceAll
const string2 = "ha ha ha ha ha!";
const replaceAllString = string2.replaceAll("ha", "ja");
console.log(string2); //ha ha ha ha ha!
console.log(replaceAllString); //ja ja ja ja ja!

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'