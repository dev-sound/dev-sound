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

document.querySelector("#next-icon-2").addEventListener("click", function() {
   
         document.querySelector("#productImage1").style.display = "none";
         document.querySelector("#productImage2").style.display = "inline-block"
     })

document.querySelector("#next-icon-1").addEventListener("click", function(){

    document.querySelector("#productImage2").style.display = "none";
    document.querySelector("#productImage1").style.display = "inline-block"
})



