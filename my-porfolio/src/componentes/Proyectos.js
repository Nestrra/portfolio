import React from 'react'
import './proyectos.css'

export const Proyectos = () => {
    return (
        <div id="proyectos" className="Container-proyectos">
                <h2>Proyectos</h2>
                <div className="card-proyect">
                    <div className='img'>
                            <h3>PICOUNTRIES</h3>
                            <p>Es un proyecto individual, realizado para el Bootcamp de Henry,
                                en el cual puedes ver los paises, por medio del consumo de un API,
                                puedes filtrar por continente, buscar paises, craer una actividad turistica y asignarla a uno o varios paises, buscar actividades turisticas,
                                ordenar por poblacion y alfabeticamente. </p>
                                <h4>Tecnologias usadas</h4>
                                <ul>
                                    <li>
                                    React
                                    </li>
                                    <li>
                                    Redux
                                    </li>
                                    <li>
                                    Express
                                    </li>
                                    <li>
                                    Sequelize - Postgres
                                    </li>
                                </ul>
                               <a href="https://github.com/Nestrra/PI--Countries"  target="_blank">Repo en GitHub</a>
                    </div>
                    <div className='img'>
                            <img src="https://www.lareserva.com/sites/default/files/styles/article_image/public/field/image/paisesf.jpg?itok=KzrMtVgf" alt="" />
                    </div>
                </div>
                <div className="card-proyect">
                    <div className='img'>
                    <h3>CLANFEST</h3>
                    <p>Actualmente estamos trabajndo en una app,
                        en la que puedes mantenerte al dia de los
                         eventos de tus amigos, puedes crear eventos, compartirlos e invitar a tus contactos</p>
                         <h4>Tecnologias usadas</h4>
                                <ul>
                                    <li>
                                    React
                                    </li>
                                    <li>
                                    TypeScript
                                    </li>
                                    <li>
                                    Redux
                                    </li>
                                    <li>
                                    Express
                                    </li>
                                    <li>
                                    MongoDB
                                    </li>
                                </ul>
                                <a href="https://github.com/Nestrra/PF"  target="_blank">Repo en GitHub</a>
                    </div>
                    <div className='img'>
                        
                    </div>
                </div>
        </div>
    )
}
