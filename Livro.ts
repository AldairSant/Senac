import { Produtos } from "./Produto"

export class Livro implements Produtos {

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

    nomeDoLivro(): void{
        console.log(`O nome deste livro é: ${this.nome}`)
    }

    calcularValorTotal(): number {
        return this.preço * 1.03
    }
}
