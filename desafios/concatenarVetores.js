/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

function unirVetores(vetor1, vetor2, vetor3){
    return vetor1.concat(vetor2).concat(vetor3)
}

const vetorInteiro = [2, 4, 7, 8]
const vetorString = ["Oi", "Cod3r", "Teste", "Fim"]
const vetorDouble = [2.10, 2.15, 2.17, 2.03]

const resultado = unirVetores(vetorInteiro, vetorString, vetorDouble)
console.log(resultado)