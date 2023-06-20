var random1 = Math.floor(Math.random()*6) + 1 ; 
var randomImage1 = "images/dice" + random1 + ".png" ;
var image1 = document.querySelectorAll("img")[0] ;

image1.setAttribute("src" , randomImage1) ; 

var random2 = Math.floor(Math.random()*6) + 1 ;
var randomImage2 = "images/dice" + random2 + ".png" ; 
var image2 = document.querySelectorAll("img")[1] ; 

image2.setAttribute("src",randomImage2) ; 

if(random1 == random2){
    document.getElementById("heading").innerHTML = "DRAW!"
} else if(random1 > random2){
    document.getElementById("heading").innerHTML = "PLAYER 1 WINS"
} else {
    document.getElementById("heading").innerHTML = "PLAYER 2 WINS"
}