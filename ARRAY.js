
/*let nombre = prompt('Cual es tu nombre?');
let edad = prompt('Cual es tu edad?');

document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad}`;

let name;
name = 'Juan';
name='Juan Pablo';
mensaje='Y entonces dije \'Buen curso\'';
mensaje=20;

let aprendiendo="Curso de", 
    tecnologia="JAVASCRIPT";
console.log(`${aprendiendo} ${tecnologia}`);

*/
const meses =["Enero","Febrero","Marzo","Abril"];
//Añadir en un arreglo
meses[4]="Mayo";
meses.push="Junio"; 

//Añadir al inicio del arreglo
meses.unshift("Mes 0");

//ELIMINAR UN ELEMENTO DEL ARREGLO
meses.pop();

//ELIMINAR UN ELEMENTO DEL ARREGLO(el primero)
meses.shift();
//QUITAR UN RANGO
meses.splice(2,1);
//REVERTIR
meses.reverse();
//Unir un arreglo con otro
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

//console.log(meses);
//console.log(arreglo1.concat(arreglo2));

const frutas = ['Platano','Manzana','Naranja','Zanahoria','Fresa'];
frutas.sort();
//console.log(frutas);

arreglo3=[12,1,3,4,51,525,3554,32,5];
arreglo3.sort(function(a,b){
    return a-b;
});
console.log(arreglo3);
