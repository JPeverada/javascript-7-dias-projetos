
function CriaLivro(titulo, autor, paginas){
    this.tituloLivro = titulo;
    this.autorLivro = autor;
    this.paginasLivro = paginas
}

const livro1 = new CriaLivro('Atomic', 'Jame', 306)

console.log(livro1)