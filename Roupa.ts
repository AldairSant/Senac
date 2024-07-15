import { Produtos } from "./Produto";

export class Roupa implements Produtos {

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

    informações(): void{
        console.log(`${this.nome}\n${this.preco}\n${this.tipo}\n${this.peso}`)
    }

    calcularValorTotal(): number {
        return this.preco * 1.1
    }
    
}
