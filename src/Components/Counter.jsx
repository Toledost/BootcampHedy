import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [contador, setContador] = useState(0);
    // el parametro del useState es el primer elemento del [array] que es el state
    // en este caso es el contador


    return(
        <>
            <button className='btn' onClick={() => contador === 0 ? null : setContador(contador - 1 )}>restar</button>
            <button className='btn' onClick={() => setContador(contador + 1 )} disabled={contador === 10}>sumar</button>
            <button className='btn' onClick={() => setContador(0)} disabled={contador === 0}>resetear</button>
            <div className='div-contador'>
                Contador: {contador}
            </div>
        </>
    )
}

export default Counter;


// class Counter extends React.Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             contador: 0
//         }

//         this.sumar = () => this.setState({contador: this.state.contador + 1})
//         this.restar = () => this.setState({contador: this.state.contador - 1})
//     }

//     componentDidMount(){
//         console.log('EL componente fue montado');
//     }

//     componentDidUpdate(){
//         console.log("el componente fue actualizado")
//     }

//     render() {
//         return(
//             <>
//             <button onClick={this.restar}> restar</button>
//             <button onClick={this.sumar}> sumar</button>
//             <div>
//                 Conuter: {this.state.contador}
//             </div>
//             </>

//         )
//     }
// }

