//IIFE, funciones que se invocan inmediatamente
(function(tecnology){
    console.log(`Aprendiendo ${tecnology}`);
})('Javascript');

//Métodos de propiedad
// cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo ${id}`);
    },
    pausar: function(){
        console.log('pause a la musica');
    }
}

//los metodos tambien pueden guardarse o crearse fuera del objeto

musica.borrar = function(id){
    console.log(`Borrando la canción ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
