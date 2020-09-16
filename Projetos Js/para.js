/*Algoritmo "Para"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Lucas
// Data atual  : 16/09/2020
Var
// Seção de Declarações das variáveis
   numero, fatorial, contador: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o número para calcular o fatorial.")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreval("O fatorial de ", numero, " é: ", fatorial)
Fimalgoritmo*/

function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite o número para calcular o fatorial.")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}