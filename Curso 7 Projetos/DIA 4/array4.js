//Concatenando arrays

const num = [0,1,2,3]
const letters = ['a', 'b', 'c']

all = num.concat(letters) // Concatena os dois arrays
console.log(all) // Exibe o array concatenado

half = all.slice(3,5)// Cria um novo array com os elementos do índice 3 ao 4 (5 não incluído)
console.log(half) // Exibe o novo array com os elementos selecionados