//0) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificarDivisivel(numero){
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificarDivisivel(3))
console.log(verificarDivisivel(5))
console.log(verificarDivisivel(6))

