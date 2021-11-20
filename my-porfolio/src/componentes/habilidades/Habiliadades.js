import React from 'react'
import './habilidades.css'
import { FaCode, FaDatabase, FaUsers } from "react-icons/fa";

export const Habiliadades = () => {
    return (
        <div className="habilidades-container">
            <div>
                <h2>Conocimientos técnicos y habilidades</h2>

                <h3><span><FaCode fontSize='1.8rem' /> </span>  Desarrollo FrontEnd (lado del cliente)</h3>
                <ul>
                    <li>
                        React.js
                    </li>
                    <li>
                        Redux
                    </li>
                    <li>
                        React-Native
                    </li>
                    <li>
                        Html
                    </li>
                    <li>
                        Css
                    </li>
                    <li>
                        Sass
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Control de versiones: Git/GitHub
                    </li>
                </ul>
                <h3><span><FaDatabase fontSize='1.8rem' /> </span>  Desarrollo BackEnd (lado del servidor)</h3>
                <ul>
                    <li>
                        Express
                    </li>
                    <li>
                        PostgreSQL
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        CMS Wordpress,
                    </li>
                </ul>
                <h3><span><FaUsers fontSize='1.8rem' /> </span>  Soft Skills</h3>
                <ul>
                    <li>
                        Comunicación
                    </li>
                    <li>
                        Trabajo en equipo
                    </li>
                    <li>
                       Actitud de servicio
                    </li>
                    <li>
                        Autodidacta,
                    </li>
                </ul>
                <p className="curriculum">
                    <a href="https://drive.google.com/file/d/1KDo04mB5nu4Gm6slmU0N5GqyX3AgFNX9/view?usp=sharing">Descargar CV</a>
                </p>
            </div>
            <div className='img-habilidades'>

            </div>
        </div>
    )
}
