/*Algoritmo "Repita"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Lucas
// Data atual  : 16/09/2020
Var
// Seção de Declarações das variáveis
   sairLoop: caractere
   valor01, valor02: real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   repita
         escreval("Digite o primeiro valor: ")
         leia(valor01)
         escreval("Digite o segundo valor: ")
         leia(valor02)
         escreval("Resultado: ", valor01 + valor02)
         escreval("Deseja sair? S/N")
         leia(sairLoop)
   ate sairLoop <> "N"
*/

function acaoBotao() {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt ( valor02 ) )
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop = "N")
    
}