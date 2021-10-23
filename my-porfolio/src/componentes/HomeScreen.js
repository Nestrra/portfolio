import React from 'react'
import { About } from './About'
import { Head } from './Head'
import { Proyectos } from './Proyectos'
import { Skills } from './Skills'


export const HomeScreen = () => {
    return (
        <div>
            <Head />
            <About/>
            <Proyectos/>
            <Skills/>


        </div>
    )
}
