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
    let totAlcolicas = alcolicaPP(horas) * adultos;
    let totSemAlcool = SemAlcoolPP(horas) * adultos + (SemAlcoolPP(horas) / 2 * criancas);

    resultado.innerHTML = `<p><br><b>Voce vai precisar de: </b></p>`
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/carne.png" alt="">
        <p>${(qtdTotalCarnes/1000).toFixed(2)}Kg de carne</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/lata-de-cerveja.png" alt="">
        <p>${Math.ceil(totAlcolicas / 355)} Bebidas Alcoolicas</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/refrigerante.png" alt="">
        <p>${Math.ceil(totSemAlcool / 2000)} Bebidas Sem Alcool (2L)</p>
        </div>       
        `
    
    resultado.innerHTML += `<button href="#resultado2" onclick="mais()">mostrar mais</button>`

    resultado.innerHTML += `<button onclick="toggle()">+informações</button>`
}

function carnesPP(horas){
    if(horas >= 6){
        return 650;
    }else{
        return 400;
    }
}

function alcolicaPP(horas){
    if(horas >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function SemAlcoolPP(horas){
    if(horas >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

// BALÃO DE AVISO

function info (){
    console.log("balao")

    infoo.innerHTML = `
        <div class="animacao">
            <p class="ali">tabela de valores usada para calculos</p>
            <table class="tabela">
                <tr>
                    <td></td>
                    <td>carnes</td>
                    <td>bebidas alcoolicas</td>
                    <td>bebidas sem alcool</td>
                </tr>
                <tr>
                    <td>&lt 5h</td>
                    <td>400g</td>
                    <td>1200ml</td>
                    <td>1000ml</td>
                </tr>
                <tr>
                    <td>&gt 6h</td>
                    <td>600g</td>
                    <td>2000ml</td>
                    <td>1500ml</td>
                </tr>
            </table>
        </div>
    `
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
            <p>${(carneV / 1000).toFixed(2)} Kg de carne vermelha</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/linguica.png" alt="">
            <p>${(linguica / 1000).toFixed(2)} Kg de linguiça</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/coxa-de-frango.png" alt="">
            <p>${(frango / 1000).toFixed(2)} Kg de frango</p>
        </div>
    </div>`

    console.log(linguica)

    // DIVISAO DAS BEBIDAS ALCOOLICAS
    // 30% shoop 40% cerveja 30% dinks

    console.log("somando alcoolicas...")

    let totAlcolicas = alcolicaPP(horas) * adultos;

    let cerveja = totAlcolicas * 40 /100; 
    let shoop = totAlcolicas * 30 /100;
    let drinks = totAlcolicas * 30 /100;

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

    // DIVISAO DAS BEBIDAS SEM ALCOOL
    // 30% shoop 40% cerveja 30% dinks

    console.log("somando alcoolicas...")

    let totSemAlcool = SemAlcoolPP(horas) * adultos + (SemAlcoolPP(horas) / 2 * criancas);

    let refrigerante = totSemAlcool * 50 /100; 
    let suco = totSemAlcool * 30 /100;
    let agua = totSemAlcool * 20 /100;

    resultado2.innerHTML +=
    `<div  id="divSemAlcool">
        <div class="format">
            <img class="img_prod" src="imagens/coca.png" alt="">
            <p>${Math.ceil(refrigerante / 2000)} refrigerante</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/suco.png" alt="">
            <p>${Math.ceil(suco / 2000)} suco</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/agua.png" alt="">
            <p>${Math.ceil(agua / 2000)} agua</p>
        </div>
    </div>`
}

function toggle() {
    conclusao = document.getElementById("conclusao");
    novo = document.getElementById("novo");

    if(conclusao.style.display == "none"){
    conclusao.style.display = "block";
    novo.style.display = "none";
    } else {
    conclusao.style.display = "none";
    novo.style.display = "block";
    }

    event.preventDefault();

    }