var isstatus = document.querySelector("h5")

var addfriend = document.querySelector("#add")
var check = 0 

addfriend.addEventListener("click" , function(){
    if (check==0){
   isstatus.innerHTML = "FRIENDS"
   isstatus.style.color = "green"
   check = 1
    }
    else{
        isstatus.innerHTML = "PUTGY"
        isstatus.style.color = "RED"
        check = 0

    }
})
 
// var removethis = document.querySelector("#remove")

// removethis.addEventListener("click" ,function(){
//     isstatus.innerHTML = "Flower"
//     isstatus.style.color = "red"
// })