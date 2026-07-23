//Removendo item do Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers.pop(); // Remove o último item do array
numbers.shift(); // Remove o primeiro item do array
numbers.splice(2, 1); // Remove o item no índice 2 (terceiro item)
console.log(numbers);