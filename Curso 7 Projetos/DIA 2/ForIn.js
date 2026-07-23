//For In
//O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre cada propriedade do objeto, permitindo que você acesse tanto a chave quanto o valor de cada propriedade.

const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'Pelotas'
}

for (let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`);
}