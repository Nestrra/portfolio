import React from 'react'
import './footer.css'
import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ImHeart } from "react-icons/im";

export const Footer = () => {
    return (
        <div className="footer" id='footer' >

            <h2>Contacto</h2>
            <div className='container-footer'>

                <div className="iconos" >
                    <a href="https://www.linkedin.com/in/nestor-raul-camacho/" target="_blank"> <FaLinkedinIn fontSize='5rem'  color='navajowhite' /></a>
                   
                </div>
                <div className="iconos">
                    <a href="https://github.com/Nestrra" target="_blank">  <FaGithub fontSize='5rem'  color='navajowhite' /></a>
                  
                </div>
                <div className="iconos">
                    <a href="mailto:nestrra@gmail.com"> <BiMailSend fontSize='5rem' color='navajowhite' /></a>
                   
                </div>

            </div>
        <div>
            <p>Hecho con <ImHeart/> por © Nestor Raul Camacho <span>Noviembre 2021</span></p>
        </div>

        </div>
    )
}
