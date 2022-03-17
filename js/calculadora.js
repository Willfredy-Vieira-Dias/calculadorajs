let ecra = document.getElementById('inicio');

let botoes = Array.from(document.getElementsByTagName('button'));

ecra.innerText = "0";
let ANS = 0;

botoes.map(button => {
    button.addEventListener('click', (e) => {

        if(e.target.innerText == "x"){
            e.target.innerText = "*";
            }
        if(e.target.innerText == "÷"){
            e.target.innerText = "/";
            }
        if(e.target.innerText == "ANS"){
            ecra.innerText += ANS;
            return 0;
            }
        if(e.target.innerText === "%"){
            ecra.innerText = eval(ecra.innerText / 100);
                return 0;
            }
        if(e.target.innerText === "+/-"){

            if(ecra.innerText == "0"){
                ecra.innerText = "(-";
                return 0;
            }else if(ecra.innerText != "0"){
                ecra.innerText += "(-";
                return 0;
            }
            }

        switch(e.target.innerText){
            case 'C':
                ecra.innerText = '0';
                break;

            case '⌫':
                if(ecra.innerText){
                    ecra.innerText = ecra.innerText.slice(0,-1);
                    if(ecra.innerText == ""){
                        ecra.innerText = "0";
                    }
                }
                break;

            case '=':
                try{
                    ecra.innerText = eval(ecra.innerText);
                    ANS = eval(ecra.innerText);
                    
                }catch{
                    ecra.innerText = "Erro! - Isto não é uma expressão matemática!";
                    
                }
                break;

            default:
                if(ecra.innerText == "0"){
                    ecra.innerText = e.target.innerText;
                }else if(ecra.innerText != "0"){
                    ecra.innerText += e.target.innerText;
                }
                
        }
    });
});

/*

VERSÃO 1

function pegarOvalor(){
    let input = event.target.innerText;
    console.log(input);
    imprimirValor(input);
}

// Imprimindo os valores na Label (Ecrã da máquina)
function imprimirValor(valor){
    let imprimir = document.querySelector('#inicio');
    let recente = imprimir.innerHTML;

    if(imprimir.innerHTML == "0"){
        if(valor != "C" && valor != "Apagar"){
            imprimir.innerHTML = "";
            imprimir.innerHTML += valor;
        }
    }else{
        if(valor == "Apagar"){
            imprimir.innerHTML = recente.slice(0,-1); //Método que remove parte dos elementos presentes na Label (Ecrã da máquina)
            if(imprimir.innerHTML.length <= 1){
                imprimir.innerHTML = "0";
            }
        }

        if(valor != "C" && valor != "Apagar" && valor != "="){
            imprimir.innerHTML += valor;
        }

        if(valor =="C"){
            imprimir.innerHTML = "0";
        }

        if(valor == "="){
            let expressao = imprimir.innerHTML;
            imprimir.innerHTML = eval(expressao);
        }
        
    }
}

let botoes = document.getElementsByTagName('button');
for(var i = 0; i < botoes.length; i++){
    botoes[i].setAttribute('onclick', 'pegarOvalor()'); //Adicionando o "onclick" para todos os botões
}

*/