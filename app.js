const btnsNumeros = document.querySelectorAll('.btnNumeros');
const containerResuldado = document.querySelector('.container__resuldado');
const btnLimpar = document.getElementById('botao-ce');
const btnsCalculo = document.querySelectorAll('.btnCalculo');
const btnCalcular = document.querySelector('#botao-calcular');
console.log(btnsNumeros)

let n1 = "";
let n2 = "";
let calculoSerFeito = "";


btnsNumeros.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const idDoBtn = btn.getAttribute('id');
        const numeroDoCalculo = parseInt(idDoBtn.split('-')[1]);
        containerResuldado.innerHTML +=  `<h2 class="calculo">${numeroDoCalculo}</h2>`

        if(!calculoSerFeito){
            n1 += numeroDoCalculo
        } else {
            n2 += numeroDoCalculo
        }
    })

})

btnsCalculo.forEach(btn =>{
    btn.addEventListener('click', () =>{
      const idDobtnCalcular = btn.getAttribute('id');
      const simboloDoCalculo = idDobtnCalcular.split('_')[1];
      calculoSerFeito = simboloDoCalculo
      containerResuldado.innerHTML +=  `<h2 class="calculo">${simboloDoCalculo}</h2>`
    })
})

btnCalcular.addEventListener('click', () =>{
    numeroDaSoma1 = parseFloat(n1);
    numeroDaSoma2 = parseFloat(n2);
    console.log(n1, n2, calculoSerFeito)
    containerResuldado.innerHTML = `<h2 class="calculo"></h2>`;
    
    switch (calculoSerFeito){
        case "+": 
            containerResuldado.innerHTML =  `<h2 class="calculo">${n1} + ${n2}=${numeroDaSoma1+numeroDaSoma2}</h2>`;
            break;
        case "-":
            containerResuldado.innerHTML =  `<h2 class="calculo">${n1} - ${n2}=${numeroDaSoma1-numeroDaSoma2}</h2>`;
            break;
        case "*":
            containerResuldado.innerHTML =  `<h2 class="calculo">${n1} x ${n2}=${numeroDaSoma1*numeroDaSoma2}</h2>`;
            break;
        case "/":
            containerResuldado.innerHTML =  `<h2 class="calculo">${n1} / ${n2}=${numeroDaSoma1/numeroDaSoma2}</h2>`;
            break;
        default:
            containerResuldado.innerHTML = `<h2 class="calculo">Erro</h2>`
    }
})

btnLimpar.onclick = () =>{
    containerResuldado.innerHTML = `<h2 class="calculo"></h2>`
    n1 = "";
    n2 = "";
    calculoSerFeito = "";
}

