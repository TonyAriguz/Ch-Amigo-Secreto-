// Crear un arreglo vacío para almacenar los nombres de los amigos
let amigos = [];
let amigosSorteados = []; // Arreglo para almacenar los amigos ya sorteados

// Función para agregar un amigo desde el campo de entrada
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let nombreInput = document.getElementById("amigo").value;

    // 2. Validar la entrada
    if (nombreInput.trim() === "") {
        // Mostrar el mensaje de advertencia
        document.getElementById("mensajeAdvertencia").style.display = "block";
        return; // Detener la ejecución si el campo está vacío
    }

    // 3. Ocultar el mensaje de advertencia si el nombre es válido
    document.getElementById("mensajeAdvertencia").style.display = "none";

    // 4. Actualizar el array de amigos
    amigos.push(nombreInput);

    // 5. Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Mostrar la lista actualizada de amigos
    actualizarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigosElement = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigosElement.innerHTML = "";

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let listItem = document.createElement("li");

        // Agregar el nombre del amigo al contenido del <li>
        listItem.textContent = `${i + 1}. ${amigos[i]}`;

        // Agregar el <li> a la lista
        listaAmigosElement.appendChild(listItem);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        // Mostrar el mensaje de advertencia
        document.getElementById("mensajeAdvertencia").style.display = "block";
        return;
    }

    // 2. Ocultar el mensaje de advertencia si hay amigos disponibles
    document.getElementById("mensajeAdvertencia").style.display = "none";

    // 3. Verificar si todos los amigos ya han sido sorteados
    if (amigosSorteados.length === amigos.length) {
        // Mostrar el mensaje de reinicio
        mostrarMensajeReinicio();
        return;
    }

    // 4. Generar un índice aleatorio para seleccionar un amigo
    let indiceAleatorio;
    let amigoSorteado;

    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado)); // Asegurarse de que el amigo no haya sido sorteado antes

    // 5. Agregar el amigo sorteado al arreglo de amigosSorteados
    amigosSorteados.push(amigoSorteado);

    // 6. Mostrar el resultado
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto seleccionado es: <strong>${amigoSorteado}</strong></li>`;
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Limpiar los arreglos
    amigos = [];
    amigosSorteados = [];

    // Limpiar la lista de amigos en la interfaz
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    // Ocultar el mensaje de reinicio
    ocultarMensajeReinicio();

    // Ocultar el mensaje de advertencia
    document.getElementById("mensajeAdvertencia").style.display = "none";
}

// Función para mostrar el mensaje de reinicio
function mostrarMensajeReinicio() {
    let mensajeReinicio = document.getElementById("mensajeReinicio");
    mensajeReinicio.style.display = "block";
}

// Función para ocultar el mensaje de reinicio
function ocultarMensajeReinicio() {
    let mensajeReinicio = document.getElementById("mensajeReinicio");
    mensajeReinicio.style.display = "none";
}