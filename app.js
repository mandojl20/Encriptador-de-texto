function encriptar() {
    let texto = document.getElementById("entradaTexto").value;
    let mensaje = document.getElementById("output_mensaje");
    let imagen = document.getElementById("output_imagen");
    let titulo =document.getElementById("output_titulo");
    let parrafo = document.getElementById("output_texto");
    let textoEncriptado = texto
    .replace(/e/img,"enter")
    .replace(/o/img,"ober")
    .replace(/i/img,"imes")
    .replace(/a/img,"ai")
    .replace(/u/img,"ufat");

    if(texto.length != 0) {
        document.getElementById("entradaTexto").value = textoEncriptado;
        mensaje.textContent = textoEncriptado;
        imagen.style.display = 'none';
        document.getElementById("entradaTexto").value="";
        document.getElementById("output_titulo").style.display = "none";
        document.getElementById("output_texto").style.display = "none";
        document.getElementById("contenedor__output_mensaje").style.display = "show";
        document.getElementById("contenedor__output_mensaje").style.display = "inherit";
        document.getElementById("output_mensaje").style.display = "show";
        document.getElementById("output_mensaje").style.display = "inherit";
        document.getElementById("contenedor__boton3").style.display = "show";
        document.getElementById("contenedor__boton3").style.display = "inherit";
        contenedor__output__imagen
        document.getElementsByClassName("#contenedor__output__imagen").style.display = "none";
    }else {
        imagen.style.display = 'block';
        mensaje.textContent = "";
        titulo.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        document.getElementById("contenedor__boton3").style.display = "none";
        swal( "¡Debes ingresar un texto!","", "warning");
    }
    
}

function desencriptar() {
    let texto = document.getElementById("entradaTexto").value;
    let mensaje = document.getElementById("output_mensaje");
    let imagen = document.getElementById("output_imagen");
    let titulo =document.getElementById("output_titulo");
    let parrafo = document.getElementById("output_texto");
    let textoEncriptado = texto
    .replace(/enter/img, "e")
    .replace(/ober/img, "o")
    .replace(/imes/img, "i")
    .replace(/ai/img, "a")
    .replace(/ufat/img, "u");

    if(texto.length != 0) {
        document.getElementById("entradaTexto").value = textoEncriptado;
        mensaje.textContent = textoEncriptado;
        imagen.style.display = 'none';
        titulo.textContent = "";
        parrafo.textContent = "";
        document.getElementById("entradaTexto").value="";
        document.getElementById("output_titulo").style.display = "none";
        document.getElementById("output_texto").style.display = "none";
        document.getElementById("contenedor__output_mensaje").style.display = "show";
        document.getElementById("output_mensaje").style.display = "inherit";
        document.getElementById("output_mensaje").style.display = "show";
        document.getElementById("output_mensaje").style.display = "inherit";
        document.getElementById("contenedor__boton3").style.display = "show";
        document.getElementById("contenedor__boton3").style.display = "inherit";
        document.getElementsByClassName("#contenedor__output__imagen").style.display = "none";
    }else {
        imagen.style.display = 'block';
        mensaje.textContent = "";
        titulo.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Debes ingresar un texto!", "", "warning");
        document.getElementById("contenedor__boton3").style.display = "none";
    }
    
}

function copiar() {
    let mensaje = document.getElementById("output_mensaje");
    navigator.clipboard.writeText(mensaje.textContent);
    swal("¡Texto copiado!", "", "success");
}
