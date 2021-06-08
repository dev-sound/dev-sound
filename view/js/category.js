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
