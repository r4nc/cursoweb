// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
/*
function a () {} //funcion uno
function b () {} //funcion dos
b(a) //pasando los datos de la funcion "a" a la "b"

// Retornar funciones

function a () {
    function b () {}
    return b
  }
  
  // Asignar funciones a variables -> Expresión de función
  
  const a = function () {}//nombre de la funcion es el de la variable 
  
  // Tener propiedades y métodos
  
  function a () {}
  const obj = {}
  a.call(obj)
  
  // Anidar funciones -> Nested functions
  
  function a () {
    function b () {
      function c () {
      
      }
      c()
    }
    b()
  }
  a()
  */
  // ¿Es posible almacenar funciones en objetos?
  
  const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {// tambien puede pasa como con las funciones en variables, no es necesario poner el nombre. launchMessage: function () {code}
      console.log('🔥')
    }
  }
  
  rocket.launchMessage()