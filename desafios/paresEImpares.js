// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function validarParesImpares(numeros) {

    let pares = []
    let impares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i])
        } else {
            impares.push(numeros[i])
        }
    }
    console.log('Quantidade de pares:', pares.length)
    console.log('Quantidade de ímpares:', impares.length)
}

const nums = [12, 3, 5, 6, 8, 1, 23, 4, 6, 8, 212, 1234]
console.log(validarParesImpares(nums))
