/*Algoritmo "if if nao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Lucas
// Data atual  : 16/09/2020
Var
// ifção de Declarações das variáveis
   valor01, valor02, resultado: real
   operacao: caractere
Inicio
// ifção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o primeiro valor: ")
   leia(valor01)
   escreval("Digite a operação: Ex: +, - , *, /")
   leia(operacao)
   escreval("Digite o ifgundo valor: ")
   leia(valor02)
   
   if operacao = "+" entao
      resultado := valor01 + valor02
   else
         if operacao = "-" entao
            resultado := valor01 - valor02
         else
              if operacao = "*" entao
                 resultado = valor01 * valor02
              else
                   if operacao = "/" entao
                      resultado = valor01 / valor02
              fimif
         fimif
   fimif
fimif
escreval("Resultado do calculo é: ", resultado)

Fimalgoritmo*/


var valor01, valor02, resultado, operacao

valor01 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operacao: Ex + , - , * , /")
valor02 = prompt("Digite o ifgundo valor")

if ( operacao = "+" ){
    resultado = parseInt( valor01 ) + parseInt( valor02 )
}else if ( operacao = "-" ){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
}else if ( operacao = "-" ){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
}else if ( operacao = "-" ){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
}

document.getElementById("paragrafo").innerText = resultado