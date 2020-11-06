// Création des variables contenant les éléments à manipuler afin de nous empêcher d'avoir à tout retaper à chaque fois.
var appearFirst = document.getElementById('appearFirst');
var appearSecond = document.getElementById('appearSecond');
var appearThird = document.getElementById('appearThird');
// Création d'un tableau contenant toutes les variables ci-dessus pour faciliter leur utilisation future.
var appearTable = [appearFirst, appearSecond, appearThird];

// Pour chaque élément du tableau, je définis l'opacité à 0 au chargement de la page afin que mes éléments soient tous invisibles.
appearTable.forEach(element => {
    element.style.opacity = 0;
});
// On écoute, on surveille l'évènement scroll ( ça pourrait être un click). Fenêtre où est affiché le document

window.addEventListener('scroll', function () {

    //scrollY axe vertical
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    
    if  (scrollValue>500) {
        appearTable.forEach(element => {
            element.style.opacity = 1;
        });
// Effet d'apparition
        appearFirst.style.transition='opacity 1s';
        appearSecond.style.transition='opacity 1s 0.5s';
        appearThird.style.transition='opacity 2s 1s';
    }
    else {
        
        appearTable.forEach(element => {
        element.style.opacity = 0;
    });


    }
})