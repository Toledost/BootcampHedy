import React from 'react';

const Hola = (props) => {
    return (
        <h2>Hola {props.nombre}</h2>
    )
}

// class Hola extends React.Component {
//     render(){
//         return <h2> Hola campers class</h2>
//     }
// }

// exporta todo el archivo react 
export default Hola;
