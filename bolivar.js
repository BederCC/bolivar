const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evitar que se envíe el formulario

    const nombre = document.querySelector("#nombre1").value.trim();
    const apellido = document.querySelector("#apellido1").value.trim();
    const nacionalidad = document.querySelector("#nacionalidad1").value.trim();
    const respuesta = document.getElementById("respuesta");

    // Verificar si los campos están vacíos
    if (nombre === "" || apellido === "" || nacionalidad === "") {
        respuesta.textContent = "Todos los campos deben ser completados.";
        return; // Salir de la función si hay campos vacíos
    }

    const respuestaTexto = `Hola ${nombre} ${apellido}, tiene la nacionalidad de ${nacionalidad}`;
    respuesta.textContent = respuestaTexto;

    // Codificar los datos
    const respuestaEncoded = encodeURIComponent(respuestaTexto);

    // Redirigir a la página de resultados
    window.location.href = `bolivar.html?respuesta=${respuestaEncoded}`;
});
