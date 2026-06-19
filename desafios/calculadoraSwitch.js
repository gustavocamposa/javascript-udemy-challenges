/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

function calculadoraSimples(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            console.log(`O resultado é: ${num1 + num2}`)
            break
        case '-':
            console.log(`O resultado é: ${num1 - num2}`)
            break
        case '*':
            console.log(`O resultado é: ${num1 * num2}`)
            break
            case '/':
                console.log(`O resultado é: ${num1 / num2}`)
                break
                default:
                    console.log('Esse operador não é reconhecido pela nossa calculadora.')
    }
}

calculadoraSimples(2, '+', 3)
calculadoraSimples(2, '*', 3)
calculadoraSimples(3, '-', 2)
calculadoraSimples(6, '/', 2)
calculadoraSimples(6, '%', 2)