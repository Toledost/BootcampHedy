import React  from "react";
import { useState } from 'react';


const Usuario = (props) => {

  const [nombre, setNombre] = useState("sin nombre");

    return (
      <>
        <button className='btn' onClick={() => setNombre(props.nombre)} >mostrar Nombre</button>
        <button className='btn' onClick={() => setNombre("'incognito'")} >ocultar Nombre</button>
        <div className="contenedor">
          <div className='div-contenedor' key={props.id}>
              <div className='div'>
                <h1 id="title-bienvenida">{"Bienvenido: " + nombre}</h1>
                <div className="datos-usuarios">
                  <p> <strong>Tu usuario es: </strong> {props.nombreUsuario}</p>
                  <p> <strong>Email: </strong>  {props.email}</p>
                  <p> <strong>Id: </strong> {props.id}</p>
                </div>
              </div>
          </div>
        </div>
        
      </>
    )
}



export default Usuario ;