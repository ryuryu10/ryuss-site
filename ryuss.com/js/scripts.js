var imgArray=new Array();
imgArray[0]="../assets/img/astronomy-1868560.jpg";
imgArray[1]="../assets/img/bg-masthead.jpg";
function showImage(){
    var imgNum=Math.round(Math.random()*3);
    var objImg=document.getElementById("masthead");
    objImg.src=imgArray[imgNum];
    setTimeout(showImage,2000); 
}
