"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletrodomestico = void 0;
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico(tipo, preco, nome, peso) {
        this.tipo = tipo,
            this.preco = preco,
            this.nome = nome,
            this.peso = peso;
    }
    Eletrodomestico.prototype.abrirPorta = function () {
        console.log("Este ".concat(this.nome, " abriu a porta."));
    };
    Eletrodomestico.prototype.calcularValorTotal = function () {
        return this.preco * 1.05;
    };
    return Eletrodomestico;
}());
exports.Eletrodomestico = Eletrodomestico;
