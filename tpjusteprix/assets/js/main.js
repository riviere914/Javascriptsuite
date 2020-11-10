/*
// Sélection élément
var input = document.querySelector(' #nombre');


// Générer un nombre aléatoire
var nombreAleatoire = Math.floor(Math.random()*100);
var 

nombreChoisi;

//Créer la fonction à vérifier
function verifier(nombre ) {

    var instruction =document.createElement ('div');

    if (nombre < nombreAleatoire) {
        instruction.texContent = "#"+ " ( " + nombre + ") plus ";

    }
     else if ( nombre> nombreAleatoire) {
          instruction.textContent = "#" + "( " + nombre + " ) moins";

     }

     else {
         instruction.textContent = "#" +"(" + nombre + ") correct";
     }

    document.querySelector("instructions").prepend(instruction);
    }
    */



    var nombre = 0;
    var reponse = null;

    $("document").ready(function() {
        $('#reponse').click(function() {
            nombre= Math.floor(Math.random() *100 )
        }
    
    $('#reponse').submit(function(event) {
         reponse = $('#nombre').val()
         event.preventDefault();
          
         if ('reponse== nombre') {
            $  

         }
         else if (reponse < nombre)
        }

        else 




    });

});


