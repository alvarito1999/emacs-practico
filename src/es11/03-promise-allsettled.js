/*
Promise.all
El método Promise.all sirve para manejar varias promesas al 
mismo tiempo. Recibe como argumento un array de promesas.
*/

/*
Promise.allSettled
Promise.allSettled() permite manejar varias promesas, que 
devolverá un array de objetos con el estado y el valor de cada 
promesa, haya sido resuelta o rechazada.
*/

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// [
//     { status: 'rejected', reason: 'Reject' },
//     { status: 'fulfilled', value: 'Resolve 1' },
//     { status: 'fulfilled', value: 'Resolve 2' }
//   ]
  