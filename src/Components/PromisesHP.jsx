import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Promises = () => {

    const url = "https://hp-api.herokuapp.com/api/characters";
    const [objeto, setObjeto] = useState("");
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setObjeto(responseJSON);
        console.log(objeto);
    }

    useEffect(()=>{
        fetchApi();
    },[])

    return(
        <>
        <ul>
            {!objeto? "cargando..." : objeto.map ((objeto) => {
                // probar con un for para que no tire todos los card 
                return(
                    <div className='card-personaje'>
                        <li key={objeto.id}>
                            {` - name: ${objeto.name}`}
                            {` - specie: ${objeto.species}`}
                            {` - house: ${objeto.house}`}
                        </li>
                    </div>
                )
            })}
        </ul>
        </>
    )



    
}

export default Promises;