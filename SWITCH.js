// switch

const metodoPago='efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}

//ejemplo con fechas

let mes;

switch(new Date().getMonth()){
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'Febrero';
        break;
    case 2:
        mes = 'Marzo';
        break; 
    case 3:
        mes = 'Abril';
        break; 
    case 4:
        mes = 'Mayo';
        break;     
    case 5:
        mes = 'Junio';
        break;     
    case 6:
        mes = 'Julio';
        break; 
    case 7:
        mes = 'Agosto';
        break;    
    case 8:
        mes = 'Setiembre';
        break;    
    case 9:
        mes = 'Octubre';
        break;
    case 10:
        mes = 'Noviembre';
        break;    
    case 11:
        mes = 'Diciembre';
        break;   
    
}

console.log(`Este mes es ${mes}`);