let precos = [2, 1, 5, 3, 8, 4];

function soma(...numeros){
    let total = 0;
    for(let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return total;
}

console.log(soma(...precos));

