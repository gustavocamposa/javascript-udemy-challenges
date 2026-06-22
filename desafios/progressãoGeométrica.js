/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos */

function progressaoAritmetica(n, a1, r) {
    let termo = a1
    let soma = 0

    for (let i = 1; i <= n; i++) {
        console.log(termo) 
        soma += termo      
        termo += r        
    }

    console.log("Soma:", soma)
}

function progressaoGeometrica(n, a1, r) {
  let termo = a1
  let soma = 0

  for (let i = 1; i <= n; i++) {
    console.log(termo)
    soma += termo
    termo *= r
  }

  console.log("Soma:", soma)
}

progressaoAritmetica(5, 2, 3)
progressaoGeometrica(5, 2, 3)