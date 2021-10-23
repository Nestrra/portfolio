import React from 'react'
import './head.css'

export const Head = () => {
    return (
        <>
            <div className="container-head">

                <div className="photo"></div>
                <h1 className="me-title">Hola, soy
                    <span> Raul Camacho</span>
                    <br />
                    Desarrollador Full Stack Web Developer
                </h1>
                <div>
                    <a href="#proyectos">Proyectos</a>
                    <a href="https://drive.google.com/file/d/1sTENLkAZYO0lq_Fo99fpvi-owc51TA8V/view?usp=sharing">Descargar CV</a>
                </div>

            </div>

        </>
    )
}
