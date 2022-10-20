import React, { useEffect, useState } from "react";
import "../App.css";
const Eventos = () => {
const [tamanoTexto, setTamanoTexto] = useState('');
const [titulo, setTitulo] = useState('');
const [nombre, setNombre] = useState('');
const [texto, setTexto] = useState('');
const [posicion, setPosicion] = useState('');
const [parrafo, setParrafo] = useState('')

const CambiarTamanoTexto = () => {
    switch (tamanoTexto) {
    case "fuente-24":
        setTamanoTexto("fuente-48");
        break;
    case "fuente-48":
        setTamanoTexto("fuente-100");
        break;
    case "fuente-100":
        setTamanoTexto("fuente-24");
        break;
    default:
        setTamanoTexto("fuente-24");
    }
};

const CambiarPosicionTitulo = () => {
    switch (posicion) {
    case "titulo-center":
        setPosicion("titulo-left");
        break;
    case "titulo-left":
        setPosicion("titulo-rigth");
        break;
    case "titulo-rigth":
        setPosicion("titulo-center");
        break;
    default:
        setPosicion("titulo-center");
    }
};

const cambiarEstiloParrafo = (event) => {
    console.log("se cambio el estilo")
    setParrafo("parrafo-actualizado")
}
const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {texto}

        alert(blog.texto)

}

useEffect(()=> {
    document.addEventListener('keydown',detectKeydown)
}, [])
/* addEventListener: Es un método que registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.

El evento keydown se produce cuando se presiona una tecla. A diferencia del evento keypress (en-US), el evento keydown es producido por todas las teclas, independientemente de si estas son caracteres o no. */
const detectKeydown = (event) => {
    console.log("Clicked Key: ", event.key)

if(event.key === "k"){
    cambiarEstiloParrafo();
}
    }


return (

    <div>
        <form>
            <div>
                <label>
                Título
                    <input required type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Contenido
                    <input required type="text" name="contenido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
            </div>
            <div>
                <h1 className={posicion} onClick={() => CambiarPosicionTitulo()}>
                    Titulo movil
                </h1>
                <h3 className={parrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quo mollitia autem accusantium error deserunt facilis facere sint, eum sunt quam? Corporis tempora, distinctio saepe repellendus error ipsum labore temporibus!
                </h3>
            </div>
        </form>
            <h3>Autor del blog</h3>
            <div className="blog-input">
                <h5 className={tamanoTexto}>Título: {titulo}</h5>
                <h3 className={tamanoTexto}>Blog: {nombre}</h3>

                <button onClick={() => CambiarTamanoTexto()}>Cambiar Fuente</button>
            </div>
        <form onSubmit={handleSubmit}>
            <input name="texto" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
};

export default Eventos;
