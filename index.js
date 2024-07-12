"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var Eletrodomestico_1 = require("./Eletrodomestico");
var Roupa_1 = require("./Roupa");
var reader = require("readline-sync");
var option = 0;
var livro1 = new Livro_1.Livro('ficção', 69.90, 'O Senhor dos Anéis', 0.8);
var microondas = new Eletrodomestico_1.Eletrodomestico('microondas', 559.90, 'Microondas', 5);
var calça = new Roupa_1.Roupa('calça', 119.90, 'Calça Jeans', 0.5);
var listaDeProdutos = [livro1, microondas, calça];
while (option != 4) {
    console.log('------ Menu ------');
    console.log('Escolha uma opcao:');
    console.log('1 - Ver Produtos');
    console.log('2 - Ver Carrinho');
    console.log('3 - Pagar');
    console.log('4 - Sair');
    option = Number(reader.question('escolha: '));
    console.log('');
    switch (option) {
        case 1: {
            console.log('Produtos:');
            console.log("".concat(listaDeProdutos.forEach((function (elem, ind) { return console.log("".concat(ind + 1, " - ").concat(elem.nome)); }))));
            console.log('');
            break;
        }
        case 2: {
            console.log('2');
            break;
        }
        case 3: {
            console.log('3');
            break;
        }
        case 4: {
            console.log('4');
            break;
        }
    }
}
