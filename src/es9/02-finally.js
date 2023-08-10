/*
El método finally para promesas consiste en ejecutar código 
después que una promesa haya sido ejecutada como resuelta o 
rechazada. 
*/

const promesa = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      //true o false
      resolve("Se ha resuelto la promesa");
    } else {
      reject("Se ha rechazado la promesa");
    }
  });
};

promesa()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finnaly"));
