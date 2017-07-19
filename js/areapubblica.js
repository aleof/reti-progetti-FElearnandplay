function init(){
    zoom();
}

function zoom() {
    document.body.style.zoom = "100%";
}

function menu(){
    if(document.getElementById("nav").getAttribute("class")=="prova")
        document.getElementById("nav").setAttribute("class", "menu-responsive");
    else
        document.getElementById("nav").setAttribute("class","prova");   
}