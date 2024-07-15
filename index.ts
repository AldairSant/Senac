import { Livro } from "./Livro";
import { Eletrodomestico } from "./Eletrodomestico";
import { Roupa } from "./Roupa";
import { CartaoDeCredito } from "./CartaoDeCredito";

import * as reader from 'readline-sync'
import { Dinheiro } from "./Dinheiro";
import { Pix } from "./Pix";
let option : number = 0



const livro1 = new Livro('ficção', 69.90, 'O Senhor dos Anéis', 0.8)
const livro2 = new Livro('Romance', 89.90, 'A Culpa é das Estrelas', 0.6)
const microondas = new Eletrodomestico('microondas', 559.90, 'Microondas', 5)
const calça = new Roupa('calça', 119.90, 'Calça Jeans', 0.5)
const blusa = new Roupa('Blusa', 79.90, 'Blusão de lã', 2)

const listaDeProdutos: any = [livro1, livro2, microondas, calça, blusa]


const carrinhoDeCompras: any = []

while(option != 4) {

    console.log('---------------- Menu -----------------')
    console.log('Escolha uma opcao:')
    console.log('1 - Ver Produtos')
    console.log('2 - Ver Carrinho')
    console.log('3 - Pagar')
    console.log('4 - Sair')

    option = Number(reader.question('Opcao: '))
    console.log('---------------------------------------')

    switch(option){

        case 1:
            adicionarAoCarrinho()
            break
        

        case 2: {
            verCarrinho()
            break
        }

        case 3: 
            pagar()
            break
        
        case 4: //Encerrar
            break

    }
}

function adicionarAoCarrinho(){
    let indice: number = 1
    while (indice != 0){
        console.log('-------- Produtos Disponíveis ---------')
        listaDeProdutos.forEach(((elem, ind) => console.log(`${ind + 1} - ${elem.nome} - R$ ${elem.preco}`)))
        console.log('Digite o número correspondente ao item que deseja adicionar ao carrinho ou 0 para voltar ao menu principal.')
        indice = Number(reader.question("Opcao: "))
        if(indice === 0){
            return
        } else if(listaDeProdutos[indice - 1] > listaDeProdutos.length || indice - 1 < 0){
            console.log('Opcão inválida!')
        } else{
            carrinhoDeCompras.push(listaDeProdutos[indice - 1])
            listaDeProdutos.splice(indice - 1, 1)

            console.log('---------------------------------------')
            console.log(`${carrinhoDeCompras[carrinhoDeCompras.length - 1].nome} adicionado ao carrinho.`)
            console.log('---------------------------------------')
        }
    }
    console.log('---------------------------------------')
}

function verCarrinho(){
    console.log('-------- Produtos no Carrinho ---------')
    carrinhoDeCompras.forEach((item, ind) => console.log(`${ind + 1} - ${item.nome}`))
    console.log('---------------------------------------')
    let valorTotal = carrinhoDeCompras.reduce((acum, cur) => acum + cur.calcularValorTotal(), 0)
    console.log(`Valor Total do carrinho: ${valorTotal.toFixed(2)}`)
    console.log('---------------------------------------')
}

function pagar(){
    let valorTotal = carrinhoDeCompras.reduce((acum, cur) => acum + cur.calcularValorTotal(), 0)
    console.log(`Valor Total dos produtos: ${valorTotal.toFixed(2)}`)
    let option1 = 0
    while(option1 != 4){
        console.log('---------------------------------------')
        console.log("Com qual das opcoes voce deseja pagar? ")
        console.log('1 - Cartão de Crédito')
        console.log('2 - Dinheiro')
        console.log('3 - Pix')
        console.log('4 - Voltar')
        option1 = Number(reader.question('Opcao: '))
        console.log('---------------------------------------')

        switch(option1){

            case 1:
                let option2: number = 0
                let bandeira: string = ''
                while(option2 != 1 && option2 != 2 && option2 != 3){
                    console.log('---------------------------------------')
                    console.log('Com qual cartão gostaria de pagar?')
                    console.log('1 - Mastercard')
                    console.log('2 - Visa')
                    console.log('3 - Voltar')
                    
                    option2 = Number(reader.question('Opcao: '))
                    console.log('---------------------------------------')

                    if(option2 === 1)
                        bandeira = 'Mastercard'
                    else if(option2 === 2)
                        bandeira = 'Visa'
                    else if(option2 === 3)
                        break

                    console.log('---------------------------------------')
                    console.log(`Voce escolheu ${bandeira}.`)
                    console.log('---------------------------------------')
                    const cartao: CartaoDeCredito = new CartaoDeCredito(`${bandeira}`)
                    let pgto = cartao.pagar(valorTotal)
                    pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!')
                    if(pgto)
                        carrinhoDeCompras.splice(0, carrinhoDeCompras.length)
                    console.log('---------------------------------------')
                    console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.')

                    let exit: number = Number(reader.question('Opcao: '))
                    if(exit == 0){
                        option2 = 3
                        option1 = 4                                        
                    } else{
                        option2 = 3
                        option1 = 4
                        option = 4
                    }
                    console.log('---------------------------------------')
                }
                break

            case 2:{
                const dinheiro = new Dinheiro
                let pgto = dinheiro.pagar(valorTotal)
                pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!')
                if(pgto)
                    carrinhoDeCompras.splice(0, carrinhoDeCompras.length)
                console.log('---------------------------------------')
                console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.')

                let exit: number = Number(reader.question('Opcao: '))
                if(exit == 0){
                    option2 = 3
                    option1 = 4                                        
                } else{
                    option2 = 3
                    option1 = 4
                    option = 4
                }
                console.log('---------------------------------------')
            }
                break
            
            case 3:{
                const pix = new Pix
                let pgto = pix.pagar(valorTotal)
                pgto ? console.log('Parabéns, compra efetuada com sucesso!') : console.log('Operação Cancelada!')
                if(pgto)
                    carrinhoDeCompras.splice(0, carrinhoDeCompras.length)
                console.log('---------------------------------------')
                console.log('Pressione qualquer tecla para encerrar ou 0 para voltar ao menu principal.')

                let exit: number = Number(reader.question('Opcao: '))
                if(exit == 0){
                    option2 = 3
                    option1 = 4                                        
                } else{
                    option2 = 3
                    option1 = 4
                    option = 4
                }
                console.log('---------------------------------------')
            }
                break

            case 4: //Voltar
                break
        }
    }
}