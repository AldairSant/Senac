import { Produtos } from "./Produto";

export class Eletrodomestico implements Produtos {

    tipo: string
    preco: number
    nome: string
    peso: number
    
    constructor(tipo: string, preco: number, nome:string, peso: number){
        this.tipo = tipo,
        this.preco = preco,
        this.nome = nome,
        this.peso = peso
    }

    abrirPorta(): void{
        console.log(`Este ${this.nome} abriu a porta.`)
    }

    calcularValorTotal(): number {
        return this.preco * 1.05
    }

}
