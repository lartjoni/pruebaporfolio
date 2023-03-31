//funcion modal-1

//funcion modal-2

//funcion modal-3

//funcion modal-4

//funcion modal-5

//funcion que
//cambia el estilo del input a visible
//toma el valor del texto del parrafo con id "text-acercade"
//lo muestra en consola
function cambiar_parrafo() {
    document.getElementById("edit-acercade").style.display = "block";
    let texto = document.getElementsById("text-acercade").innerText;
    console.log(texto);
};

function myFunction2(valor) {
    document.getElementById("text-acercade").innerText = valor;
}

function logMessage(message) {
    console.log(message + "<br>");
}

//controla si se presiona un enter
let textarea = document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [envent: keyup]`);
    if (e.key == "Enter") {
        document.getElementById("edit-acercade").style.display = "none"
    }
});

//carga el contenido de un archivo de texto
//y lo muestra en el parrafo
function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`); //e.g my.png
    alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
    };
    reader.onerror = function () {
        console.log(reader.error);
    };
}