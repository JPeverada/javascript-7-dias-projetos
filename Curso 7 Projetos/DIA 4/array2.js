//array - localizando itens em uma array de referencia

const movies = [
    {id: 1, movieName: 'Back to the Future'},
    {id: 2, movieName: 'The Matrix'},
    {id: 3, movieName: 'Transformers'}
]

//console.log(movies)

console.log(movies.includes({id: 1, movieName: 'Back to the Future'})) // false
// includes verifica se o item existe na array, mas não compara objetos por referência
console.log(movies.find(function(movie){
    return movie.movieName == 'Back to the Future';
})) // usa find para localizar o item na array com uma função de callback, retornando o valor do item encontrado