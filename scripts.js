let numeroEscolhido = Math.floor((Math.random() * 9) + 1),
    acertou = false,
    palpite = '';


do{
    palpite = prompt('Qual o seu número?', 0);
    if(parseInt(palpite) === numeroEscolhido){
        acertou = true;
    }
}while(palpite !== '' && parseInt(palpite) !== numeroEscolhido);

if(acertou){
    console.log('Vitória');
}else{
    console.log('Não foi dessa vez');
}