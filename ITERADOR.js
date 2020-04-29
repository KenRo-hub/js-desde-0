const ciudades =['Londres','New York','Madrid','París'];
const ordenes =new Set([123,231,131,102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion','desarrollador web');

// console.log(ciudades);
// console.log(ordenes);
// console.log(datos);

//Entries iterador
//entries a las ciudades
for(let entrada of ciudades.entries()){
  //  console.log(entrada);
}

for(let entradas of ordenes.entries()){
  // console.log(entradas);
}

for(let entradas of datos.entries()){
   // console.log(entradas);
 }

//Values iterador
//values a las ciudades
for(let entrada of ciudades.values()){
 //  console.log(entrada);
 }
 for(let entradas of ordenes.values()){
   //  console.log(entradas);
 }
 
 for(let entradas of datos.values()){
    // console.log(entradas);
  }


//keys iterador
//keys a las ciudades
for(let entrada of ciudades.keys()){
    //  console.log(entrada);
    }
    for(let entradas of ordenes.keys()){
      //  console.log(entradas);
    }
    
    for(let entradas of datos.keys()){
      //  console.log(entradas);
     }


     
//default
for(let entrada of ciudades){
       // console.log(entrada);
    }
    for(let entradas of ordenes){
       // console.log(entradas);
    }
    
    for(let entradas of datos){
       // console.log(entradas);
     }


     //EJEMPLO DE ITERADOR

     const mensaje='Aprendiendo Javascript';
//modo antiguo
     for(let i=0;i<mensaje.length;i++){
        // console.log(mensaje[i]);
     }
// modo nuevo
     for(let letra of mensaje){
         console.log(letra);
     }