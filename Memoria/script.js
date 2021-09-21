let card = document.querySelectorAll('.cards')
let card2 = embaralhar(Array.from(card))
let table= document.querySelector('.table')
const button = document.querySelector('button')


const con=(e)=>{
    table.append(e)
}
card2.forEach(con)

let jogada = []

const click = (e)=>{
    e.onclick = ()=>flip2(e)   
}
const flip2 = (e)=>{ 
    console.log(e)
    marcaJogada(descobreElem(e))
    confereJogadas(e)  
}
const marcaJogada=(e)=>{
    console.log(e)
    jogada.push(e)
}
const voltaCarta=(e)=>{
    if(!e.className.includes('win'))e.classList.remove('flip')
    jogada=[]
}
const aplicaWins=(e)=>{
    if(e.className.includes('flip')){
        e.classList.add('win')  
        jogada=[]     
    }
}


const confereJogadas=(e)=>{
    if(jogada.length<=2){
        e.className.endsWith('flip') ? e.classList.remove('flip') : e.classList.add('flip') 
    }
    else{
        if(jogada[0]==jogada[1]){
            card.forEach(aplicaWins)
            jogada=[]
        }
        else{
            card.forEach(voltaCarta)
        }
    }   
}

const descobreElem=(e)=>{
    if(e.className.includes('aviao')){
        return 1
    }
    if(e.className.includes('bola')){
        return 2
    }
    if(e.className.includes('carrinho')){
        return 3
    }
    if(e.className.includes('dado')){
        return 4
    }
    if(e.className.includes('lapis')){
        return 5
    }
    if(e.className.includes('peao')){
        return 6
    }
}

function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
    return array;
}
const restart=()=>{
    window.location.reload(true)
}

button.onclick=()=>restart()
card.forEach(click)





