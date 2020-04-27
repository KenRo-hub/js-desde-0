//funcion que no existe

try {
    algo();
} catch (error) {
    console.log(error);
}  


function ObtenerClientes(){
    console.log('Descargando...');

    setTimeout(function(){
        console.log('Completo')
    },3000);
}
ObtenerClientes();