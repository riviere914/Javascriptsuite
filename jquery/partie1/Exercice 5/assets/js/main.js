/* première proposition


$(document).ready(function(){
$("ul>li").css("color","red");

});
*/


// Tout les enfants de UL seront en rouge
$(document).ready(function() { 
$("ul").children().css("color","red");

});
