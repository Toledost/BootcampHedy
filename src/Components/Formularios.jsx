import { useState } from "react";

const Formularios = () => {

    const [pais, setPais] = useState('Argentina');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [numRastreo, setNumRastreo] = useState('');
    const [textArea, setTextArea] = useState('');

    

    const handleChangePais = (event) => {
        setPais(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hola ${nombre} ${apellido}, sos del pais: ${pais}, tu correo es: ${correo}, tu numero de telefono: ${telefono}, el tipo de mensaje seleccionado es: ${asunto}..., numero de rastreo: ${numRastreo}, tu mensaje es ${textArea}`)
    }
    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };
    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
    };
    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
    };
    const handleChangeMensaje = (event) => {
        setMensaje(event.target.value);
    };
    const handleChangeRastreo = (event) => {
        setNumRastreo(event.target.value);
    };
    const handleChangeTextArea = (event) => {
        setTextArea(event.target.value);
    };
    
    // const seleccionarTipoMensaje = (idCheck) =>{
    //     var chequeados = [];
    //     if (document.getElementById(idCheck).checked)
    //         {
    //             chequeados.push(document.getElementById(idCheck))
    //         }
    //     console.log(chequeados)
    //     return chequeados
    // }


    return(
        <>
        <h1>Formulario de contacto</h1>
        <form onSubmit={handleSubmit}>
            <div>
                Seleccione pais: 
                <select required value={pais} onChange={handleChangePais}>
                    <option></option>
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Chile">Chile</option>
                    <option value="Peru">Peru</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Paraguay">Paraguay</option>
                </select>
            </div>
            <div>
                <span className="red">*</span>
                Ingresa tu nombre: 
                <input required onChange={handleChangeNombre} />
            </div>
            <div>
                <span className="red">*</span>
                Ingresa tu apellido: 
                <input required onChange={handleChangeApellido} />
            </div>
            <div>
                <span className="red">*</span>
                Ingresa tu correo: 
                <input type="email" required onChange={handleChangeCorreo} />
            </div>
            <div>
                <span className="red">*</span>
                Ingresa tu telefono:  
                <input required onChange={handleChangeTelefono} type="number"/>
            </div>
            <div>
                <span className="red">*</span>
                Tipo de mensaje: 
                <br />
                <input type="checkbox" id="check1" value="Comentario" onChange={handleChangeMensaje} /> Comentario <br />
                <input type="checkbox" id="check2" value="Pregunta" onChange={handleChangeMensaje}/> Pregunta <br />
                <input type="checkbox" id="check3" value="Cumplido" onChange={handleChangeMensaje}/> Cumplido <br />
                <input type="checkbox" id="check4" value="Preocupacion" onChange={handleChangeMensaje}/> Preocupacion <br />
                <input type="checkbox" id="check5" value="Promocion" onChange={handleChangeMensaje}/> Promocion <br />
            </div>
            <div>
                <span className="red">*</span>
                Asunto 
                <br />
                <input type="checkbox" /> Relacionado a un envio <br />
                <input type="checkbox" /> Facturacion <br />
                <input type="checkbox" /> Servicio al cliente <br />
                <input type="checkbox" /> Preocupacion <br />
                <input type="checkbox" /> Productos y servicios <br />
                <input type="checkbox" /> Sitios web/Herramientas automaticas <br />
                <input type="checkbox" /> Empleado de FedEx <br />
                <input type="checkbox" /> Ventas/Marketing <br />
                <input type="checkbox" /> Empleo <br />
                <input type="checkbox" /> Otro <br />
            </div>
            <div>
                <span className="red">*</span>
                Numero de rastreo: 
                <input required onChange={handleChangeRastreo} type="text"/>
            </div>
            <div>
                <span className="red">*</span>
                Tu mensaje: <br />
                <textarea onChange={handleChangeTextArea} cols="30" rows="10"></textarea>
            </div>


            <input type="submit" value="enviar"/>
        </form>
        
        </>
    )
}

export default Formularios;