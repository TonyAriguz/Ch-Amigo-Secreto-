# 🎉 Challenge Amigo Secreto

> Una aplicación web simple y divertida para gestionar sorteos de "Amigo Secreto". Agrega nombres, realiza sorteos aleatorios y reinicia el proceso cuando sea necesario.

![image](https://github.com/user-attachments/assets/7fc4dcf2-598b-4fdc-a230-5a36b4e8edd0)  


---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Características Principales](#características-principales)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Dependencias](#dependencias)
6. [Posibles Problemas y Soluciones](#posibles-problemas-y-soluciones)
7. [Contribuciones](#contribuciones)
8. [Licencia](#licencia)
9. [Contacto](#contacto)

---

## 📝 Descripción del Proyecto

El **Challenge Amigo Secreto** es una aplicación web interactiva que permite a los usuarios:

- Ingresar nombres de amigos en un campo de texto.
- Ver una lista actualizada de los nombres agregados.
- Realizar sorteos aleatorios para seleccionar un "Amigo Secreto".
- Reiniciar el proceso cuando todos los amigos han sido sorteados.

La interfaz es intuitiva, moderna y utiliza tecnologías como **HTML**, **CSS** y **JavaScript** para proporcionar una experiencia fluida al usuario.

---

## ✨ Características Principales

- **Ingreso de Nombres:** Los usuarios pueden agregar nombres de amigos mediante un campo de texto.
- **Validación de Entrada:** Si no se ingresa un nombre, se muestra un mensaje de advertencia debajo del campo de entrada.
- **Sorteo Aleatorio:** Se selecciona un amigo al azar de la lista de nombres ingresados.
- **Reinicio Automático:** Cuando todos los amigos han sido sorteados, se muestra un botón para reiniciar el proceso.
- **Interfaz Responsiva:** El diseño es limpio y adaptable a diferentes tamaños de pantalla.

---

## 💻 Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/challenge-amigo-secreto.git
   cd challenge-amigo-secreto
   ```

2. **Abre el archivo `index.html`:**
   - No se requiere ninguna herramienta especial para ejecutar este proyecto. Simplemente abre el archivo `index.html` en tu navegador web.

---

## ▶️ Uso

1. **Añadir Nombres:**
   - Escribe un nombre en el campo de texto y haz clic en "Añadir Amigo".
   - Los nombres agregados aparecerán en una lista visible.

2. **Realizar Sorteo:**
   - Haz clic en el botón "Suerte con tu amigo" para sortear un amigo al azar.
   - El resultado del sorteo se mostrará en la pantalla.

3. **Reiniciar el Proceso:**
   - Cuando todos los amigos hayan sido sorteados, aparecerá un botón para reiniciar el proceso.

---

## 🛠️ Dependencias

Este proyecto no tiene dependencias externas. Está construido únicamente con tecnologías básicas:

- **HTML5:** Estructura del proyecto.
- **CSS3:** Estilo y diseño visual.
- **JavaScript (Vanilla JS):** Lógica interactiva del proyecto.

Si deseas personalizar los estilos, puedes editar el archivo `style.css`.

---

## ❓ Posibles Problemas y Soluciones

### 1. **No se muestran estilos o imágenes**
   - **Causa:** Las rutas de los archivos CSS o imágenes pueden estar mal configuradas.
   - **Solución:** Asegúrate de que los archivos `style.css` y las imágenes (`assets/`) estén en la misma carpeta que `index.html`. Si mueves los archivos, actualiza las rutas en el código HTML.

### 2. **El botón "Añadir Amigo" no funciona**
   - **Causa:** Puede ser un problema con el archivo JavaScript.
   - **Solución:** Verifica que el archivo `app.js` esté correctamente vinculado en el HTML (`<script src="app.js" defer></script>`).

### 3. **El mensaje de advertencia no aparece**
   - **Causa:** El elemento `<p>` con el ID `mensajeAdvertencia` puede estar oculto por defecto.
   - **Solución:** Asegúrate de que el atributo `display` del mensaje esté configurado como `none` inicialmente y que el JavaScript lo cambie a `block` cuando sea necesario.

### 4. **Errores en navegadores antiguos**
   - **Causa:** Algunos navegadores antiguos pueden no soportar ciertas características de JavaScript o CSS.
   - **Solución:** Usa navegadores modernos como Google Chrome, Firefox o Microsoft Edge.

---

## 👥 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Añade nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT License](LICENSE). Esto significa que puedes usar, modificar y distribuir el código libremente, siempre que incluyas la licencia original.

---

## 📧 Contacto

Si tienes preguntas, sugerencias o simplemente quieres saludar, no dudes en contactarme:

- **Correo Electrónico:** tonyaroariguz@hotmail.com
- **GitHub:** (https://github.com/TonyAriguz)

---

🌟 **Gracias por visitar este proyecto!** 🌟  
Espero que encuentres útil esta aplicación. ¡Diviértete sorteando amigos secretos!
