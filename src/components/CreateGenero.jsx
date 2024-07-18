// Importa el hook useRef de React para crear una referencia mutable a un elemento del DOM.
import { useRef } from "react";
// Importa la instancia configurada de axios desde el archivo de servicios.
import api from "../services/api";

// Define el componente funcional CreateGenero.
export function CreateGenero() {
    // Crea una referencia para el input del nombre del género.
    const nameRef = useRef();

    // Función asíncrona para agregar un nuevo género.
    async function addGenero() {
        // Obtiene el valor actual del input utilizando la referencia.
        const nombre = nameRef.current.value;
        console.log(nombre); // Imprime el nombre en la consola para verificar.

        try {
            // Realiza una solicitud POST a la API para crear un nuevo género.
            await api.post('/generos/', { nombre: nombre });
            // Muestra una alerta al usuario indicando que el género se ha creado.
            alert('Genero creado');
            // Limpia el valor del input.
            nameRef.current.value = '';
            // Redirige al usuario a la página de listado de géneros.
            window.location.href = '/list-generos';
        } catch (error) {
            // Imprime cualquier error que ocurra durante la solicitud en la consola.
            console.log(error.message);
        }
    }

    // Renderiza el componente.
    return (
        <div>
            <h2>Crear genero</h2>
            {/* Input para ingresar el nombre del género, con una referencia asignada a nameRef. */}
            <input ref={nameRef} placeholder="Ingrese nombre genero" />
            {/* Botón que llama a la función addGenero cuando se hace clic en él. */}
            <button onClick={addGenero}>Add</button>
        </div>
    )
}
