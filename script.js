let clicked = false;
let button = document.getElementById("add");
let container = document.getElementsByClassName("container");
let list = document.getElementsByClassName("list-section");

button.addEventListener("click", function() {
    if(!clicked){
        clicked = true;
        button.classList.add("rotate");
        container[0].classList.add("blur");
        list[0].classList.add("show");
        
    } else {
        button.classList.remove("rotate");
        clicked = false;
        container[0].classList.remove("blur");
        list[0].classList.remove("show");
    }
});
