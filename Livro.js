"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(tipo, preço, nome, peso) {
        this.tipo = tipo,
            this.preço = preço,
            this.nome = nome,
            this.peso = peso;
    }
    Livro.prototype.nomeDoLivro = function () {
        console.log("O nome deste livro \u00E9: ".concat(this.nome));
    };
    Livro.prototype.calcularValorTotal = function () {
        return this.preço;
    };
    return Livro;
}());
exports.Livro = Livro;
