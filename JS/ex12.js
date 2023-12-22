//E.12 Ordene o array de forma decrescente por idade, em case de empate o desempate é pelo id

const ex = [
    { id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }
]


count = 0
arraynew = [...ex]
for (a in arraynew) {
    count++
}

ordem = []

for (i = 0; i < count; i++) {

    if (arraynew[0].idade > arraynew[i].idade) {
        ordem += "{ id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 }\n"
        arraynew[0].idade = 0
    }
    if (arraynew[1].idade > arraynew[i].idade && arraynew[1].id > arraynew[i].id) {

        ordem += "{ id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 }\n"
        arraynew[1].idade = 0
    }

    if (arraynew[2].idade > arraynew[i].idade) {

        ordem += "{ id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 }\n"
        arraynew[2].idade = 0
    }

    if (arraynew[3].idade > arraynew[i].idade && arraynew[3].id > arraynew[i].id) {

        ordem += "{ id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }\n"
        arraynew[3].idade = 0
        arraynew[3].id = 0
    }

}



console.log(ordem)


/* CÓDIGO CASO O ID 2 VIER PRIMEIRO:

for (i = 0; i < count; i++) {

    if (arraynew[0].idade > arraynew[i].idade) {
        ordem += "{ id: 1, nome: 'jose', sobrenome: 'da silva', idade: 42 }\n"

        arraynew[0].idade = 0
    }
    if (arraynew[1].idade > arraynew[i].idade) {

        ordem += "{ id: 2, nome: 'joão', sobrenome: 'gonçalves', idade: 21 }\n"
        arraynew[1].idade = 0
    }

    if (arraynew[2].idade > arraynew[i].idade) {

        ordem += "{ id: 3, nome: 'pedro', sobrenome: 'garcia', idade: 28 }\n"
        arraynew[2].idade = 0
    }

    if (arraynew[3].idade > arraynew[i].idade) {

        ordem += "{ id: 4, nome: 'matheus', sobrenome: 'pinheiro', idade: 21 }\n"
        arraynew[3].idade = 0
    }
}
*/