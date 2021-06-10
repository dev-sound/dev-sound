
document.querySelector("#menu-hamburger").addEventListener("click",function(){
    document.querySelector("#nav-side").style.display = "block"
 })
 
 document.querySelector(".close").addEventListener("click",function(){
     document.querySelector("#nav-side").style.display = "none"
 })
 
 let alternated = false;
 document.querySelector("#open_drop").addEventListener("click", function() {
   
     if(!alternated){
         document.querySelector("#drop-list").style.display = "block";
        return alternated = true
     }
 
     if(alternated){
         document.querySelector("#drop-list").style.display = "none";
         alternated = false
     }
 
 })

let banner1 = document.querySelector("#banner1")
let banner2 = document.querySelector("#banner2")
let slide = true
setInterval(function(){
    if (slide) {
        document.querySelector("#banner1").style.display = "block"
        document.querySelector("#banner2").style.display ="none"
        slide = false
    } else {
        document.querySelector("#banner1").style.display = "none"
        document.querySelector("#banner2").style.display ="block"
        slide = true
    }
},
3000)
