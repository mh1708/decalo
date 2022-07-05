window.addEventListener("DOMContentLoaded", function() {
 
   
    
  
  
    // search
    const searchBtn = document.querySelector(".header-link__search");
    const search_box = document.querySelector(".search__box");
    // favor
    const favorBtn = document.querySelector(".header-link__favor");
    const favorBox = document.querySelector(".header__favor");
    // user
    const userBtn = document.querySelector(".header-link__user");
    const userBox = document.querySelector(".header__user")




    searchBtn.addEventListener("click", function() {
        search_box.classList.toggle("show");
        favorBox.classList.remove("show");
        userBox.classList.remove("show");
    })
    userBtn.addEventListener("click", function() {
        userBox.classList.toggle("show");
        search_box.classList.remove("show");
        favorBox.classList.remove("show");
    })
    favorBtn.addEventListener("click", function() {
        favorBox.classList.toggle("show");
        search_box.classList.remove("show");
        userBox.classList.remove("show");

    })


})