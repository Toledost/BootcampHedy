//import logo from './giratorio.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Hola from './Components/Hola';
import Usuario from './Components/Usuario';
import Counter from './Components/Counter';
import Reloj from './Components/Reloj';
import Promises from './Components/Promises';
import PromisesHP from './Components/PromisesHP';
import Mailbox from './Components/Mailbox';
import Saludo from './Components/Saludo';
import Api from './Components/Api';
import ComponenteDos from './Components/ComponenteDos';
import Error from './Components/Error';
import Eventos from './Components/Eventos';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import MapeoUsuario from './Components/MapeoUsuario';


function App() {

  // let auto = [
  //   {marca: "Ford", color: "azul"},
  //   {marca: "Fiat", color: "rojo"},
  //   {marca: "Renault", color: "gris"}
  // ]

  // useEffect(() => {
  //   console.log("soy usseEffect");
  // }, [])

  // function actualizarReloj(){
  //   let momentoActual = new Date();
  //   let hora = momentoActual.getHours();
  //   let minuto = momentoActual.getMinutes();
  //   let segundo = momentoActual.getSeconds();
  //   let horaImprimible = hora + " : " + minuto + " : " + segundo
  //   horaImprimible = hora + " : " + minuto + " : " + segundo

  //   document.form_reloj.reloj.value = horaImprimible
  //   setTimeout("mueveReloj()",1000)
  // }
  // const [show, setShow] = useState(true); 

  return (
    <>
      {/* <div className={'contenedor'}>
        <p>{`El auto es de marca ${auto[0].marca} y de color ${auto[0].color}. `}</p>
        <p>{`El auto es de marca ${auto[1].marca} y de color ${auto[1].color}. `}</p>
        <p>{`El auto es de marca ${auto[2].marca} y de color ${auto[2].color}. `}</p>
      </div> */}
      
      {/* <Promises></Promises> */}
      {/* <PromisesHP></PromisesHP> */}

      {/* <button onClick={() => setShow(!show)}>
        {show ? "mostrar mail" : "ocultar mail"}
      </button> */}
      {/* <Mailbox  meb = {1}></Mailbox> */}

      
      {/* <Api/> */}
      
      <Router>
        <ul className='navbar'>
          <li>
            <Link to={'./Home'}>Home</Link>
            <Link to={'./ComponenteDos'}>Componente dos</Link>
            <Link to={'./Hola'}>Saludo</Link>
            <Link to={'./MapeoUsuario'}>Tarjetas de usuarios</Link>
            <Link to={'./Counter'}>Contador</Link>
            <Link to={'./Mailbox'}>Casilla de mail</Link>
            <Link to={'./Reloj'}>Reloj</Link>
            <Link to={'./Api'}>Apitest</Link>
            <Link to={'./Eventos'}>Eventos</Link>
            <Link to={'./Error'}>Error</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/ComponenteDos' element={<ComponenteDos></ComponenteDos>}></Route>
          <Route path='/Hola' element={<Hola></Hola>}></Route>
          <Route path='/MapeoUsuario' element={<MapeoUsuario></MapeoUsuario>}></Route>
          <Route path='/Counter' element={<Counter></Counter>}></Route>
          <Route path='/Mailbox' element={<Mailbox></Mailbox>}></Route>
          <Route path='/Reloj' element={<Reloj></Reloj>}></Route>
          <Route path='/Api' element={<Api></Api>}></Route>
          <Route path='/Eventos' element={<Eventos></Eventos>}></Route>
          <Route path='/Error' element={<Error></Error>}></Route>
          <Route path='*' element={<Error></Error>}></Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
