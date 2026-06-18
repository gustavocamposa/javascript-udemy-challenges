/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function retornarMontanteSimples(capitalInicial, juros, tempoAplicacao){
    console.log('O valor do juros simples é de: R$' + (capitalInicial * (1 + juros * tempoAplicacao))
)
}

function retornarMontanteComposto(capitalInicial, juros, tempoAplicacao) {
    const montante = capitalInicial * (1 + juros) ** tempoAplicacao
    console.log('O montante em juros compostos é de: R$' + montante.toFixed(2))
}

retornarMontanteSimples(500, 0.02, 12)
 retornarMontanteComposto(1000, 0.01, 3)