import React from 'react'
import './header.css'

export const Header = () => {
    return (
        <header class="header">
        <div class="header__contenedor">
            <div class="header__barra">
                <div class="header__logo">
                    <img src="../../img/logo2.png" alt=""/>
                </div>
                <nav class="navegacion">
                    <a class="navegacion__link" href="#">¿Qué es?</a>
                    <a class="navegacion__link" href="#">¿Cómo funciona</a>
                    <a class="navegacion__link" href="#">Precios</a>
                    <a class="navegacion__link" href="#">Contratar</a>
                </nav>
            </div>
            <div class="header__grid">
                <div class="header-texto">
                    <h1 class="header-heading">Recibe y realiza pagos con Nucleus</h1>
                    <a href="#" class="header__boton">Obtener cuenta</a>
                </div>
                <div class="header__grafico">
                    <img class="header__imagen" src="../../img/headimg.jpg" alt="imagen app"/>
                </div>
            </div>
        </div>
    </header>
    )
}
