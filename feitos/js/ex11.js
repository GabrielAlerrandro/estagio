// E.11 Imprima todos os elementos em que a idade é menor que 30 anos.
let tamanho = 0
const exe = [
    { id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }
]



for (a in exe) {
    tamanho++
}

for (i = 0; i < tamanho; i++) {
    if (exe[i].idade < 30) {
        console.log(exe[i])
    }

}