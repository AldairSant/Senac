import { Produtos } from "./Produto";

export class Roupa implements Produtos {

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

    informações(): void{
        console.log(`${this.nome}\n${this.preço}\n${this.tipo}\n${this.peso}`)
    }

    calcularValorTotal(): number {
        return this.preço * 1.1
    }
    
}
