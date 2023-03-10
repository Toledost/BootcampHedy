import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <>
        <head>
            <title>Porfolio</title>
        </head>
        <body>
            <header>
                <hr />
                <h1 className='title'>Toledo, Bruno Daniel</h1>
                <nav className='navbar'>
                    <h1 className='h1-cv'>CV</h1>
                    <ul>
                        <li><a href="#perfil">Perfil</a></li>
                        <li><a href="#experiencia">Experiencia</a></li>
                        <li><a href="#educacion">Educación</a></li>
                        <li><a href="#conocimientos">Conocimientos</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#idiomas">Idiomas</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="perfil">
                    <h2 className='subtitulo'>Perfil Profesional</h2>
                        <div style={{paddingLeft: "5%"}}>
                            <p>
                                Estudiante avanzado en Ingenieria en Sistemas (UTN-FRC) con intereses 
                                en el Desarrollo Web. 
                            </p>
                        </div>
                </section>

                <section id="experiencia">
                    <h2 className='subtitulo'>Experiencia Laboral</h2>
                    <div style={{paddingLeft: "5%"}}>
                        <h3>
                            <strong>Pabex, Cordoba</strong> - 
                            <i> JavaScript Mobile Developer</i>
                        </h3>
                        <p>(Noviembre 2021 - Febrero 2023)</p>
                    </div>
                    <div style={{paddingLeft: "7%"}}>
                        <li>Desarrollo de aplicaciones en Apache Cordova</li>
                        <li>Prueba y corrección de bugs generales</li>
                        <li>Propuesta y desarrollo de mejoras</li>
                        <li>Ejecución de test manuales utilizando Postman</li>
                        <li>Proyecto de la empresa: aplicación Web/Mobile, gestor de video consultas médicas</li>
                    </div>
                </section>

                <section id="educacion">
                    <h2 className='subtitulo'>Educación</h2>
                    <div style={{paddingLeft: "5%"}}>
                        <h3>
                            <strong>Ingenieria en Sistemas de Informacion</strong> - 
                            <i> Universidad Tecnologica Nacional</i>
                        </h3>
                        <p>2018 - Actualidad</p>

                        <h3>
                            <strong>Bachiller en Economía y Administración</strong> - 
                            <i> Instituto Parroquial Monte Cristo</i>
                        </h3>
                        <p>2012 - 2017</p>
                    </div>
                </section>

                <section id="conocimientos">                
                    <h2 className='subtitulo'>Conocimientos</h2>
                    <div style={{paddingLeft: "5%"}}>
                        <li>JavaScript (Angular y React)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        
                        <li>C#</li>
                        <li>Git</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </div>
                </section>

                <section id="proyectos">
                    <h2 className='subtitulo'>Proyectos</h2>
                    <div style={{paddingLeft: "5%"}}>
                        <h3>
                            <strong>Materia: Programación de Aplicaciones Visuales I</strong>
                        </h3>
                        <i> Diseño de sistema para una inmobiliaria: </i> <a href="https://github.com/Toledost/RepoPav">Proyecto Final Pav</a>

                        <h3>
                            <strong>Materia: Programación de Aplicaciones Visuales II</strong>
                        </h3>
                        <i> ABMC de artículos: </i> <a href="https://github.com/Toledost/ProyectoFinalPav2">Proyecto Final Pav2</a>
                    </div>
                </section>

                <section id="idiomas">                
                    <h2 className='subtitulo'>Idiomas</h2>
                    <div style={{paddingLeft: "5%"}}>
                        <li><strong>Inglés:</strong> Basico</li>
                        <li><strong>Español:</strong> Nativo</li>
                    </div>
                </section>
            
            </main>
        </body>
        </>
    )
}

export default Home