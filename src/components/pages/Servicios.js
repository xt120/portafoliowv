import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import {
    logoPython,
    logoSQL,
    logoGit,
    logoHTML,
    logoJS
} from '../../assets/assets.js';

function Servicios() {
    const [messageSent, setMessageSent] = useState(false);

    // Añade el evento de hover cuando el componente se monta
    useEffect(() => {
        document.querySelectorAll('.contact-form button').forEach(button => {
            button.addEventListener('mouseenter', e => {
                if(!button.classList.contains('out')) {
                    button.classList.add('in');
                }
            });

            button.addEventListener('mouseleave', e => {
                if(button.classList.contains('in')) {
                    button.classList.add('out');
                    setTimeout(() => button.classList.remove('in', 'out'), 950);
                }
            });
        });
    }, []);

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('serv_g1seobx', 'template_cmq7lpw', e.target, 'BRvTq57jGr-k2nGcn')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again later.');
            });

        e.target.reset();
    };

    return (
        <div className="servicios-content">
            <p><strong>Análisis de Datos 📊:</strong> Transformo datos complejos en información valiosa mediante técnicas de análisis avanzado y visualización clara. Desde la limpieza de datos hasta la creación de informes detallados, estoy aquí para convertir tus datos en decisiones inteligentes.</p>
            <p><strong>Modelado Predictivo y Machine Learning 🤖:</strong> Desarrollo modelos de aprendizaje automático para predicción, clasificación y segmentación, utilizando técnicas modernas que optimizan la toma de decisiones.</p>
            
            <h2>Tecnologías y Herramientas que Uso 🛠️</h2>
            <div className="icon-section">
                <div className="icon-item"><p className="icon-name">Python</p><img src={logoPython} alt="Python" /></div>
                <div className="icon-item"><p className="icon-name">SQL</p><img src={logoSQL} alt="SQL" /></div>
                <div className="icon-item"><p className="icon-name">Git</p><img src={logoGit} alt="Git" /></div>
                <div className="icon-item"><p className="icon-name">HTML</p><img src={logoHTML} alt="HTML" /></div>
                <div className="icon-item"><p className="icon-name">JavaScript</p><img src={logoJS} alt="JavaScript" /></div>
            </div>

            <h2>¿Tienes un proyecto en mente? 💡</h2>
            <p>¡Hablemos y encontremos la mejor solución para ti!</p>
            
            {messageSent ? (
                <div className="thank-you-message">
                    <h2>¡Gracias por tu mensaje! 🚀</h2>
                    <p>Me pondré en contacto contigo lo antes posible.</p>
                </div>

            ) : (
                <form className="contact-form" onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message" rows="4" required></textarea>
                    <button type="submit" class="button">
                        <div>Send email</div>
                    </button>
                </form>
            )}
            
        </div>
    );
}

export default Servicios;
