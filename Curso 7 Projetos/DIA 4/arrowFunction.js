//Arrow Function -> Função de seta
// Arrow function é uma forma mais curta de escrever funções em JavaScript, especialmente útil para callbacks
const movies = [
    {id: 1, movieName: 'Back to the Future'},
    {id: 2, movieName: 'The Matrix'},
    {id: 3, movieName: 'Transformers'}
]

console.log(movies.find(movie => movie.movieName == 'Back to the Future')); // usa arrow function para localizar o item na array, retornando o valor do item encontrado
// A arrow function é mais concisa e legível, especialmente quando usada com métodos de array