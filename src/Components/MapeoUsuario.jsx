import React  from "react";
import { useState } from 'react';
import Usuario from './Usuario';

const MapeoUsuario = (props) => {

    let idRandom1 = Math.round(Math.random()*1000)
    let idRandom2 = Math.round(Math.random()*1000)
    let idRandom3 = Math.round(Math.random()*1000)
  
    //const [nombre, setNombre] = useState('');
  
    let usuarios = [
      {nombre: "Juan", nombreUsuario: "juancito22", email: "juan22@gmail.com", id: idRandom1},
      {nombre: "Jose", nombreUsuario: "djose00", email: "jose00@gmail.com", id:idRandom2},
      {nombre: "Martin", nombreUsuario: "tincho", email: "tincho@gmail.com", id: idRandom3},
    ]
  
    return(
      <>
  
        {!usuarios? 'cargando...' : usuarios.map((item,index) => {
          return(
              <Usuario key={item.id} nombre={item.nombre} 
              nombreUsuario={item.nombreUsuario}
              email={item.email}
              id={item.id}/>
              )
            })}
      </>
    )
  }

export default MapeoUsuario;