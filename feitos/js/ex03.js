// Crie uma função que recebe vários argumentos do tipo string e imprime todos
// juntos

stringNew = ''
tamanho = 0
function frase(...str) {
    for (a in str) {
        tamanho++
    }
    for (i = 0; i < tamanho; i++) {
        stringNew += str[i] + " "
    }

    return console.log(stringNew)
}
frase('Olá', 'mundo!')