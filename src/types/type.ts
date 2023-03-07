export enum CORES {
    VERMELHO = 'vermelho',
    AZUL = 'azul',
    PRETO = 'preto',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    ROSA = 'rosa',
    BRANCO = 'branco'
  }
  
export type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
  }


// EXERCICIO 2

export type Post ={
    autor: string,
    texto: string
}