function imprimeNaTela(valor){
    document.getElementById("e1").innerHTML=valor;
}
function imprimeNaTelaE2(valor){
    document.getElementById("e2").innerHTML=valor;
}
function RespostaCorreta(lugar){
    document.getElementById(lugar).style.backgroundColor = 'Green';
    document.getElementById(lugar).innerHTML = 'Resposta Correta!';
}
function RespostaErrada(lugar){
    document.getElementById(lugar).style.backgroundColor = 'Red';
    document.getElementById(lugar).innerHTML = 'Resposta Errada!';
}

function ch1(){
    var ex1 = document.getElementById("e1").innerHTML
    if (ex1 ==='Oi Mundo!')
        RespostaCorreta("c1");    
    else 
        RespostaErrada("c1");    
}
function ch2(){
    var ex1 = document.getElementById("e1").innerHTML
    if (ex1 ==='2'){
        RespostaCorreta("c1");
    }else{ 
       RespostaErrada("c1")
    }
}
function ch3(){
    var ex1 = document.getElementById("e1").innerHTML
    if (ex1 ==='44'){
        RespostaCorreta("c1");
    }else{ 
       RespostaErrada("c1")
    }
}
function ch4(){
    var ex1 = document.getElementById("e1").innerHTML
    if (ex1 ==='2510'){
        RespostaCorreta("c1");
    }else{ 
       RespostaErrada("c1")
    }
}
function ch5(){
    var ex1 = document.getElementById("e2").innerHTML
    if (ex1 ==='2460'){
        RespostaCorreta("c2");
    }else{ 
       RespostaErrada("c2")
    }
}