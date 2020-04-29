let altura, anchura;
// altura=window.outerHeight;
// anchura=window.outerWidth;

altura=window.innerHeight;
anchura=window.innerWidth;

// console.log(altura);
// console.log(anchura);

//UBICACION
let ubicacion;

ubicacion=window.location.search;
//REDIRECCIONAMIENTO A TWITTER :V

//window.location.href='http://twitter.com'

// historial del navegador
//window.history.go(-2);
//manera extraña de acceder al cache.
//dificil de manipular


//Navigator

ubicacion =  window.navigator;
ubicacion =  window.navigator.appName;
ubicacion =  window.navigator.appVersion;
ubicacion =  window.navigator.userAgent;

ubicacion =  window.navigator.language;

console.log(ubicacion);
