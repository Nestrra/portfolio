import React from 'react'
import { About } from './About'
import { Footer } from './footer/Footer'
import { Habiliadades } from './habilidades/Habiliadades'
import { Head } from './Head'
import { Nav } from './Nav/Nav'
import { Proyectos } from './Proyectos/Proyectos'




export const HomeScreen = () => {
    return (
        <div>

            <Nav/>
            <Head />
            <About/>
            <Habiliadades/>
            <Proyectos/>
            <Footer/>
          


        </div>
    )
}
