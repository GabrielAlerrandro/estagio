// E.2 Crie uma função que receba uma string e imprima o valor ao contrário.

stringNew = ''
tamanho = 0
algo = 0
function inverso(str) {
    str = [...str]
    for (a in str) {
        tamanho++
        algo = tamanho
    }
    for (i = 0; i < tamanho; i++) {
        valores = str[algo - 1]
        stringNew += valores
        algo--

    }
    return console.log(stringNew)
}
inverso("String")