// E.10 Imprima o objeto se existir alguém com menos 26 anos.

const exe = [
    { id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }
]

for (a in exe) {
    if (exe[a].idade < 26) {
        console.log(exe[a])
    }
}