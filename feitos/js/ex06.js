/*
E.6. Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene
os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1
nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver
entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso
contrário.
*/

let encontrado = 0
let arr = []
for (i = 0; i < 10; i++) {
    perg = prompt("Digite um nome")
    arr[i] = (perg)
}

achar = prompt("Que nome que achar?")
for (a in arr) {
    if (achar === arr[a]) {
        encontrado = 1
    }
}
if (encontrado === 1) {
    console.log("ACHEI")
} else {
    console.log("NÃO ACHEI")
}
