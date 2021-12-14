import React from 'react'
import './normalize.css'
import './index.css'
import logo from '../../img/logo2.png'
import headerImg from '../../img/headimg.gif'
import clanfest from '../../img/Captura.JPG'
import tuherra from '../../img/Captura3.JPG'
import picountries from '../../img/Captura4.JPG'
import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ImHeart } from "react-icons/im";

export const Index = () => {
    return (
        <div>
            <header class="header">
                <div class="header__contenedor">
                    <div class="header__barra">
                        <div class="header__logo">
                            <img src={logo} alt="" />
                        </div>
                        <nav class="navegacion">
                            <a class="navegacion__link" href="#sobremi">Sobre mi</a>
                            <a class="navegacion__link" href="#habilidades">Habilidades</a>
                            <a class="navegacion__link" href="#proyectos">Proyectos</a>
                            <a class="navegacion__link" href="#contacto">Contacto</a>
                        </nav>
                    </div>
                    <div class="header__grid">
                        <div class="header-texto">
                            <h1 class="header-heading">Nestor Raul Camacho </h1>
                            <h3>Desarrollador FullStack</h3>
                            <a href="https://drive.google.com/file/d/1tXEjbs47-qDXOGy-lq7EPY040a-lpmKr/view?usp=sharing" target="_blank" class="header__boton">Descargar CV</a>
                        </div>
                        <div class="header__grafico">
                            <img class="header__imagen" src={headerImg} alt="imagen app" />
                        </div>
                    </div>
                </div>
            </header>
            <main class="nucleus" id='sobremi'>
                <h2 class="nucleus__heading">Sobre mi</h2>
                <div class="nucleus__contenedor">
                    <div class="nucleus__grid">

                        <div class="listado">
                            <div class="listado__elemento">
                                <h2 class="listado__heading">Desarrollador FullStack, con enfasis en Front-End</h2>
                                <p class="listado__texto">
                                    Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales, futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.

                                    Apasionado con el trabajo que realizo, ofreciendo en cada proyecto total atención, dedicación, personalización y calidad.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </main>
            <section className="habilidades" id="habilidades">
                <div className="habilidades__contenedor">
                    <h2 class="habilidades__heading">Conocimientos técnicos y habilidades </h2>

                    <div className="habilidades__grid">

                        <ul className="habilidades__listado">
                            <h3 className="habilidades__titulo"> Desarrollo FrontEnd (lado del cliente)</h3>
                            <li className="habilidades__hab">
                                React.js
                            </li>
                            <li className="habilidades__hab">
                                Redux
                            </li>
                            <li className="habilidades__hab">
                                Metodologias BEM
                            </li>
                            <li className="habilidades__hab">
                                Html
                            </li>
                            <li className="habilidades__hab">
                                Bootstrap
                            </li>
                            <li className="habilidades__hab">
                                React-Native
                            </li>
                            <li className="habilidades__hab">
                                Sass
                            </li>
                            <li className="habilidades__hab">
                                Control de versiones: Git/GitHub
                            </li>
                        </ul>
                        <ul className="habilidades__listado">
                            <h3 className="habilidades__titulo"> Desarrollo BackEnd (lado del servidor)</h3>
                            <li className="habilidades__hab">
                                Express
                            </li>
                            <li className="habilidades__hab">
                                PostgreSQL
                            </li>
                            <li className="habilidades__hab">
                                Node.js

                            </li>
                            <li className="habilidades__hab">
                                CMS Wordpress,
                            </li>

                        </ul>

                        <ul className="habilidades__listado">
                            <h3 className="habilidades__titulo"> Soft Skills</h3>
                            <li className="habilidades__hab">
                                Comunicación
                            </li>
                            <li className="habilidades__hab">
                                Trabajo en equipo
                            </li>
                            <li className="habilidades__hab">
                                Actitud de servicio
                            </li>
                            <li className="habilidades__hab">
                                Autodidacta
                            </li>

                        </ul>

                    </div>
                </div>

            </section>
            <section className="proyectos" id="proyectos">
                <div className="proyectos__contenido">
                    <h2 className="proyectos__heading" >Proyectos</h2>
                    <div className="proyectos__grid">
                        <div className="listado__elemento">
                            <div class="listado">
                                <div class="listado__contenido">
                                    <div className="listado__proyect">
                                        <h2 class="listado__heading">ClanFest</h2>
                                        <p class="listado__texto">
                                            Clanfest fue desarrollada para la ultima instancia evaluativa del bootcamp
                                            de Henry, utilizando SCRUM como metodología de trabajo, bajo la
                                            supervisión y guía de un Teach Leader, y se presentaron demos
                                            semanales a un Product Owner previo a la entrega final,
                                            para informar el estado de la aplicación. El proyecto
                                            consiste en una aplicación web para encontrar,
                                            crear y administrar todo tipo de eventos. Se construyó
                                            el Backend utilizando JavaScript, y Express. MongoDB y
                                            Mongoose para la administración de la base de datos.
                                            Mientras que el frontend se construyó con TypeScript, React,
                                            Redux, CSS y Bootstrap.
                                        </p>
                                        <div className="listado__botones">
                                            <a className="listado__boton" href="https://github.com/christopherBryan1996/PF" target="_blank">Repo</a>
                                            <a className="listado__boton" href="https://flamboyant-golick-d7cb40.netlify.app/" target="_blank">Demo</a>
                                        </div>
                                    </div>
                                    <div className="listado__img">
                                        <img src={clanfest} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="proyectos__grid">
                        <div className="listado__elemento">
                            <div class="listado">
                                <div class="listado__contenido">
                                    <div className="listado__proyect">
                                        <h2 class="listado__heading">Tuherramientacom.co</h2>
                                        <p class="listado__texto">
                                            E-commerce realizado con wordpress, woocommerce, en el cual los clientes
                                            pueden comprar herramientas de construccion, el mismo cuenta con carro de compras,
                                            atencion al cliente por medio de WhatsApp y mas funcionalidades
                                        </p>
                                        <div className="listado__btn">

                                            <a className="listado__boton" href="https://tuherramientacom.co/" target="_blank">Demo</a>
                                        </div>
                                    </div>
                                    <div className="listado__img">
                                        <img src={tuherra} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="proyectos__grid">
                        <div className="listado__elemento">
                            <div class="listado">
                                <div class="listado__contenido">
                                    <div className="listado__proyect">
                                        <h2 className="listado__heading">PICountries</h2>
                                        <p className="listado__texto">
                                            App en la cual se pueda ver información de distintos países utilizando la api externa restcountries y a partir de ella poder,

                                            Buscar paises
                                            Filtrarlos / Ordenarlos
                                            Crear actividades turísticas
                                        </p>
                                        <p className='listado__texto'>Tecnologias usadas: </p>

                                        <p className='listado__texto'> 
                                            React,
                                            Redux, 
                                            Express,
                                            Sequelize - Postgres</p>
                                        <div className="listado__btn">

                                            <a className="listado__boton" href="https://github.com/Nestrra/PI--Countries" target="_blank">Repo</a>
                                        </div>
                                    </div>
                                    <div className="listado__img">
                                        <img src={picountries} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </section>
            <footer className="footer" id="contacto">
                <div className="footer__contenedor">
                    <h2 className="footer__heading">Contacto</h2>
                    <div className="footer__contacto">
                        <div className="footer__icono">
                            <a href="https://www.linkedin.com/in/nestor-raul-camacho/" target="_blank"> <FaLinkedinIn fontSize='6rem' color='white' /></a>
                        </div>
                        <div className="footer__icono">
                            <a href="https://github.com/Nestrra" target="_blank">  <FaGithub fontSize='6rem' color='white' /></a>
                        </div>
                        <div className="footer__icono">
                            <a href="mailto:nestrra@gmail.com"> <BiMailSend fontSize='6rem' color='white' /></a>
                        </div>

                    </div>
                    <div>
                        <p className="footer__copy">Hecho con <ImHeart /> por © Nestor Raul Camacho <span>Noviembre 2021</span></p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
