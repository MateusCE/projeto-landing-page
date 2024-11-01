var SetaDireita = window.document.getElementById("seta-direta")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "displey:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Samantha.style - "display: flex"
    Bruna.style = "display: none"
    SetaEsquerda.style = "displey:flex; margin-top:55px"
    SetaDireita.style = "display:none"
}