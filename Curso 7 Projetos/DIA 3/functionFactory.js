/* O que está acontecendo aqui:
A função criaLivro fabrica objetos de livro.
Recebe parâmetros (titulo, autor, paginas) e os utiliza para montar um objeto personalizado.
Esse objeto contém:
Três propriedades (tituloLivro, autorLivro, paginasLivro)
Um método printLivro().
Depois, retorna esse objeto. Ou seja, sempre que você chama criaLivro(...), você ganha um novo objeto montado com os dados fornecidos. */
function criaLivro(titulo, autor, paginas){
    const livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        paginasLivro: paginas,
        printLivro: function() {
            console.log('Printing...')
        }
    }
    return livro
}

const livro1 = criaLivro("Atomic", "James", 306)
const livro2 = criaLivro("Think", 'Napoleão', 405)

console.log(livro1)
console.log(livro2)