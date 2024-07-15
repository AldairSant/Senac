"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var Eletrodomestico_1 = require("./Eletrodomestico");
var Roupa_1 = require("./Roupa");
var CartaoDeCredito_1 = require("./CartaoDeCredito");
var reader = require("readline-sync");
var Dinheiro_1 = require("./Dinheiro");
var Pix_1 = require("./Pix");
var option = 0;
var livro1 = new Livro_1.Livro('ficção', 69.90, 'O Senhor dos Anéis', 0.8);
var livro2 = new Livro_1.Livro('Romance', 89.90, 'A Culpa é das Estrelas', 0.6);
var microondas = new Eletrodomestico_1.Eletrodomestico('microondas', 559.90, 'Microondas', 5);
var calça = new Roupa_1.Roupa('calça', 119.90, 'Calça Jeans', 0.5);
var blusa = new Roupa_1.Roupa('Blusa', 79.90, 'Blusão de lã', 2);
var listaDeProdutos = [livro1, livro2, microondas, calça, blusa];
var carrinhoDeCompras = [];
while (option != 4) {
    console.log('---------------- Menu -----------------');
    console.log('Escolha uma opcao:');
    console.log('1 - Ver Produtos');
    console.log('2 - Ver Carrinho');
    console.log('3 - Pagar');
    console.log('4 - Sair');
    option = Number(reader.question('Opcao: '));
    console.log('---------------------------------------');
    switch (option) {
        case 1:
            adicionarAoCarrinho();
            break;
        case 2: {
            verCarrinho();
            break;
        }
        case 3:
            pagar();
            break;
        case 4: //Encerrar
            break;
    }
}
function adicionarAoCarrinho() {
    var indice = 1;
    while (indice != 0) {
        console.log('-------- Produtos Disponíveis ---------');
        listaDeProdutos.forEach((function (elem, ind) { return console.log("".concat(ind + 1, " - ").concat(elem.nome, " - R$ ").concat(elem.preco)); }));
        console.log('Digite o número correspondente ao item que deseja adicionar ao carrinho ou 0 para voltar ao menu principal.');
        indice = Number(reader.question("Opcao: "));
        if (indice === 0) {
            return;
        }
        else if (listaDeProdutos[indice - 1] > listaDeProdutos.length || indice - 1 < 0) {
            console.log('Opcão inválida!');
        }
        else {
            carrinhoDeCompras.push(listaDeProdutos[indice - 1]);
            listaDeProdutos.splice(indice - 1, 1);
            console.log('---------------------------------------');
            console.log("".concat(carrinhoDeCompras[carrinhoDeCompras.length - 1].nome, " adicionado ao carrinho."));
            console.log('---------------------------------------');
        }
    }
    console.log('---------------------------------------');
}
function verCarrinho() {
    console.log('-------- Produtos no Carrinho ---------');
    carrinhoDeCompras.forEach(function (item, ind) { return console.log("".concat(ind + 1, " - ").concat(item.nome)); });
    console.log('---------------------------------------');
    var valorTotal = carrinhoDeCompras.reduce(function (acum, cur) { return acum + cur.calcularValorTotal(); }, 0);
    console.log("Valor Total do carrinho: ".concat(valorTotal.toFixed(2)));
    console.log('---------------------------------------');
}
function pagar() {
    var valorTotal = carrinhoDeCompras.reduce(function (acum, cur) { return acum + cur.calcularValorTotal(); }, 0);
    console.log("Valor Total dos produtos: ".concat(valorTotal.toFixed(2)));
    var option1 = 0;
    while (option1 != 4) {
        console.log('---------------------------------------');
        console.log("Com qual das opcoes voce deseja pagar? ");
        console.log('1 - Cartão de Crédito');
        console.log('2 - Dinheiro');
        console.log('3 - Pix');
        console.log('4 - Voltar');
        option1 = Number(reader.question('Opcao: '));
        console.log('---------------------------------------');
        switch (option1) {
            case 1:
                var option2 = 0;
                var bandeira = '';
                while (option2 != 1 && option2 != 2 && option2 != 3) {
                    console.log('---------------------------------------');
                    console.log('Com qual cartão gostaria de pagar?');
                    console.log('1 - Mastercard');
                    console.log('2 - Visa');
                    console.log('3 - Voltar');
                    option2 = Number(reader.question('Opcao: '));
                    console.log('---------------------------------------');
                    if (option2 === 1)
                        bandeira = 'Mastercard';
                    else if (option2 === 2)
                        bandeira = 'Visa';
                    else if (option2 === 3)
                        break;
                    console.log('---------------------------------------');
                    console.log("Voce escolheu ".concat(bandeira, "."));
                    console.log('---------------------------------------');
                    var cartao = new CartaoDeCredito_1.CartaoDeCredito("".concat(bandeira));
                    var pgto = cartao.pagar(valorTotal);
                    pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!');
                    if (pgto)
                        carrinhoDeCompras.splice(0, carrinhoDeCompras.length);
                    console.log('---------------------------------------');
                    console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.');
                    var exit = Number(reader.question('Opcao: '));
                    if (exit == 0) {
                        option2 = 3;
                        option1 = 4;
                    }
                    else {
                        option2 = 3;
                        option1 = 4;
                        option = 4;
                    }
                    console.log('---------------------------------------');
                }
                break;
            case 2:
                {
                    var dinheiro = new Dinheiro_1.Dinheiro;
                    var pgto = dinheiro.pagar(valorTotal);
                    pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!');
                    if (pgto)
                        carrinhoDeCompras.splice(0, carrinhoDeCompras.length);
                    console.log('---------------------------------------');
                    console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.');
                    var exit = Number(reader.question('Opcao: '));
                    if (exit == 0) {
                        option2 = 3;
                        option1 = 4;
                    }
                    else {
                        option2 = 3;
                        option1 = 4;
                        option = 4;
                    }
                    console.log('---------------------------------------');
                }
                break;
            case 3:
                {
                    var pix = new Pix_1.Pix;
                    var pgto = pix.pagar(valorTotal);
                    pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!');
                    if (pgto)
                        carrinhoDeCompras.splice(0, carrinhoDeCompras.length);
                    console.log('---------------------------------------');
                    console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.');
                    var exit = Number(reader.question('Opcao: '));
                    if (exit == 0) {
                        option2 = 3;
                        option1 = 4;
                    }
                    else {
                        option2 = 3;
                        option1 = 4;
                        option = 4;
                    }
                    console.log('---------------------------------------');
                }
                break;
            case 4: //Voltar
                break;
        }
    }
}
