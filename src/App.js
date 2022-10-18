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
import { useEffect, useState } from 'react';
import Home from './Components/Home';


function App() {

  // let auto = [
  //   {marca: "Ford", color: "azul"},
  //   {marca: "Fiat", color: "rojo"},
  //   {marca: "Renault", color: "gris"}
  // ]

  // useEffect(() => {
  //   console.log("soy usseEffect");
  // }, [])


  // let idRandom1 = Math.round(Math.random()*1000)
  // let idRandom2 = Math.round(Math.random()*1000)
  // let idRandom3 = Math.round(Math.random()*1000)

  // const [nombre, setNombre] = useState('');

  // let usuarios = [
  //   {nombre: "Juan", nombreUsuario: "juancito22", email: "juan22@gmail.com", id: idRandom1},
  //   {nombre: "Jose", nombreUsuario: "djose00", email: "jose00@gmail.com", id:idRandom2},
  //   {nombre: "Martin", nombreUsuario: "tincho", email: "tincho@gmail.com", id: idRandom3},
  // ]

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
        <br></br>
        <Link to={'./Home'}>Home</Link>
        <br></br>
        <Link to={'./ComponenteDos'}>Componente dos</Link>

        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/ComponenteDos' element={<ComponenteDos></ComponenteDos>}></Route>
          <Route path='*' element={<Error></Error>}></Route>

          
        </Routes>
      </Router>


      </>
      // {/* <div className={'contenedor'}>
      //     <h1 className='title'>
      //       Bienvenidos nuevos usuarios
      //     </h1>
      //     <div className='div-contenedor'>
      //     <Usuario nombre={usuarios[0].nombre} 
      //             nombreUsuario={usuarios[0].nombreUsuario}
      //             email={usuarios[0].email}
      //             id={usuarios[0].id}/>

      //     <Usuario nombre={usuarios[1].nombre} 
      //             nombreUsuario={usuarios[1].nombreUsuario}
      //             email={usuarios[1].email}
      //             id={usuarios[1].id}/>

      //     <Usuario nombre={usuarios[2].nombre} 
      //             nombreUsuario={usuarios[2].nombreUsuario}
      //             email={usuarios[2].email}
      //             id={usuarios[2].id}/>

      //     </div>


      //   {/* <div className='div'>
          
      //     <h1>{`Bienvenido ${usuarios[0].nombre}` }</h1>
      //     <p>{`Tu usuario es: ${usuarios[0].nombreUsuario}`}</p>
      //     <p>{`Email: ${usuarios[0].email}`}</p>
      //     <p>{`Id: ${usuarios[0].id}`}</p>
      //   </div>

      //   <div className='div'>
      //     <h1>{`Bienvenido ${usuarios[1].nombre}` }</h1>
      //     <p>{`Usuario: ${usuarios[1].nombreUsuario}`}</p>
      //     <p>{`Email: ${usuarios[1].email}`}</p>
      //     <p>{`Id: ${usuarios[1].id}`}</p>
      //   </div>

      //   <div className='div'>
      //     <h1>{`Bienvenido ${usuarios[2].nombre}` }</h1>
      //     <p>{`Usuario: ${usuarios[2].nombreUsuario}`}</p>
      //     <p>{`Email: ${usuarios[2].email}`}</p>
      //     <p>{`Id: ${usuarios[2].id}`}</p>
      //   </div> }
      //   <Counter></Counter>
      //   <Reloj></Reloj>
        
      // </div> */}

    
    
    // <div className="App">
    //   <header className="App-header">
    //     <p>Hola Fede, este tambien es un archivo .svg ↓</p>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Este es el proyecto en el que trabajo
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.hospitalvirtual.pabex.com.ar:8443/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Ir a HospitalVirtual
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
