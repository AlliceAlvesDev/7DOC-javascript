const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual ou quais linguagens de programação você está estudando?");
const mensagem = `Olá ${nome}, você tem ${idade} amos e já está aprendendo ${linguagem}!`;
alert (mensagem);


const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
const respostaUm = `Muito bom! Continue estudando e você terá muito sucesso.`
const respostaDois = `Ah que pena... Já tentou aprender outras linguagens?`

if (resposta == 1) {
    alert(respostaUm)
}
if (resposta == 2) {
    alert(respostaDois)
}

// Este desafio pode ser resolvido apenas no console do navegador, pois o prompt não é definido em node.js