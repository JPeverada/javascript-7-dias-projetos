function ItemAnunciado(nome,tipo,preco,descricao,vendedor,contato){
    this.nomeProduto = nome;
    this.tipoProduto = tipo;
    this.precoProduto = preco;
    this.descricaoProduto = descricao;
    this.nomeVendedor = vendedor;
    this.contatoVendedor = contato
}

const form = document.getElementById('formAnuncio')//Quando é formulário seleciona ele todo pra fazer o event

form.addEventListener('submit',function(event){// Evento -> o que acontece quando clica no botão
    event.preventDefault()//Impede o recarregamento da página

    let nome = document.getElementById('nome').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let preco = document.getElementById('preco').value
    let vendedor = document.getElementById('vendedor').value
    let contato = document.getElementById('contato').value

    if (preco >= 20){
        const item = new ItemAnunciado(nome,tipo,descricao,preco,vendedor,contato)

        let resultado = document.getElementById('res')
        resultado.innerHTML = `
        <div class="produto-info">
            <p><strong>Nome do Produto:</strong> ${nome}</p>
            <p><strong>Tipo do Produto:</strong> ${tipo}</p>
            <p><strong>Descrição:</strong> ${descricao}</p>
            <p><strong>Preço:</strong> R$${preco}</p>
            <p><strong>Vendedor:</strong> ${vendedor}</p>
            <p><strong>Contato:</strong> ${contato}</p>
        </div>
        `


        
        alert('Produto Anunciado!!')
        console.log(item)
    } else {
        alert('Valor do produto tem que ser maior do que R$20!!')
    }
       
})

