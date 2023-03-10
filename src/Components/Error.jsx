import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { Button } from 'reactstrap';

const Error = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h3>La página que buscas no se encuentra, por favor dirígete a:</h3>
            <Button style={{ backgroundColor: '#3f51b5', color: 'white', fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 2rem', border: 'none', borderRadius: '10px', marginTop: '2rem', cursor: 'pointer' }}>
                    <Link to='/Home' style={{ color: 'black', textDecoration: 'none'  }}>
                        <h3>Home</h3>
                    </Link>
            </Button>
        </div>
      </div>
      <p>Esto es solo a modo de prueba</p>
    </>
  )
}

export default Error;
