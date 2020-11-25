
function tabuada(numero = 0, limite = 10){
    for(var j = 1; j <= limite; j++){
        console.log(`${numero} x ${j} = ${numero*j}`);
    }
}

tabuada(6, 3);