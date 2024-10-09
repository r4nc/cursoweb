/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos()
}

*/

const persona = {
    nombre: "Kevin",
    edad: 23,
    direccion: {
      calle: "Calle principal",
      ciudad: "cocle",
    },
    saludar() {
      console.log(`hola, mi nombre es ${persona.nombre}`);
    },
  };
  
  console.log(persona);
  
  console.log(persona.nombre);
  
  persona.saludar();
   
  persona.telefono = "555-555-5555"; //agregar propiedad al objeto
  
  console.log(persona.telefono);
  
  
  persona.despedir = () => {// Agregamos un metodo al objeto
    console.log("Adios");
  };
  
  persona.despedir();
  
  
  console.log(persona.direccion.calle);// Acceder a una propiedad de un objeto anidado / Metodo
  
  delete persona.telefono;// Eliminar una propiedad de un objeto
  
  console.log(persona.telefono);
  
  delete persona.despedir;// Eliminar una propiedad de un objeto
  
  console.log(persona.despedir());