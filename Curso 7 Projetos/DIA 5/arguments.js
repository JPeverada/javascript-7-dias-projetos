

function preco(){
    let total = 0
    for (let value of arguments){// vai pegar o primeiro parâmetro(10)
        total += value;// vai pegar o total que é "0" e vai adicionar o valor "10" que é o primeiro parâmetro
    }
    return total;
}

console.log(price(10,20,50,40))

