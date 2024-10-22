let arr = [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5]

function quicksort (array) {
// se array for um numero só, já está ordenado,
// então retorna ele
if (array.length <= 1) {
    return array;
}

// escolha um pivo
let pivo = array [0]
// criar duas variaveis, esquerda e direita
let esquerda = []
let direita = []

// percorro o meu array e para cada numero
// verifico se ele é maior ou menor que o pivo
// e posiciono ele no array esquerda ou direita
for (let i=1; i < array.length; i++) {
 if (array[i] < pivo){
    esquerda.push (array[i])
 } else {
    direita.push (array[i])
 }
}
return quicksort(esquerda).concat(pivo, quicksort(direita))
//escrever uma recursão para chamar novamente o
//quicksort , uma x para a esquerda e um x para a direita
}
console.log(quicksort(arr))