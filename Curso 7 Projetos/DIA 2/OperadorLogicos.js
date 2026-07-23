//Operadores Lógicos
// && -> AND
// || -> OR
// ! -> NOT

let temIdadeMnima = true;
let temHabilitacao = true;
let podeDirigir = temIdadeMnima && temHabilitacao ? "Você pode dirigir" : "Você não pode dirigir";
console.log(podeDirigir);