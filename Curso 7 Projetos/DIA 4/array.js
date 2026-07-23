//arrays

/*const friend = ['João', 'Davi', 'Kevin']
const num = [1, 2, 3, true]

console.log(friend)
console.log(num)
console.log(friend.length)*/

const num =[ 7, 8, 9]//Aqui o array é declarado e possui 3 elementos(index[0], index[1], index[2])
console.log(num)

num.push(10, 11, 12)//Adiciona elementos ao final do array
console.log(num)

num.unshift(1, 2, 3)//Adiciona elementos ao início do array
console.log(num)

num.splice(3, 0, 4, 5, 6)//Adiciona elementos em uma posição específica index[3] do array
console.log(num)//Exibe o array atualizado

console.log(num.indexOf(5))//Exibe o índice do elemento 5 no array, se não existir retorna -1
console.log(num.includes(5))//Verifica se o elemento 5 existe no array, retorna true ou false