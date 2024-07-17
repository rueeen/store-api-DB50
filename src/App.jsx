import { GeneroList } from "./components/GeneroList";
import { CreateGenero } from "./components/CreateGenero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function App() {
    return (
        <Router>
            <div>
                <h1>CRUD STORE</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/list-generos'>Listado Generos</Link>
                        </li>
                        <li>
                            <Link to='/create-generos'>Crear Generos</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/list-generos' element={<GeneroList />} />
                    <Route path='/create-generos' element={<CreateGenero />} />
                </Routes>
            </div>
        </Router>
    )
}