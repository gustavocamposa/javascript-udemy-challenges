/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function imprimirIntervalo(numeros) {
    let intervalo = 0
    let foraIntervalo = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            intervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log('Quantidade no intervalo: ' + intervalo)
    console.log('Quantidade fora do intervalo: ' + foraIntervalo)
}

const nums = [1, 2, 4, 6, 10, 11, 15, 18, 19, 20, 21, 22, 26]
imprimirIntervalo(nums)