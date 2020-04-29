//Recorrer un arreglo con forEach

const pendientes =['Tarea','Comer','Proyecto','Aprender Javascript'];

//For

for(let i=0; i<pendientes.length;i++){
    // console.log(pendientes[i]);
}

//forEach

pendientes.forEach(function(pendiente,index){
    // console.log(`${index}: ${pendiente}`);
});

//Map para recorrer un arreglo de objetos

const carrito = [
    {id: 1, producto:'Libro'},
    {id: 2, producto:'Camisa'},
    {id: 3, producto:'Guitarra'},
    {id: 4, producto:'Disco'}
];

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})

//console.log(carrito);
//console.log(nombreProducto);


//EJEMPLO 3

const automovil={
    modelo: 'Camaro',
    motor: 6.1,
    anio:1969,
    marca: 'Chevrolet'
}

for (let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}
