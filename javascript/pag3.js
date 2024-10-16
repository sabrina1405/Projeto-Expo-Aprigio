var selecionado = true;

function exibir() {
    var barra = document.getElementById("aside");

    if (selecionado == true) {
        selecionado = false;
        barra.style.display = 'block';
        barra.style.transition = "1s";


    } else if (selecionado == false){
        selecionado = true;
        barra.style.display = 'none';
        barra.style.transition = "1s";
    }
    return;
}