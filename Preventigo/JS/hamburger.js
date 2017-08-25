var i = 1;
function showMenu() {
    var menu = document.getElementById("nav-menu");
    var ham =  document.getElementsByClassName("burger")[0];
    var close =  document.getElementsByClassName("close")[0];
    i++;
    if (i % 2 == 0) {
        ham.style.display = "none";
        close.style.display = "inline";
        menu.style.display = "inline-block";
    } else {
        ham.style.display = "inline";
        close.style.display = "none";
        console.log("ashb n fg fg g");
        menu.style.display = "none";
    }
}