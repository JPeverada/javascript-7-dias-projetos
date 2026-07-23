//Verificando elementos de um array
//Filtrando elementos de um array

// Verificando se todos os elementos de um array atendem a uma condição
const tempLondon = [18, -13, 8, 2, 0 -2]

const tempNegative = tempLondon.every(temp => temp < 0);//Cheaca se todos os elementos do array são negativos
console.log(tempNegative); // Exibe: false, pois nem todos os elementos são negativos

// Verificando se algum elemento de um array atende a uma condição
const tempPositive = tempLondon.filter(temp => temp > 0);
console.log(tempPositive); // Exibe: true, pois todos os elementos são positivos

