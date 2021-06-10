let qtd = document.querySelector("#qtd");
let qtdminus = document.querySelector("#qtdminus");
let qtdmore = document.querySelector("#qtdmore");
let qtd2 = document.querySelector("#qtd2");
let qtdminus2 = document.querySelector("#qtdminus2");
let qtdmore2 = document.querySelector("#qtdmore2");

qtdmore.addEventListener("click", ()=>{
    let valor = qtd.innerText
    valor = Number(valor) + 1
    qtd.innerText = valor
    
});

console.log(qtdminus)
qtdminus.addEventListener("click", ()=>{
    let valor = qtd.innerText
    valor = Number(valor) - 1
    if(valor <= 0){
        qtd.innerText = 0 
    }else{
        qtd.innerText = valor
    } 
    
});

qtdmore2.addEventListener("click", ()=>{
    let valor = qtd2.innerText
    valor = Number(valor) + 1
    qtd2.innerText = valor
    
});

qtdminus2.addEventListener("click", ()=>{
    let valor = qtd2.innerText
    valor = Number(valor) - 1
    if(valor <= 0){
        qtd2.innerText = 0 
    }else{
        qtd2.innerText = valor
    } 
    
});



