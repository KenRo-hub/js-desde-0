//creando objetos
const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador grafico',
    email: 'correo@coreo.com',
    edad: 20,
    musica: ['Trance','Rock','Grunge'],
    hogar: {
        ciudad:'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function() { 
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.nacimiento());

