import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <>
        <h1>
            La page que buscas no se encuentra, por favor dirigete a 
            <Link to={'./Home'}>Home</Link>
        </h1>
        <p>Not Found</p>
        
        </>
        
    )
}

export default Error;