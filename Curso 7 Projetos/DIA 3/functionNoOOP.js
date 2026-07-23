
const livro = {
    livroitulo: "Atomic Habits",
    livroAutor: "James Clear",
    livroPaginas: 306,
    livroCapitulos: {
        cap1: 'Fundamentos',
        cap2: 'Primeiro Passo'
    },
    printLivro: function(){
        console.log('Printing...')
    }
}

livro.printLivro()