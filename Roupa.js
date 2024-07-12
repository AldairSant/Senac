"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roupa = void 0;
var Roupa = /** @class */ (function () {
    function Roupa(tipo, preço, nome, peso) {
        this.tipo = tipo,
            this.preço = preço,
            this.nome = nome,
            this.peso = peso;
    }
    Roupa.prototype.informações = function () {
        console.log("".concat(this.nome, "\n").concat(this.preço, "\n").concat(this.tipo, "\n").concat(this.peso));
    };
    Roupa.prototype.calcularValorTotal = function () {
        return this.preço;
    };
    return Roupa;
}());
exports.Roupa = Roupa;
