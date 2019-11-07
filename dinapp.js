
var nao_fazer = ['aposente',"veja o jornal",'compre salame','saia de casa', 'compre cenoura', 'jogue boliche', 'coma bolacha negresco', "compre cartão Spotify sem ler"]
var quando = ['no natal','hoje', 'amanhã', 'de noite', 'esse mês', "esta semana"]


var problema = ['vai faltar pastel',"vai quebrar o controle do vhs","vai cair sal na sua banana", 'vai cair um balão', 'vai chover no seu uno 92', 'vai tomar picada de marimbondo', 'vai passar o filme do power ranger']
var quando_onde = ["na sua vó","na sua frente", 'na sua casa', 'no quintal do vizinho', 'no seu cu', 'na sessao da tarde']


var max_nf = problema.length - 1,
    max_q = quando.length - 1,
    max_p = problema.length - 1,
    max_qo = quando_onde.length - 1



function bencaGenerator(){
    var num1 = Math.floor(max_nf * Math.random())
    var num2 = Math.floor(max_q * Math.random())
    var num3 = Math.floor(max_p * Math.random())
    var num4 = Math.floor(max_qo * Math.random())
    var aux = 'ão ' + nao_fazer[num1] + ' ' + quando[num2]+' ' + 'senão ' + problema[num3]+' ' + quando_onde[num4]
    aux = aux.toUpperCase()
    return 'n' + aux
}
document.getElementById("botao2").style.display="none"

document.getElementById("botao1").onclick = function() {
    document.getElementById("texto").innerHTML = bencaGenerator()
    this.style.display = "none"
    document.getElementById("botao2").style.display="block"

}

document.getElementById("botao2").onclick = function() {
    document.getElementById("texto").innerHTML = bencaGenerator()
}



