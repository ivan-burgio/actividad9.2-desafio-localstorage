var dato = localStorage.getItem('dato');

var datoElement = document.getElementById("data");
if (dato) {
    datoElement.textContent = dato;
} else {
    datoElement.textContent = "";
}