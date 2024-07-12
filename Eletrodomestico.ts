import { Produtos } from "./Produto";

export class Eletrodomestico implements Produtos {

    tipo: string
    preço: number
    nome: string
    peso: number
    
    constructor(tipo: string, preço: number, nome:string, peso: number){
        this.tipo = tipo,
        this.preço = preço,
        this.nome = nome,
        this.peso = peso
    }

    abrirPorta(): void{
        console.log(`Este ${this.nome} abriu a porta.`)
    }

    calcularValorTotal(): number {
        return this.preço * 1.05
    }

}
