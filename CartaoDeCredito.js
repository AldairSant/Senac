"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoDeCredito = void 0;
var reader = require("readline-sync");
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito(bandeira) {
        this.bandeira = bandeira;
    }
    CartaoDeCredito.prototype.pagar = function (valorTotal) {
        var option = 0;
        var pgtoEfetuado = false;
        while (option != 1 && option != 2) {
            console.log('------ Finalização de Pagamento -------');
            console.log("Total a pagar R$".concat(valorTotal.toFixed(2), "."));
            console.log("Finalizar pagamento?");
            console.log('1 - Pagar');
            console.log('2 - Voltar');
            option = Number(reader.question('Opcao: '));
            console.log('---------------------------------------');
            if (option == 1)
                pgtoEfetuado = true;
            if (option == 2)
                pgtoEfetuado = false;
        }
        return pgtoEfetuado;
    };
    return CartaoDeCredito;
}());
exports.CartaoDeCredito = CartaoDeCredito;
