//En Javascript existe un objeto llamado Date

const Diahoy = new Date();

// Fecha en especifo: Mes, Dia y Año

// let navidad2017 = new Date('12-25-2020');

let valor;
//mes
valor = Diahoy.getMonth();
//Dia
valor = Diahoy.getDate();
valor = Diahoy.getDay();
//obtener el año
valor = Diahoy.getFullYear();
//minutos
valor = Diahoy.getMinutes();
//hora
valor = Diahoy.getHours();
//get minutos y hours puede usarse para comparar el tiempo que inicio con el tiempo que termino, y retornar los minutos que realizo cierta actividad.


console.log(valor);