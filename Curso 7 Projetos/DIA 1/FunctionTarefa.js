/* 
Functions podem ser usadas para organizar o código, reutilizar lógicas e tornar o código mais legível.
// Funções são blocos de código que podem ser chamados em qualquer parte do código, evitando repetição e facilitando a manutenção.
// Funções podem receber parâmetros e retornar valores, permitindo que sejam usadas de forma flexível e dinâmica.
// Funções são declaradas com a palavra-chave 'function', seguida do nome da função, parênteses e chaves.
// Entre os parênteses, podem ser passados parâmetros, que são variáveis locais da função.
//Para cada parâmetro tem que ser passado um argumento quando a função é chamada.
*/
function salesStatus(status, total){
    console.log('Transaction status: ' + status + ' - Total: $' + total);
}

salesStatus('Approved', 30) // Chamada da função salesStatus com os argumentos 'Approved' e 30