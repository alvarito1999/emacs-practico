/*
Object.entries(objeto) devuelve Una matriz de los pares 
[clave, valor] de la propiedad enumerable del objeto dado.
*/

const countries = {MX:'Mexico', CO:'Colombia', CL:'Chile', PE:'Peru'};

console.log(Object.entries(countries));

/*
[
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]
*/