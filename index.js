
window.onscroll = function(){
    scroll=document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll>20){
        header.classList.add("nav_mod");
    }else{
        header.classList.remove("nav_mod");
    }
}




document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  var nombre = document.getElementById("nombre").value;
  var archivo = document.getElementById("archivo").files[0];
  
  var resultado = document.createElement("div");
  resultado.className = "recuadro";
  resultado.innerHTML = "Nombre: " + nombre + "<br>Archivo: " + archivo.name;
  
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.addEventListener("click", function() {
    resultado.remove();
  });
  
  resultado.appendChild(botonBorrar);
  
  resultado.addEventListener("click", function() {
    var url = URL.createObjectURL(archivo);
    var a = document.createElement("a");
    a.href = url;
    a.download = archivo.name;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resultado").appendChild(resultado);
  
  document.getElementById("nombre").value = "";
  document.getElementById("archivo").value = "";
});


