// Importa la biblioteca axios, que es una biblioteca para hacer solicitudes HTTP.
import axios from "axios";

// Crea una instancia de axios con una configuración predefinida.
const api = axios.create({
    // Configura la URL base para todas las solicitudes HTTP realizadas con esta instancia de axios.
    baseURL: 'https://rvalencia.pythonanywhere.com/api'
});

// Exporta la instancia configurada de axios para que pueda ser utilizada en otras partes de la aplicación.
export default api;
