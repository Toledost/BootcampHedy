import React  from "react";
import { useState } from 'react';

const Usuarios = (props) => {

  const [nombre, setNombre] = useState("sin nombre");

    return (
      <>
        {/* <p>
            Nuevo nombre: {nombre}
          </p> */}
        <div>

            <button className='btn' onClick={() => setNombre(props.nombre)} >mostrar Nombre</button>
            <button className='btn' onClick={() => setNombre("'incognito'")} >ocultar Nombre</button>

          <div className='div'>
            <h1 id="title-bienvenida">{"Bienvenido: " + nombre}</h1>
            <div className="datos-usuarios">
              <p> <strong>Tu usuario es: </strong> {props.nombreUsuario}</p>
              <p> <strong>Email: </strong>  {props.email}</p>
              <p> <strong>Id: </strong> {props.id}</p>
            </div>
          </div>

        </div>
        
      
      </>
    )
}

export default Usuarios ;