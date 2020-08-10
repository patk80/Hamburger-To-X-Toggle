var toggleButton = document.querySelector(".line-container");
var topLine      = document.querySelector("#line-1");
var middleLine   = document.querySelector("#line-2");
var bottomLine   = document.querySelector("#line-3");

// toggleButton.addEventListener("click", function(){
//     topLine.style.transform = "rotate(-45deg) translate(-15px, 15px)";
//     topLine.style.backgroundColor = "red";
//     middleLine.style.visibility = "hidden";
//     bottomLine.style.transform = "rotate(45deg) translate(-12px, -12px)";
//     bottomLine.style.backgroundColor = "red";
// });

toggleButton.addEventListener("click", function(){
    topLine.classList.toggle("line-1-active");
    middleLine.classList.toggle("line-2-active");
    bottomLine.classList.toggle("line-3-active");
});