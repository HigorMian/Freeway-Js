//codigo do carro

let xCarros = [600,600,600,600,600,600];
let yCarros = [40,100,150,210,270,318];
let velCarros = [2,3,4,3.5,5,4.7];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
    for(let i = 0 ; i < imagemCarros.length ; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
     
    }
}


function movimentaCarro(){
  for( let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros [i];
  }
}

function voltaPosicao(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarros){
  return xCarros < -40;
}
