import { useEffect, useState } from "react"
import api from "../services/api"

export function GeneroList(){
    /**
     * api es un objeto de tipo axios
     * por lo tanto tiene metodos PUT, POST, GET, DELETE
     */
    const [listadoGeneros, setListadoGeneros] = useState([]);

    useEffect(()=>{
        api.get('/generos/')
        .then(response =>{
            setListadoGeneros(response.data);
        })  
        .catch( error =>{
            console.log(error.message);
        });
    }, [])

    return (
        <div>
            <h2>Listado generos</h2>
            {
                listadoGeneros.map( g => <p>{g.id} {g.nombre}</p>)
            }
        </div>
    )
}