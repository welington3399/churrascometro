//CALCULO DE INSUMOS

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
    
    resultado.innerHTML += `<button href="#resultado2" onclick="mais()">mostrar mais</button>
                            
                            `
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

    resultado2.innerHTML =
    `<div  id="divChurras">
        <div class="format">
            <img class="img_prod" src="imagens/perna-de-porco.png" alt="">
            <p>${(carneV / 1000)} Kg de carne vermelha</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/linguica.png" alt="">
            <p>${(linguica / 1000)} Kg de linguiça</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/coxa-de-frango.png" alt="">
            <p>${(frango / 1000)} Kg de frango</p>
        </div>
    </div>`

    console.log(linguica)

    // DIVISAO DAS BEBIDAS ALCOOLICAS
    // 30% shoop 40% cerveja 30% dinks

    console.log("somando alcoolicas...")

    let totCerveja = cervejaPP(horas) * adultos;

    let cerveja = totCerveja * 40 /100; 
    let shoop = totCerveja * 30 /100;
    let drinks = totCerveja * 30 /100;

    resultado2.innerHTML +=
    `<div  id="divAlcoolicas">
        <div class="format">
            <img class="img_prod" src="imagens/lata-de-cerveja2.png" alt="">
            <p>${Math.ceil(cerveja / 355)} cerveja</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cerveja.png" alt="">
            <p>${Math.ceil(shoop / 355)} shoop</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cocktail.png" alt="">
            <p>${Math.ceil(drinks / 355)} drinks</p>
        </div>
    </div>`

    // DIVISAO DOS REFRIGERANTES
    // 30% shoop 40% cerveja 30% dinks

    console.log("somando alcoolicas...")

    let totRefrigerante = refrigerantePP(horas) * adultos + (refrigerantePP(horas) / 2 * criancas);

    let coca = totRefrigerante * 60 /100; 
    let sprite = totCerveja * 10 /100;
    let guarana = totCerveja * 30 /100;

    resultado2.innerHTML +=
    `<div  id="divAlcoolicas">
        <div class="format">
            <img class="img_prod" src="imagens/coca.png" alt="">
            <p>${Math.ceil(coca / 2000)} coca-cola</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cerveja.png" alt="">
            <p>${Math.ceil(guarana / 2000)} guarana</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cocktail.png" alt="">
            <p>${Math.ceil(sprite / 355)} sprite</p>
        </div>
    </div>`
}


