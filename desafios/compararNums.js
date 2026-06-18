/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

function compararValor(numeros) {
    let maior = numeros[0]
    let menor = numeros[0]
    let recordes = 0
    let piorJogo = 0

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
            recordes++
        }

        if (numeros[i] < menor) {
            menor = numeros[i]
            piorJogo = i
        }
    }

    console.log('Você bateu seu recorde ' +recordes + ' vez(es)')
    console.log('Seu pior jogo foi no jogo: ' +piorJogo )
    
}

const pontuacoes = [14, 16, 5, 6, 8, 10, 1];

(compararValor(pontuacoes))