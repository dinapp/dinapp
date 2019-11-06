
var nao_fazer = ['saia de casa', 'compre cenoura', 'jogue boliche', 'coma bolacha negresco', "compre cartão Spotify sem ler"]
var quando = ['hoje', 'amanhã', 'de noite', 'esse mês', "esta semana"]


var problema = ["vai cair sal na sua banana", 'vai cair um balão', 'vai chover no seu uno 92', 'vai tomar picada de marimbondo', 'vai passar o filme do power ranger']
var quando_onde = ["na sua frente", 'na sua casa', 'no quintal do vizinho', 'no seu cu', 'na sessao da tarde']


var max_r = problema.length - 1

function bencaGenerator(){
    var num1 = Math.floor(max_r * Math.random())
    var num2 = Math.floor(max_r * Math.random())
    var num3 = Math.floor(max_r * Math.random())
    var num4 = Math.floor(max_r * Math.random())
    return 'não ' + nao_fazer[num1] + ' ' + quando[num2]+' ' + 'senão ' + problema[num3]+' ' + quando_onde[num4]
}

document.getElementById("botao1").onclick = function() {
    document.getElementById("texto").innerHTML = bencaGenerator()
    this.style.display = "none"
}



