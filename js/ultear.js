var bar = document.getElementById("bar");
var men = document.getElementById("menu");

bar.addEventListener("click", accion);

function accion(){
    var temp = men.style.display;
    if(temp == "none"){
        men.style.display = "flex";
    }
    else{
        men.style.display = "none";
    }
}
