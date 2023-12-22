/*
E.4 Dado a seguinte string '[teste 1 de 2 string 3 ]',
 substitua todas as ocorrências de números pelo valor '[removido]'
*/

function remove(str) {
    str = '[teste 1 de 2 string 3]'
    stats = '[removido]'
    stringNew = ''

    arr = [...str]
    for (i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            stringNew += stats
        } else {
            stringNew += arr[i]
        }
    }
    return console.log(stringNew)
}

remove('[teste 1 de 2 string 3]')