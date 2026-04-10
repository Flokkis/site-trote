
 function calcular(){
    //pontuação itens avulsos
    //recupera a quantidade de arroz//
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    //recupera para uma variavel do JS a quantidade de óleo digitado pelo user
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
    //calcula a pontuação total//
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) + (qtdeOleo * 8)


    //pontuação dos kits alimentação
    //recupera a cor escolhida pelo usuario
    let cor = document.getElementById("cor").value
    //estrutura de seleção
    let metaKit //meta do kit de alimentação
    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }
    else if (cor == "laranja") {
        metaKit = 21
    }
    else if (cor == "preto" ) {

    }
    //obter o valor da quantidade de kits
    let qtdekits = Number (document.getElementById("qtdekits").value)
    //vamos verificar se a quantidade bateu
    if (qtdekits >= metaKit){
        pontos = pontos + 5000
        if (qtdekits > metaKit){
            pontos = pontos + (qtdekits - metaKit) * (5000/metaKit)
        }
    }
    else{
            pontos = pontos + ((qtdekits) * (5000/metaKit))
        }
    

    //mostramos a pontuação total ao usuario//
    document.getElementById ("result").innerText = "Pontuação:" + pontos
}