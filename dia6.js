let addcomida;
let item;
let cat;
let sair = 0;
let rmv;
let i = 0;
let m1 = "";
let m2 = "";
let m3 = "";
let m4 = "";
var laticinios = [];
var doces = [];
var frutas = [];
var congelados = [];

while (sair != 1) {
    addcomida = prompt("Você deseja Adicionar, Remover ou Exibir a sua lista de compras? Responda com A para Adicionar; E para exibir; ou R para Remover.")
    if (addcomida == "A" || addcomida == "a") {
        item = prompt("Qual item você deseja adicionar a lista de compras?")
        cat = prompt("A qual categoria o item adicionado pertence? Digite: 1 para Frutas; 2 para Congelados; 3 para Laticínios; ou 4 para Doces.")

        switch (cat) {
            case ("1"):
                frutas.push(item);
                break;
            case ("2"):
                congelados.push(item);
                break;
            case ("3"):
                laticinios.push(item);
                break;
            case ("4"):
                doces.push(item);
                break;
        }
        sair = 0;
    } else if (addcomida == "E" || addcomida == "e") {

        for (let i = 0; i < frutas.length; i++) {
            if (i == 0) {
                m1 = "";
                m1 = `${m1} ${frutas[i]}`
            }
            if (i != 0) {
                m1 = `${m1}, ${frutas[i]}`
            }
        }
        for (let i = 0; i < congelados.length; i++) {
            if (i == 0) {
                m2 = "";
                m2 = `${m2} ${congelados[i]}`
            }
            if (i != 0) {
                m2 = `${m2}, ${congelados[i]}`
            }
        }
        for (let i = 0; i < laticinios.length; i++) {
            if (i == 0) {
                m3 = "";
                m3 = `${m3} ${laticinios[i]}`
            }
            if (i != 0) {
                m3 = `${m3}, ${laticinios[i]}`
            }
        }
        for (let i = 0; i < doces.length; i++) {
            if (i == 0) {
                m4 = "";
                m4 = `${m4} ${doces[i]}`
            }
            if (i != 0) {
                m4 = `${m4}, ${doces[i]}`
            }
        }
        alert(`Lista de compras:\n     Frutas: ${m1}\n     Congelados: ${m2}\n     Laticinios: ${m3} \n     Doces: ${m4}`)
        sair = 1;
    } else if (addcomida == "R" || addcomida == "r") {

        cat = prompt("A qual categoria o item que você deseja remover pertence? Digite: 1 para Frutas; 2 para Congelados; 3 para Laticínios; ou 4 para Doces.")
        switch (cat) {
            case "1":
                for (let i = 0; i < frutas.length; i++) {
                    if (i == 0) {
                        m1 = "";
                        m1 = `${m1}${i} ${frutas[i]} `
                    }
                    if (i != 0) {
                        m1 = `${m1},${i} ${frutas[i]} `
                    }
                }
                rmv = prompt(`Qual dos itens você deseja remover? \n\n     Frutas: ${m1}`);
                if (rmv > frutas.length || rmv < 0) {
                    alert(`O item digitado não foi encontrado para ser removido da lista de compras.`);
                } else {
                    frutas.splice(rmv, 1);
                    alert(`O item foi removido da lista de compras.`);
                }
                break;
            case "2":
                for (let i = 0; i < congelados.length; i++) {
                    if (i == 0) {
                        m2 = "";
                        m2 = `${m2}${i} ${congelados[i]} `
                    }
                    if (i != 0) {
                        m2 = `${m2},${i} ${congelados[i]} `
                    }
                }
                rmv = prompt(`Qual dos itens você deseja remover? \n\n     Congelados: ${m2}`);
                if (rmv > congelados.length || rmv < 0) {
                    alert(`O item digitado não foi encontrado para ser removido da lista de compras.`);
                } else {
                    congelados.splice(rmv, 1);
                    alert(`O item foi removido da lista de compras.`);
                }
                break;
            case "3":
                for (let i = 0; i < laticinios.length; i++) {
                    if (i == 0) {
                        m3 = "";
                        m3 = `${m3}${i} ${laticinios[i]} `
                    }
                    if (i != 0) {
                        m3 = `${m3},${i} ${laticinios[i]} `
                    }
                }
                rmv = prompt(`Qual dos itens você deseja remover? \n\n     Laticinios: ${m3}`);
                if (rmv > laticinios.length || rmv < 0) {
                    alert(`O item digitado não foi encontrado para ser removido da lista de compras.`);
                } else {
                    laticinios.splice(rmv, 1);
                    alert(`O item foi removido da lista de compras.`);
                }
                break;
            case "4":
                for (let i = 0; i < doces.length; i++) {
                    if (i == 0) {
                        m4 = "";
                        m4 = `${m4}${i} ${doces[i]} `
                    }
                    if (i != 0) {
                        m4 = `${m4},${i} ${doces[i]} `
                    }
                }
                rmv = prompt(`Qual dos itens você deseja remover? \n\n     Doces: ${m4}`);
                if (rmv > doces.length || rmv < 0) {
                    alert(`O item digitado não foi encontrado para ser removido da lista de compras.`);
                } else {
                    doces.splice(rmv, 1);
                    alert(`O item foi removido da lista de compras.`);
                }
                break;
        }
        sair = 0;
    }
    else {
        alert("Resposta Inválida");
        sair = 0;
    }
}