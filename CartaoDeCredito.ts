import { MetodosDePagamento } from "./MetodosDePagamento";
import * as reader from 'readline-sync'

export class CartaoDeCredito implements MetodosDePagamento{

    valorTotal: number;
    bandeira: string

    constructor(valorTotal: number, bandeira: string){
        this.valorTotal = valorTotal,
        this.bandeira = bandeira
    }

    pagar(): boolean {
        let option: number = 0
        let pgtoEfetuado = false
        while(option != 1 && option != 2){
        console.log(`Valor total a pagar ${this.valorTotal}.`)
        console.log("Finalizar pagamento?")
        console.log('1 - Pagar')
        console.log('2 - Cancelar')
        option = reader.question('')
        if(option == 1)
            pgtoEfetuado = true
        if(option == 2)
            pgtoEfetuado = false
        return pgtoEfetuado
        }
    }

}