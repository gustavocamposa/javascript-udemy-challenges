/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console */

function verificarNegativos(numeros){

    let negativos = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            negativos++
        }
    }
    return console.log('A quantidade de negativos no vetor são: ' + negativos)
}

const nums = [-4, -7, 5, 3, 6, -1]
verificarNegativos(nums)

