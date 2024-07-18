// Importa los hooks useEffect y useState de React.
import { useEffect, useState } from "react";
// Importa la instancia configurada de axios desde el archivo de servicios.
import api from "../services/api";

// Define el componente funcional GeneroList.
export function GeneroList() {
    /**
     * api es un objeto de tipo axios
     * por lo tanto tiene métodos PUT, POST, GET, DELETE
     */

    // Define un estado para almacenar la lista de géneros.
    const [listadoGeneros, setListadoGeneros] = useState([]);

    // Función asíncrona para obtener la lista de géneros desde la API.
    const fetchGeneros = async () => {
        try {
            // Realiza una solicitud GET a la API para obtener los géneros.
            const response = await api.get('/generos/');
            // Actualiza el estado con los datos recibidos.
            setListadoGeneros(response.data);
        } catch (error) {
            // Imprime cualquier error que ocurra durante la solicitud en la consola.
            console.log(error.message);
        }
    };

    // useEffect se ejecuta después de que el componente se monta.
    useEffect(() => {
        // Llama a fetchGeneros para obtener la lista de géneros.
        fetchGeneros();
    }, []); // El array vacío significa que este efecto se ejecuta una sola vez al montar el componente.

    // Función asíncrona para eliminar un género por su ID.
    async function deleteGenero(id) {
        console.log(`Eliminando genero ${id}`);
        try {
            // Realiza una solicitud DELETE a la API para eliminar el género.
            const response = await api.delete(`/generos/${id}`);
            console.log(response);
            // Muestra una alerta al usuario indicando que el género se ha eliminado.
            alert('Genero eliminado');
            // Vuelve a obtener la lista de géneros actualizada.
            fetchGeneros();
        } catch (error) {
            // Imprime cualquier error que ocurra durante la solicitud en la consola.
            console.log(error.message);
        }
    }

    // Función para redirigir a la página de actualización de género.
    function updateGenero(id) {
        console.log(`Actualizando genero ${id}`);
        // Redirige al usuario a la página de actualización del género con el ID especificado.
        window.location.href = '/update-genero/' + id;
    }

    // Renderiza el componente.
    return (
        <div>
            <h2>Listado generos</h2>
            {/* Tabla para mostrar la lista de géneros */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapea sobre la lista de géneros y crea una fila para cada uno */}
                    {
                        listadoGeneros.map(g => (
                            <tr key={g.id}>
                                <td>{g.id}</td>
                                <td>{g.nombre}</td>
                                <td>
                                    {/* Botón para eliminar el género */}
                                    <button onClick={() => deleteGenero(g.id)}>Eliminar</button>
                                    {/* Botón para actualizar el género */}
                                    <button onClick={() => updateGenero(g.id)}>Actualizar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
