function tocaSom(idElementoAudio){
    
    const elemento=document.querySelector(idElementoAudio);
    
    if (elemento===null){
        
    }

    if (elemento && elemento.localName==='audio'){
                
        elemento.play();
        /*
        for nulo eu não preciso compará-lo com nulo, 
        eu posso simplesmente retirar isso e ele vai fazer, 
        o if já é inteligente para fazer essa verificação, 
        ele pensa if elemento, se elemento existe, ou seja, 
        tem alguma coisa que seja um valor que não seja nulo, 
        que não seja vazio, que testou vazio ou zero ou false 
        ou null ou undefined, se for diferente de tudo isso, 
        então vai cair como uma condição verdadeira. 
        Então eu posso deixar nossa lógica um pouco mais sucinta.
        */
    }else{
        alert('Elemento ou seletor não encontrado!');
    }
    
}





const listaDeTeclas=document.querySelectorAll('.tecla');

let contador=0;
/* enquanto

while (contador<listaDeTeclas.length){

    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];

    const idAudio=`#som_${instrumento}`;

    tecla.onclick=function(){
        tocaSom(idAudio);
    }

    contador+=1;

    console.log(contador);
}
*/


for (let contador=0; contador<listaDeTeclas.length;contador++){
    
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    const idAudio=`#som_${instrumento}`;

    tecla.onclick=function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown=function(evento){
        
        console.log(evento.code);
        
        if(evento.code==='Space'|| evento.code==='Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }

}

/*
listaDeTeclas.forEach(tecla=>
    tecla.onlick = function(){
    const instrumento=tecla.classList[1];
    const idAudio=`#som_${instrumento}`;
    tocaSom(idAudio);

})
*/


/*  document.querySelector('#som_tecla_pom').play();
dá o seguinte erro: 
"Uncaught (in promise) DOMException: play() 
failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"

*/
/*
Quando atribuímos uma função para um elemento e, na verdade, quando escrevemos o nome da função
 e abrimos e fechamos parênteses imediatamente, não estamos guardando essa função dentro do 
 atributo onclick, isso é uma peculiaridade do arquivo JavaScript. 
 Já estamos dizendo para o navegador passar nessa parte e executar essa função imediatamente.

Portanto, se dentro do arquivo “.js” queremos guardar uma função em um atributo onclick, 
precisamos retirar esse parênteses, porque só assim se ele vai guardar dentro do onclick
a referência, esse nome da função e não vai necessariamente executá-la no mesmo momento 
em que ela é guardada. Tem um pouco a ver com a ordem de execução do código JavaScript.
*/