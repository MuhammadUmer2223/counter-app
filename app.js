var heading = document.querySelector("#heading");

function increament(){
    heading.innerHTML = ++heading.innerHTML;
}
function decreament(){
    heading.innerHTML = --heading.innerHTML;
   
}
function reset(){
    heading.innerHTML = 0;
}