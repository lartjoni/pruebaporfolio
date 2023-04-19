var porfolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""],
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}
function GetAcercade(acercade) {
    var a = document.getElementById("Acercade");
    a.textContent = acercade;
    return porfolio.Acercade = acercade;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    //alert('File name: ${file.lastModified}'); // e.g my.png
    //alert('Last modified: ${file.lasModified}'); // e.g 1552830408824
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);  // poner barra del reves osea \  mantener altGr luego apretar boton '? el q esta a la derecha del 0
        var arr = s.split('\n'); // esto  '\n'  significa q en texto toma el enter como señal para pasar al sig array [0]a[1]a[2]etc
        GetAcercade(arr[0]);     // osea al siguiente renglon o div en este caso. (relacion hoja html linea 398 a 406)
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3]);
    };
}
