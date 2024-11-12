// Librerias
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'particles.js';

import './../src/styles/App.css';

// Assets
import {
    spriteImage,
    fondoImage,
    proyecto1Img,
    proyecto2Img,
    proyecto3Img,
    logoPython,
    logoSQL,
    logoGit,
    logoHTML,
    logoJS,
    logob,
    logoGithub,
    logoKaggle,
    logoLinkedIn,
    logoTwitter,
    logoCorreo,
    logoReact
} from './assets/assets.js';

// Components
import Proyectos from './components/pages/Proyectos';
import Servicios from './components/pages/Servicios';
import Contacto from './components/pages/Contacto';

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isContactPage = location.pathname === '/contacto';
    const isServiciosPage = location.pathname === '/servicios'; // Añadido
    const isProyectosPage = location.pathname === '/proyectos'; // Añadido
    const navigate = useNavigate();

    // Estado para el texto dinámico en la página de Proyectos
    const [proyectosText, setProyectosText] = useState({
        title: 'Proyectos',
        description: 'Aquí podrás ver los proyectos en los que he trabajado. Van desde proyectos de desarrollo hasta análisis de datos. Puedes ver un resumen de cada proyecto y probarlos por ti mismo, a traves de los enlaces.',
        tags: ['#Desarrollo', '#AnálisisDeDatos', '#Proyectos']
    });

    // Estado para el efecto de fondo en container
    const [bgEffect, setBgEffect] = useState({
        color: 'rgba(0, 0, 0, 0)', 
        position: { x: '50%', y: '50%' }, 
        active: false 
    });

    useEffect(() => {
        window.particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                },
                color: { value: "#808080" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#808080" },
                    polygon: { nb_sides: 5 }
                },
                opacity: { value: 0.5 },
                size: { value: 5, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#808080",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "repulse" },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 1 } },
                    repulse: { distance: 200, duration: 0.4 }
                }
            },
            retina_detect: true
        });
    }, []);

    return (
        <Router>
            <div id="particles-js"></div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}>Servicios</NavLink></li>
                    <li><NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>Proyectos</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
                </ul>
            </nav>

            <div 
                className={`background-container ${isHomePage ? 'home' : 'other'} ${isContactPage ? 'contact-page': ''}`} 
                style={{ backgroundImage: `url(${fondoImage})` }}
            >

                {isHomePage && (

                    <div className="cards-container">
                        <div className="card" onClick={() => navigate('/proyectos')}>
                            <img src={proyecto1Img} alt="Proyecto 1" />
                            <h3 className="card-text">Detección de Fracturas con CNN</h3>
                        </div>
                        <div className="card" onClick={() => navigate('/proyectos')}>
                            <img src={proyecto2Img} alt="Proyecto 2" />
                            <h3 className="card-text">Algoritmo de Clusterización</h3>
                        </div>
                        <div className="card" onClick={() => navigate('/proyectos')}>
                            <img src={proyecto3Img} alt="Proyecto 3" />
                            <h3 className="card-text">Big Data con Apache Spark</h3>
                        </div>
                    </div>
                )}

                {isServiciosPage && (
                    <div className="servicios-intro">
                        <h1>Servicios 🌟</h1>
                        <p>
                            Ofrezco una variedad de servicios enfocados en programación y ciencia de datos. Cada proyecto es una nueva oportunidad para aplicar mi conocimiento y creatividad, brindando soluciones eficientes y personalizadas.
                        </p>
                    </div>
                )}

                {isProyectosPage && (
                    <div className="proyectos-intro">
                        <h1>{proyectosText.title}</h1>
                        <p>{proyectosText.description}</p>
                        <div className="project-tags">
                            {proyectosText.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <NavLink to="/">
                <div className="sprite" style={{ backgroundImage: `url(${spriteImage})` }}></div>
            </NavLink>



            <div className={`container ${isContactPage ? 'contact-page' : ''} ${bgEffect.active ? 'bg-effect-active' : ''}`}
                style={{
                    '--bg-effect-color': bgEffect.color,
                    '--bg-effect-x': bgEffect.position.x,
                    '--bg-effect-y': bgEffect.position.y
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Routes>
                        <Route path="/" element={(
                            <>
                                <div className="inicio-container">
                                    <div className="welcome-text">
                                        <h1>¡Bienvenido a Mi Portafolio! 🎉</h1>
                                        <p>
                                            ¡Hola! Soy Wuendy, una apasionada programadora y especialista en ciencia de datos. 💻 
                                            Aquí encontrarás una muestra de mis proyectos y habilidades. Me encanta resolver problemas complejos y aprender nuevas tecnologías para ofrecer soluciones creativas e innovadoras. 🚀
                                        </p>
                                        <p>
                                            ¡Espero que disfrutes tu visita y encuentres algo que te inspire! ✨ Si deseas saber más o tienes alguna pregunta, no dudes en contactarme. 📬
                                        </p>
                                        <h2>Tecnologías y Herramientas que Uso 🛠️</h2>
                                    </div>

                                    <div className="spacing"></div>

                                    <div className="icon-section">
                                        <div className="icon-item">
                                            <p className="icon-name">Python</p>
                                            <img src={logoPython} alt="Python" />
                                        </div>
                                        <div className="icon-item">
                                            <p className="icon-name">SQL</p>
                                            <img src={logoSQL} alt="SQL" />
                                        </div>
                                        <div className="icon-item">
                                            <p className="icon-name">Git</p>
                                            <img src={logoGit} alt="Git" />
                                        </div>
                                        <div className="icon-item">
                                            <p className="icon-name">HTML</p>
                                            <img src={logoHTML} alt="HTML" />
                                        </div>
                                        <div className="icon-item">
                                            <p className="icon-name">JavaScript</p>
                                            <img src={logoJS} alt="JavaScript" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )} />

                        <Route path="/proyectos" element={<Proyectos setProyectosText={setProyectosText} setBgEffect={setBgEffect} />} />                    
                        
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>

                </div>
                
            </div>

            <div className="side-menu">
                <NavLink to="/proyectos">
                    <img src={logob} alt="Main Logo" className="main-icon" />
                </NavLink>
                <div className="menu-icons">
                    <a href="https://github.com/xt120" target="_blank" rel="noopener noreferrer">
                        <img src={logoGithub} alt="GitHub" className="icon" />
                    </a>
                    <a href="https://www.kaggle.com/wuendyv" target="_blank" rel="noopener noreferrer">
                        <img src={logoKaggle} alt="Kaggle" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/wuendy-s-velasquez-c-4b8379297/" target="_blank" rel="noopener noreferrer">
                        <img src={logoLinkedIn} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://x.com/Wuendy_V_" target="_blank" rel="noopener noreferrer">
                        <img src={logoTwitter} alt="Twitter" className="icon" />
                    </a>
                    <NavLink to="/servicios">
                        <img src={logoCorreo} alt="Servicios" className="icon" />
                    </NavLink>
                </div>
            </div>


            <div className="footer-bar">
                <p>© 2024 Wuendy Velasquez &nbsp; | &nbsp; Creado con React<img src={logoReact} alt="React Logo" className="react-logo" /></p>
            </div>
        </Router>
    );
}

export default App;
