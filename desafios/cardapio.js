/* 19) O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto | Preço
100 |Cachorro Quente| R$ 3,00
200 |Hambúrguer Simples| R$ 4,00
300 |Cheeseburguer| R$ 5,50
400 |Bauru| R$ 7,50
500 |Refrigerante| R$ 3,50
600 |Suco| R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function valorParaPagar(codigo, quantidade) {
    let preco

    switch (codigo) {
        case 100:
            preco = 3.00
            break
        case 200:
            preco = 4.00
            break
        case 300:
            preco = 5.50
            break
        case 400:
            preco = 7.50
            break
        case 500:
            preco = 3.50
            break
        case 600:
            preco = 2.80
            break
        default:
            return 'Produto não existente'
    }

    return preco * quantidade
}

console.log(valorParaPagar(100, 5))
console.log(valorParaPagar(600, 4))
