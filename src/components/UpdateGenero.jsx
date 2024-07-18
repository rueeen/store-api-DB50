// Importa los hooks useEffect y useRef de React.
import { useEffect, useRef } from "react";
// Importa el hook useParams de react-router-dom para acceder a los parámetros de la URL.
import { useParams } from "react-router-dom";
// Importa la instancia configurada de axios desde el archivo de servicios.
import api from "../services/api";

// Define el componente funcional UpdateGenero.
export function UpdateGenero() {
    // Extrae el parámetro id de la URL utilizando useParams.
    const { id } = useParams();
    // Crea una referencia para el input del nombre del género.
    const nombreRef = useRef();

    // Función asíncrona para actualizar el género.
    const updateGenero = async () => {
        // Obtiene el valor actual del input utilizando la referencia.
        const nombre = nombreRef.current.value;
        console.log('Actualizando genero con id', id);
        try {
            // Realiza una solicitud PUT a la API para actualizar el género.
            const response = await api.put(`/generos/${id}/`, { id: id, nombre: nombre });
            console.log('Respuesta del servidor:', response);
            // Muestra una alerta al usuario indicando que el género se ha actualizado.
            alert('Genero actualizado');
            // Redirige al usuario a la página de listado de géneros.
            window.location.href = '/list-generos';
        } catch (error) {
            // Imprime cualquier error que ocurra durante la solicitud en la consola.
            console.error('Error al actualizar el genero:', error.response ? error.response.data : error.message);
        }
    };

    // useEffect se ejecuta después de que el componente se monta.
    useEffect(() => {
        // Función asíncrona para obtener los datos del género por su ID.
        const getGenero = async () => {
            console.log('Buscando genero con id', id);
            try {
                // Realiza una solicitud GET a la API para obtener los datos del género.
                const response = await api.get(`/generos/${id}/`);
                // Establece el valor del input con el nombre del género obtenido.
                nombreRef.current.value = response.data.nombre;
            } catch (error) {
                // Imprime cualquier error que ocurra durante la solicitud en la consola.
                console.log('Error al obtener el genero:', error.message);
            }
        };

        // Llama a getGenero para obtener los datos del género.
        getGenero();
    }, [id]); // El array [id] asegura que este efecto se ejecute cuando el id cambia.

    // Renderiza el componente.
    return (
        <div>
            <h2>Actualizar genero</h2>
            {/* Input para ingresar el nuevo nombre del género, con una referencia asignada a nombreRef. */}
            <input ref={nombreRef} placeholder="Ingrese nuevo nombre genero" />
            {/* Botón que llama a la función updateGenero cuando se hace clic en él. */}
            <button onClick={updateGenero}>Update</button>
        </div>
    );
}
