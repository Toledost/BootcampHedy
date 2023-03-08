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
import Crud from './Components/Crud';
import Error from './Components/Error';
import Eventos from './Components/Eventos';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import MapeoUsuario from './Components/MapeoUsuario';
import Formularios from './Components/Formularios';


function App() {

  return (
    <>
      <Router>
        <ul className='navbar-principal'>
          <li>
            <Link to={'./Home'}>Home</Link>
            <Link to={'./Crud'}>CRUD</Link>
            <Link to={'./Hola'}>Saludo</Link>
            <Link to={'./MapeoUsuario'}>Tarjetas de usuarios</Link>
            <Link to={'./Counter'}>Contador</Link>
            <Link to={'./Mailbox'}>Casilla de mail</Link>
            <Link to={'./Reloj'}>Reloj</Link>
            <Link to={'./Api'}>Apitest</Link>
            <Link to={'./Eventos'}>Eventos</Link>
            <Link to={'./Formularios'}>Formularios</Link>
            <Link to={'./Error'}>Error</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Crud' element={<Crud></Crud>}></Route>
          <Route path='/Hola' element={<Hola></Hola>}></Route>
          <Route path='/MapeoUsuario' element={<MapeoUsuario></MapeoUsuario>}></Route>
          <Route path='/Counter' element={<Counter></Counter>}></Route>
          <Route path='/Mailbox' element={<Mailbox></Mailbox>}></Route>
          <Route path='/Reloj' element={<Reloj></Reloj>}></Route>
          <Route path='/Api' element={<Api></Api>}></Route>
          <Route path='/Eventos' element={<Eventos></Eventos>}></Route>
          <Route path='/Formularios' element={<Formularios></Formularios>}></Route>
          <Route path='/Error' element={<Error></Error>}></Route>
          <Route path='*' element={<Error></Error>}></Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
