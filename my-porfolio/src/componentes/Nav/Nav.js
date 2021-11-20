import React from 'react'
import './Nav.css'

export const Nav = () => {
    return (
        <div className="nav-container">

            <div className="logo">
                <a href=""></a>
            </div>

            <div className="ul">
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="#about">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#proyectos">Experiencia</a>
                    </li>
                    <li>
                        <a href="#footer">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
