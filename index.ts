import { Livro } from "./Livro";
import { Eletrodomestico } from "./Eletrodomestico";
import { Roupa } from "./Roupa";
import { CartaoDeCredito } from "./CartaoDeCredito";

import * as reader from 'readline-sync'
let option : number = 0



const livro1 = new Livro('ficção', 69.90, 'O Senhor dos Anéis', 0.8)
const microondas = new Eletrodomestico('microondas', 559.90, 'Microondas', 5)
const calça = new Roupa('calça', 119.90, 'Calça Jeans', 0.5)
const listaDeProdutos = [livro1, microondas, calça]

const carrinhoDeCompras = [livro1, calça]

while(option != 4) {

    console.log('------ Menu ------')
    console.log('Escolha uma opcao:')
    console.log('1 - Ver Produtos')
    console.log('2 - Ver Carrinho')
    console.log('3 - Pagar')
    console.log('4 - Sair')

    option = Number(reader.question('escolha: '))
    console.log('')

    switch(option){

        case 1: {
            console.log('Produtos:')
            console.log(`${listaDeProdutos.forEach(((elem, ind) => console.log(`${ind + 1} - ${elem.nome}`)))}`)
            console.log('')
            break
        }

        case 2: {
            console.log('2')

            break
        }

        case 3: {
            let valorTotal = carrinhoDeCompras.forEach(elem => elem.preço)
            gerarCartaoDeCredito(valorTotal, bandeira)
            console.log(`Parabéns, sua compra foi efetuada com sucesso!`)

            break
        }
        
        case 4: {
            console.log('4')

            break
        }
    }
}

function gerarCartaoDeCredito(valorTotal, bandeira){
    const cartao: CartaoDeCredito = new CartaoDeCredito(valorTotal, bandeira)
}