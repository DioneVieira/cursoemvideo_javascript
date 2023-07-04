let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(num)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`Nossos valores são ${num}. O vetor tem ${num.length} posições.`)

let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado!!!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
