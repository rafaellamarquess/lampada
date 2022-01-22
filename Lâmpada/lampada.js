const botaoLigarDesligar = document.querySelector("#botaoLigarDesligar")
const lampada = document.querySelector("#lampada")

const LigarLampada = () => {
    if (!SeEstiverQuebrada())
        lampada.src = "lampadaligada.jpg"
}

const DesligarLampada = () => {
    if (!SeEstiverQuebrada())
    lampada.src = "lampadadesligada.jpg"
}


const LampadaQuebrada = () => {
    lampada.src = "lampadaquebrada.jpg"
}

const SeEstiverQuebrada = () => {
    return lampada.src.indexOf("quebrada") > -1
}
 
const lampOnOff = () => {
    if(botaoLigarDesligar.textContent == "Ligar") {
        LigarLampada()
        botaoLigarDesligar.textContent = "Desligar"
    }else {
        DesligarLampada()
        botaoLigarDesligar.textContent = "Ligar"
    }
}

botaoLigarDesligar.addEventListener("click", lampOnOff)

lampada.addEventListener("dblclick", LampadaQuebrada)