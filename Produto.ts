export interface Produtos {
    tipo: string
    preço: number
    nome: string
    peso: number

    calcularValorTotal(): number

}