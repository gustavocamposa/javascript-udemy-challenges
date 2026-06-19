/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja nega */

function calcularMedia(codigo, nota1, nota2, nota3) {

    let maiorNota = Math.max(nota1, nota2, nota3)

    let media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 3) + maiorNota) / 10

    console.log(`Código: ${codigo}`)
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`)
    console.log(`Média: ${media.toFixed(2)}`)

    if (media >= 5) {
        console.log("APROVADO")
    } else {
        console.log("REPROVADO")
    }

}

calcularMedia(101, 7, 5, 8)
calcularMedia(102, 4, 3, 5)