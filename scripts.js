let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;

    let qtdTotalCarnes = carnesPP(horas) * adultos + (carnesPP(horas) / 2 * criancas);
    let totCerveja = cervejaPP(horas) * adultos;
    let totRefrigerante = refrigerantePP(horas) * adultos + (refrigerantePP(horas) / 2 * criancas);

    resultado.innerHTML = `<p><br><b>Voce vai precisar de: </b></p>`
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/carne.png" alt="">
        <p>${qtdTotalCarnes/1000}Kg de carne</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/lata-de-cerveja.png" alt="">
        <p>${Math.ceil(totCerveja / 355)} Latas de cerveja</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/refrigerante.png" alt="">
        <p>${Math.ceil(totRefrigerante / 2000)} garrafas de bebidas (2L)</p>
        </div>       
        `
    
    resultado.innerHTML += `<button href="#resultado2" onclick="mais()">mostrar mais</button>`
}

function carnesPP(horas){
    if(horas >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(horas){
    if(horas >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function refrigerantePP(horas){
    if(horas >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

//DIVISAO DAS CARNES
//VALOR DAS CARNES COM %  DIFERENTES
//50%, 20%, 30%
//CARNE VERM, FRANGO, LINGUIÇA

function mais(){
    console.log("somando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;

    let qtdTotalCarnes = carnesPP(horas) * adultos + (carnesPP(horas) / 2 * criancas);

    let vCarnes = qtdTotalCarnes.value;

    let carneV = qtdTotalCarnes * 50 /100; 
    let frango = qtdTotalCarnes * 20 /100;
    let linguica = qtdTotalCarnes * 30 /100;

    resultado2.innerHTML = `${(carneV / 1000)} kg de carne Vermelha `
    resultado2.innerHTML += `${(linguica / 1000)} kg de linguiça `
    resultado2.innerHTML += `${(frango / 1000)} kg de frango `

    console.log(linguica)

    // 50% * carne / 100
    // 30% * carne / 100
    // 20% * carne / 100
}

function carnesPP(horas){
    if(horas >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(horas){
    if(horas >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function refrigerantePP(horas){
    if(horas >= 6){
        return 1500;
    }else{
        return 1000;
    }
}