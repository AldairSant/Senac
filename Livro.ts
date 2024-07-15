import { Produtos } from "./Produto"

export class Livro implements Produtos {

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

    nomeDoLivro(): void{
        console.log(`O nome deste livro é: ${this.nome}`)
    }

    calcularValorTotal(): number {
        return this.preco * 1.03
    }
}
