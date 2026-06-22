/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocarElementos(v1, v2) {
    if (v1.length !== v2.length) {
        console.log('Os vetores devem ter o mesmo tamanho.')
        return
    }

    for (let i = 0; i < v1.length; i++) {
        [v1[i], v2[i]] = [v2[i], v1[i]]
    }
}

let vetorA = [1, 5, 6, 8, 2, 4]
let vetorB = [9, 2, 5, 8, 5, 3]

trocarElementos(vetorA, vetorB)

console.log(vetorA)
console.log(vetorB)