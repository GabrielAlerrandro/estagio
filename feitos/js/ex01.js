/* Crie uma função que recebe dois argumentos string e retorna o de maior
comprimento. */

function tamanho(tam01, tam02) {


    for (comprimento01 in tam01) {

        comprimento01++

    }

    for (comprimento02 in tam02) {
        comprimento02++

    }
    comprimento01 > comprimento02 ? console.log("comprimento01") : console.log("comprimento02")


}
tamanho("tam01", "tam02")

