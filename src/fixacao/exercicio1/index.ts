/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

import { CORES , Pessoa} from "../../types/type"

const Pessoa1 : Pessoa = {
  nome: 'Rodolfo Antonio',
  idade: 29,
  corFavorita: CORES.VERMELHO
}

const Pessoa2 : Pessoa = {
  nome: 'Luciene',
  idade: 56,
  corFavorita: CORES.AMARELO
}

const Pessoa3 : Pessoa = {
  nome: 'Thaysa',
  idade: 26,
  corFavorita: CORES.PRETO
}

const Pessoa4 : Pessoa = {
  nome: 'Francisco',
  idade: 58,
  corFavorita: CORES.AZUL
}

console.table(Pessoa1)