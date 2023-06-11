function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function clickBotao(){
    const entrada1 = document.querySelector('#entrada1')
    const entrada2 = document.querySelector('#entrada2')
    let saida = document.querySelector('#saida')

    const randomNumber = getRandom(entrada1.value, entrada2.value)

    saida.innerHTML = randomNumber   

}





