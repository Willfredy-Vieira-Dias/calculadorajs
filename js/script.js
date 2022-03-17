alert("Seja Bem-vindo ao Willfredy Calculate System");
alert("A melhor calculadora do curso Unitel Bukapp");

let paragem = 0;
let operações = 0;
let numero = 0;
let escolha = 0;
let i = 1;

while(escolha != 7){

    escolha = prompt("Qual é a operação que deseja fazer?\n1 - Somar\n2 - Dividir\n3 - Multiplicar\n4 - Subtrair\n5 - Encontrar a raiz quadrada\n6 - Potência\n7 - Encerrar Calculadora\n\nEscola a sua opção: ");
    
    if(escolha == 1){

        while(paragem != 2){

            numero = Number(prompt("Digite o "+ i +"º número: "));
            operações = operações + numero;
            paragem = Number(prompt("Resultado: " + operações + "\n1 - Somar mais números\n2 - Outras operações"));
            if(paragem == 2){
                alert("O seu resultado final é: " + operações);
            }
            
        }
        
        paragem = 0;
        numero = 0;

    }else if(escolha == 2){
        operações = 1;
        while(paragem != 2){

            numero = parseFloat(prompt("Digite o número: "));
            operações = numero / operações;
            paragem = Number(prompt("Resultado: " + operações + "\n1 - Dividir mais números\n2 - Outras operações"));
            if(paragem == 2){
                alert("O seu resultado final é: " + operações);
            }
            
        }
    }
}