import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout/contacto.css';

import {
    logoGithubContacto,
    logoKaggleContacto,
    logoLinkedInContacto,
    logoTwitterContacto,
    logoCorreoContacto
} from '../../assets/assets.js';

function Contacto() {
    return (
        <div className="contacto-container">
            <h1>¡Ponte en Contacto! 📬</h1>
            <p>
                ¿Tienes alguna pregunta o deseas colaborar en un proyecto? <br /> ¡Me encantaría saber de ti!
                Puedes encontrarme y ver más de mi trabajo en las siguientes plataformas:
            </p>

            <div className="contacto-icons">
                <div className="icon-item-contac">
                    <a href="https://www.linkedin.com/in/wuendy-s-velasquez-c-4b8379297/" target="_blank" rel="noopener noreferrer">
                        <p>LinkedIn</p>
                        <img src={logoLinkedInContacto} alt="LinkedIn" />
                    </a>
                </div>
                <div className="icon-item-contac">
                    <a href="https://www.kaggle.com/wuendyv" target="_blank" rel="noopener noreferrer">
                        <p>Kaggle</p>
                        <img src={logoKaggleContacto} alt="Kaggle" />
                    </a>
                </div>
                <div className="icon-item-contac">
                    <a href="https://x.com/Wuendy_V_" target="_blank" rel="noopener noreferrer">
                        <p>X - Twitter</p>
                        <img src={logoTwitterContacto} alt="Twitter" />
                    </a>
                </div>
                <div className="icon-item-contac">
                    <a href="https://github.com/xt120" target="_blank" rel="noopener noreferrer">
                        <p>GitHub</p>
                        <img src={logoGithubContacto} alt="GitHub" />
                    </a>
                </div>
                <div className="icon-item-contac">
                    <NavLink to="/servicios">
                        <p>Gmail</p>
                        <img src={logoCorreoContacto} alt="Gmail" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
