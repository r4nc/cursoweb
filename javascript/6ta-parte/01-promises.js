
// Promise()

// Estados:
// pending: estado inicial.
// fullfilled: la operacion se completo con exito
// Reject: la operacion fallo

// callbacks:
// resolve
// reject

// metodo:

// then(): caso de exito
// catch() : caso de error
// finally(): se ejecuta al finalizar independientemente del resultado.

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let operationSuccessfull = true;
        if(operationSuccessfull){
            resolve("La operacion fue exitosa")
        } else {
            reject("fallo la operacion")
        }
    },2000);
})
promise 
    .then((successMessage)=> {
        console.log(successMessage)
    })
    .catch((errorMesage)=>{
        console.log(errorMesage)
    })