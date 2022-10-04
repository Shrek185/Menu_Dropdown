src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"

$(document).ready(function() {
    var botao = $('.bt1');//classe no 'a' que vai ser cliclado
    var dropDown = $('.ul-noticias');    // calsse do submemnu que vai abrir
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt2');//classe no 'a' que vai ser cliclado
    var dropDown = $('.ul-ul-entret');    // calsse do submemnu que vai abrir
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt3');//classe no 'a' que vai ser cliclado
    var dropDown = $('.ul-fale-c');    // calsse do submemnu que vai abrir
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });