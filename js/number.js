window.addEventListener("DOMContentLoaded",function(){{
     // increaseValue decreaseValue
     var minus = document.querySelector("#decrease");
     var plus = document.querySelector("#increase");
     var number = document.querySelector("#number");
 
     var quantity = 1;
     number.value = quantity;
     minus.addEventListener("click", function() {
         if (quantity > 1) {
             quantity--;
             number.value = quantity;
         }
     });
     plus.addEventListener("click", function() {
         quantity++;
         number.value = quantity;
     })
}})