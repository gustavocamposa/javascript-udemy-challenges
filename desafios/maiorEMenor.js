// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor 

function verificarMaiorEMenor(numeros) {
    let maior = numeros[0]
    let menor = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) maior = numeros[i]
        if (numeros[i] < menor) menor = numeros[i]
    }

    return { maior, menor }
}

const resultado = verificarMaiorEMenor([1, 6, 9, 5, 200, 20])
console.log(resultado)