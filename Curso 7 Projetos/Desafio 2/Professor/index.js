

let productValue = Number(prompt('Entre com o valor do produto: '))
//Number(...) vai transformar o valor de entrada(string) em número;
//console.log(typeof(productValue)) Verifica o tipo da variável se é string, number e etc...

if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Approved'
} else{
    document.getElementById('result').innerHTML = 'Denied'
}