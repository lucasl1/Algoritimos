Algoritmo "Equanto"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Lucas
// Data atual  : 16/09/2020
Var
// Seção de Declarações das variáveis
   nome: caractere
   idade, limite, contado: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
            escreval("Digite o nome da pessoa: ")
            leia(nome)
            escreval("Digite a idade do (a) ", nome, ": ")
            leia(idade)
            se idade > 18 entao
               escreval("nome, você é maior de idade!")
            senao
               escreval("nome, você é menor de idade!")
            fimse
            contador := contador + 1
   fimenquanto

Fimalgoritmo