function ex1(){
    imprimeNaTela('Oi Mundo!');
}
function ex2(){
    var livro=2;
    imprimeNaTela(livro);   
}
function ex3(){
    var contador=0;
    var index=10;
    // Resolução com Do While
    do {
        contador=contador+2;
        index=index+1;
    } while (index <32);

    contador = 0; 
    // Resolução com For 
    for (let index2 = 10; index2 < 32; index2++) {
        contador = contador + 2;
    }

    contador=0;
    index=10;
    while (index<32) {
       contador=contador+2;
       index=index+1; 
    }
    // Dica: usar o Loop For 
    imprimeNaTela(contador);
}
function ex4(){
    var contador=10;
    
    for (let index = 1; index <100; index+=2) {
        contador=contador+index;

        

       
        
    }
   
imprimeNaTela(contador);
                         
}


function ex5(){
    var contador=10;
    
    for (let index = 0; index <100; index+=2) {
        contador=contador+index;
    }
    imprimeNaTelaE2(contador);
    
}