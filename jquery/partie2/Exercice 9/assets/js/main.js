/*
$(document).ready(function() {
  $("#green").click(function(){
      $('#text).css("color", "green");

      });
}); */


$(document).ready(function(){
 $(".color").click(function(){
 var divcolor=$(this).attr("id");
 $("#text").css("color",divcolor);

 })

})
  