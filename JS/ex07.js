/*
E.7 Faça um programa que leia três números e diga se eles constituem três elementos
seguidos da seqüência de Fibonacci.
*/
num1 = 1
num2 = 2
num3 = 3
fibonacci = [0, 1]
maior = 0
userNumber = [num1, num2, num3]

//Descobrindo qual qual é o maior valor entre os 3
if (num1 > num2 && num1 > num3) {
    userNumber[0] = num1
    maior = num1
    if (num2 > num3) {
        userNumber[1] = num2
        userNumber[2] = num3
    }
    else if (num3 > num2) {
        userNumber[1] = num3
        userNumber[2] = num2
    }

} else if (num2 > num1 && num2 > num3) {
    userNumber[0] = num2
    maior = num2
    if (num1 > num3) {
        userNumber[1] = num1
        userNumber[2] = num3
    }
    else if (num3 > num1) {
        userNumber[1] = num3
        userNumber[2] = num1
    }

} else if (num3 > num1 && num3 > num2) {
    userNumber[0] = num3
    maior = num3
    if (num2 > num1) {
        userNumber[1] = num2
        userNumber[2] = num1
    }
    else if (num1 > num2) {
        userNumber[1] = num1
        userNumber[2] = num2
    }
}


for (i = 2; i < maior + 1; i++) { // tentando criar a sequencia de fibonacci
    fibonacci[i] = (i - 1) + (i - 2)

}
console.log(fibonacci)




/* O que fazer?
1. Primeiro o usuario digita 3 valores - OK
2. Descobrimos qual é o maior valor entre os 3 - OK
3. Organiza os 3 em ordem crescente em um array - OK
4. Cria a sequencia de fibonacci até chegar ao maior valor - OK
5. Insere a sequencia criada em um array  - OK
6. Comparamos se cada index do array dos números digitados pelo usuários corresponde 
ao index do array da sequencia de fibonacci,
procurando assim descobrir se os 3 valores inseridos pelo usuário 
são três elementos seguidos da sequencia de fibonacci,  resolvendo assim o exercicio 
*/