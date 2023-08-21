document.addEventListener("DOMContentLoaded", function () {
    
    var inputText = document.querySelector("#inputText");
    var buttonText = document.querySelector("#buttonText");


    buttonText.addEventListener("click", function () {
        var dato = inputText.value;
        if (dato.trim() !== "") {
            localStorage.setItem("dato", dato);
            inputText.value = ""; 
        } else {
            alert("Por favor, ingrese un dato válido.");
        }
    });
});