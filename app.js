const btnsNumeros = document.querySelectorAll('.btnNumeros');
const containerResuldado = document.querySelector('.container__resuldado');
const btnLimpar = document.getElementById('botao-ce');
const btnsCalculo = document.querySelectorAll('.btnCalculo');

let n1 = "";
let n2 = "";
let calculoSerFeito = "";


btnsNumeros.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const idDoBtn = btn.getAttribute('id');
        const numeroDoCalculo = parseInt(idDoBtn.split('-')[1]);
        containerResuldado.innerHTML +=  ` <h2 class="calculo">${numeroDoCalculo}</h2>`
        
        if (n1 && n2){
            alert("escolha qual calculo vc quer fazer");
            return
        }

        if(!n1){
            n1 = numeroDoCalculo
        } else {
            n2 = numeroDoCalculo
        }
    })

})

btnsCalculo.forEach(btn =>{
    btn.addEventListener('click', () =>{

    })
})

btnLimpar.onclick = () =>{
    containerResuldado.innerHTML = `<h2 class="calculo"></h2>`
    n1 = "";
    n2 = "";
}

