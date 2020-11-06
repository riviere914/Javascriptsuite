
function zoom (zoomType){

     var imageWidth= document.getElementById("imagefleurs").clientWidth;

     if(zoomType=='plus'){

    document.getElementById("imagefleur").style.width=(imageWidth+ 20)+ "px";
     }
     if(zoomType=='moins'){

     document.getElementById("imagefleurs").style.width=(imageWidth- 20)+ "px";
}