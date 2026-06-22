/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

function multiplicarVetor(numeros, fator) {
    return numeros.map(num => num * fator)
}

function multiplicarMaioresQueCinco(numeros, fator) {
    return numeros.map(num => num > 5 ? num * fator : num)
}

const vet = [2, 4, 6, 8]

console.log(multiplicarVetor(vet, 3))

console.log(multiplicarMaioresQueCinco(vet, 3))
