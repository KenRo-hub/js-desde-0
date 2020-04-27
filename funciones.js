/*
function hello(name) {
    console.log(`Hola ${name}`);
};

hello('Rominna');
*/

function saludar(nombre = 'Visitante') {
    // if (typeof nombre === 'undefined'){nombre='visitante'}
         return `hola ${nombre}`;
 }
 
 let saludo;
 saludo = saludar('Pepe');
 
 
 console.log(saludo);
 
 
         