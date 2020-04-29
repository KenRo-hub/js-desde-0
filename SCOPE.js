var a = 'a';
let b = 'b';
const c = 'c';

//SCOPE DE LA FUNCION

function functionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Funcion: '+a,b,c);
}
functionScope();

//SCOPE DE BLOQUE{}
if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: '+a,b,c);
}




console.log('GLOBALES:'+a,b,c)