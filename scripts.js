let palavra = 'carro',
    letra = 'r',
    total = 0,
    totalAProcurar = 2,
    indice = 0;

while(total < totalAProcurar && indice < palavra.length){
    if(palavra[indice] === letra){
        total++;
    }

    indice++;
}

if(total >= totalAProcurar){
    console.log('SIM');
}else{
    console.log('NÃO');
}