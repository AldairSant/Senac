import { MetodosDePagamento } from "./MetodosDePagamento";
import * as reader from 'readline-sync'

export class Pix implements MetodosDePagamento{

    pagar(valorTotal: number): boolean {

        let option: number = 0
        let pgtoEfetuado = false
        while(option != 1 && option != 2){
            
            console.log('------ Finalização de Pagamento -------')
            console.log(`Total a pagar R$${valorTotal.toFixed(2)}.`)
            console.log("Finalizar pagamento?")
            console.log('1 - Pagar')
            console.log('2 - Voltar')
            option = Number(reader.question('Opcao: '))
            console.log("Chave Pix:")
            console.log("CNPJ: 12.345.678/0001-00")
            console.log('---------------------------------------')
            console.log("------ Comprovante Recebido ------")
            console.log('---------------------------------------')
            if(option == 1)
                pgtoEfetuado = true
            if(option == 2)
                pgtoEfetuado = false
        }
    return pgtoEfetuado
    }
}