Algoritmo "Escolha"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Lucas
// Data atual  : 16/09/2020
Var
// Seção de Declarações das variáveis
   valor01, valor02, resultado: real
   operacao: caractere
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o primeiro valor: ")
   leia(valor01)
   escreval("Digite a operação: Ex: +, - , *, / ")
   leia(operacao)
   escreval("Digite o segundo valor: ")
   leia(valor02)

   escolha operacao
   caso "+"
        resultado := valor01 + valor02
   caso "-"
        resultado := valor01 - valor02
   caso "*"
        resultado := valor01 * valor02
   caso "/"
        resultado := valor01 / valor02
   fimescolha
   
   escreval("Resultado do calculo é: ", resultado)
Fimalgoritmo