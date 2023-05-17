const numero = document.getElementById("inumero");
const botaoCalcular = document.querySelector(".botao__calcular");
const botaoLimpar = document.querySelector(".botao__limpar")
const resultado = document.querySelector(".resultado");

botaoCalcular.addEventListener('click', (e) => {
    e.preventDefault();

    if(numero.value === "") {
        window.alert("O campo não pode estar vazio!");
    }
    else if(numero.value < 2) {
        window.alert("Números menores que 2 não são primos");
        numero.value = "";
    }

    else {
        if(ehPrimo(numero.value)) {
            resultado.innerHTML = `
                <p class="resultado__texto">O número <span class="cor__destaque">${numero.value}</span> é primo</p>
            `;
            resultado.style.display = "block";
        }
        else {
            resultado.innerHTML = `
                <p class="resultado__texto">O número <span class="cor__destaque">${numero.value}</span> não é primo</p>
            `
            resultado.style.display = "block";
        }
    }
});

botaoLimpar.addEventListener('click', limparCampos);


function ehPrimo(numero) {
    for(let i = 2; i <= Math.sqrt(numero); i++) {
        if(numero % i === 0) {
            return false;
        }
    }

    return true;
}

function limparCampos() {
    numero.value = "";
    resultado.style.display = "none";
    resultado = "";
    resultado.innerHTML = "";
}