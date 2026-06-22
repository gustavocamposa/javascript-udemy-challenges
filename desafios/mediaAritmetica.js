/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

function calcularMediaAritmetica(numeros){

    let media = 0

    for(let i = 0; i < numeros.length; i++){
        media += numeros[i] / numeros.length
    }
    return media
}

const nums = [3, 6, 8, 1, 2, 6, 4, 8]
console.log('O resultado da média aritmética é de: ' + calcularMediaAritmetica(nums))