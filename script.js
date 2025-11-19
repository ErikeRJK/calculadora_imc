const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const resImc = document.getElementById("res-imc");
const resMsg = document.getElementById("res-msg");


function calcularImc(){
    const pesoFloat = parseFloat(peso.value);
    const alturaFloat = parseFloat(altura.value) / 100;

    const imc = pesoFloat / (alturaFloat * alturaFloat)

    resImc.textContent = imc.toFixed(2)

    let msg = ""

    if(imc < 18.5){
        msg = "VocÊ está abaixo do peso !"
    }
    if(imc >= 18.5 && imc <= 24.9){
        msg = "VocÊ está no peso ideal !"
    }
    if(imc >= 25 && imc <= 29.9){
        msg = "VocÊ está sobrepeso !"
    }
    if(imc >= 30){
        msg = "VocÊ está obeso !"
    }

    resMsg.textContent = msg

    resultado.classList.remove("hidden")
}

btn.addEventListener("click", calcularImc)