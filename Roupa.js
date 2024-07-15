"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roupa = void 0;
var Roupa = /** @class */ (function () {
    function Roupa(tipo, preco, nome, peso) {
        this.tipo = tipo,
            this.preco = preco,
            this.nome = nome,
            this.peso = peso;
    }
    Roupa.prototype.informações = function () {
        console.log("".concat(this.nome, "\n").concat(this.preco, "\n").concat(this.tipo, "\n").concat(this.peso));
    };
    Roupa.prototype.calcularValorTotal = function () {
        return this.preco * 1.1;
    };
    return Roupa;
}());
exports.Roupa = Roupa;
