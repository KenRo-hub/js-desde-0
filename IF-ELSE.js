    // const edad = 18;

    // if(edad =>  18){
    //     console.log('Si puedes entrar al sitio');
    // } else{
    //     console.log('No puedes entrar al sitio');
    // }

    //Comprobar que una variable tiene un valor
    //const puntaje= 1000;
    let puntaje;
    //if(puntaje){
        if(typeof puntaje != 'undefined'){
        console.log(`El puntaje fue de ${puntaje}`);
    }else{
        console.log('No hay puntaje');
    }

    // ejemplo 2

    let efectivo=500;
    let totalCarrito=300;
     
    if(efectivo > totalCarrito){
        console.log(`gracias por la compra`);
    }else{
        console.log('No hay fondos');
    }

    //ejemplo 3

    let hora=24;
    if(hora > 0 && hora <= 10){
        console.log('Buenos dias');
    }else if(hora > 10 && hora <=18){
        console.log('Buenas tardes');
    }else if(hora > 18 && hora <=24){
        console.log('Buenas noches');
    }
    else{
        console.log('Hora no válida');
    }

    //ejemplo 4 (Ternario)

    const logueado= true;

    console.log(logueado === true ? 'Si se logueo' : 'No se logueo');


