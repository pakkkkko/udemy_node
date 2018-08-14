console.log('inicio del programa');


setTimeout(function(){
    console.log('primer timeout');
}, 3000);

setTimeout(function(){
    console.log('Segundo timeout');
}, 0);

setTimeout(function(){
    console.log('Tercer timeout');
}, 0);

console.log('fin del programa');