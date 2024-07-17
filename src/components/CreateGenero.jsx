import { useRef } from "react"
import api from "../services/api"

export function CreateGenero() {
    const nameRef = useRef()

    function addGenero(){
        const nombre = nameRef.current.value;
        console.log(nombre);

        api.post('/generos/', {nombre:nombre})
        .then(response =>{
            alert('Genero creado')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <input ref={nameRef} placeholder="Ingrese nombre genero" />
            <button onClick={addGenero}>Add</button>
        </div>
    )
}