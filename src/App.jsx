// Importa los componentes GeneroList, CreateGenero y UpdateGenero desde la carpeta components.
import { GeneroList } from "./components/GeneroList";
import { CreateGenero } from "./components/CreateGenero";
import { UpdateGenero } from "./components/UpdateGenero";
// Importa BrowserRouter, Routes, Route y Link de react-router-dom para manejar la navegación y el enrutamiento.
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Define el componente funcional App.
export function App() {
    return (
        // Envolvemos toda la aplicación dentro de Router para habilitar el enrutamiento.
        <Router>
            <div>
                <h1>CRUD STORE</h1>
                {/* Navegación principal de la aplicación */}
                <nav>
                    <ul>
                        <li>
                            {/* Enlace a la página de listado de géneros */}
                            <Link to='/list-generos'>Listado Generos</Link>
                        </li>
                        <li>
                            {/* Enlace a la página para crear un nuevo género */}
                            <Link to='/create-generos'>Crear Generos</Link>
                        </li>
                    </ul>
                </nav>
                {/* Definición de rutas de la aplicación */}
                <Routes>
                    {/* Ruta para mostrar la lista de géneros */}
                    <Route path='/list-generos' element={<GeneroList />} />
                    {/* Ruta para mostrar el formulario de creación de un nuevo género */}
                    <Route path='/create-generos' element={<CreateGenero />} />
                    {/* Ruta para mostrar el formulario de actualización de un género, utilizando el parámetro id */}
                    <Route path='/update-genero/:id' element={<UpdateGenero />} />
                </Routes>
            </div>
        </Router>
    );
}
