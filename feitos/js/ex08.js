/*
E.8 Imprima uma mensagem de saudação com o nome completo para cada um dos
objetos. O nome deve ter a primeira letra maiúscula.
Ex.:
Olá, José de tal!
Olá, João da silva!
*/
const exe = [
    { id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }
]
arr = []
stringNew = ''

for (i = 0; i < exe.length; i++) {
    arr = [...exe[i].nome]
    stringNew = ''
    switch (exe[i].id) {
        case 1:
            arr[0] = 'J';
            for (v = 0; v < arr.length; v++) {
                stringNew += arr[v]
            }
            break;
        case 2:
            arr[0] = 'J';
            for (v = 0; v < arr.length; v++) {
                stringNew += arr[v]
            }
            break;
        case 3:
            arr[0] = 'P';
            for (v = 0; v < arr.length; v++) {
                stringNew += arr[v]
            }
            break;
        case 4:
            arr[0] = 'M';
            for (v = 0; v < arr.length; v++) {
                stringNew += arr[v]
            }
            break;
        default:
            break;

    }
    console.log(`Olá, ${stringNew} ${exe[i].sobrenome}!`)
}
