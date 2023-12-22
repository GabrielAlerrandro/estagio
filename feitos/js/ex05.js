//E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} 
//substitua os números na frase T35t3 d3 35t4g1o conforme o dicionário.

stringNew = ''

function tradutor(frase) {
    arr = [...frase]

    for (i = 0; i < frase.length; i++) {
        if (arr[i] === '4') {
            arr[i] = 'a'
        }
        else if (arr[i] === '3') {
            arr[i] = 'e'

        }
        else if (arr[i] === '1') {
            arr[i] = 'i'
        }
        else if (arr[i] === '5') {
            arr[i] = 's'
        }
        stringNew += arr[i]
    }
    return console.log(stringNew)
}
tradutor("T35t3 d3 35t4g1o")