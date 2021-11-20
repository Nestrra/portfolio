import React from 'react'
import './proyectos.css'

export const Proyectos = () => {
    return (
        <div className="proyectos-container" id='proyectos'>
                  
            <div className='proyectos'>
                     <h1>Experiencia</h1>
                <div className="proyectosin">
                    <div className="proyectos-body">
                        <h3>Clan-Fest</h3>
                        <p>Clanfest fue desarrollada para la ultima instancia evaluativa del bootcamp de Henry, utilizando SCRUM como metodología de trabajo, bajo la supervisión y guía de un Teach Leader, y se presentaron demos semanales a un Product Owner previo a la entrega final, para informar el estado de la aplicación.
                            El proyecto consiste en una aplicación
                            web para encontrar, crear y administrar todo tipo de
                            eventos. Se construyó el Backend utilizando JavaScript,
                            y Express. MongoDB y Mongoose para la administración de la base de datos.
                            Mientras que el frontend se construyó con TypeScript, React, Redux, CSS y
                            Bootstrap.</p>
                        <div className='botones-link'>

                            <p className="btn">
                                <a href="https://github.com/christopherBryan1996/PF" target="_blank">Repo Git</a>
                            </p>
                            <p className="btn">
                                <a href="https://flamboyant-golick-d7cb40.netlify.app/" target="_blank">Demo</a>
                            </p>
                        </div>
                    </div>
                    <div className="proyectos-img">

                    </div>
                </div>
                <div className="proyectosin">
                    <div className="proyectos-body">
                        <h3>Tuherramientacom.co</h3>
                        <p>E-commerce realizado con wordpress, woocommerce, en el cual los clientes pueden comprar herramientas de construccion, el mismo cuenta con carro de compras, atencion al cliente por medio de WhatsApp y mas funcionalidades </p>
                        <div className='botones-link'>

                            <p className="btn">
                                <a href="https://tuherramientacom.co/" target="_blank">Demo</a>
                            </p>
                        </div>
                    </div>
                    <div className="proyectos-img1">

                    </div>

                </div>



            </div>


        </div>
    )
}
