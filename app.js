let carts = document.querySelectorAll(".cart-btn");
let popup = document.querySelector(".popup");
let ok = document.querySelector(".ok");
let slide = document.querySelector(".slide");
let home = document.querySelector(".home");


for(let cart of carts){
    cart.addEventListener("click",function(e){ 
        e.preventDefault();
    popup.classList.add("openPopup");
});
}


ok.addEventListener("click",function(){
    popup.classList.remove("openPopup");
    // submit.classList.remove("hide");
    // cont.classList.remove("blur");
})
