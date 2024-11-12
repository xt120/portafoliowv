// Proyectos.js
import React, { useState, useMemo } from 'react';
import '../../styles/layout/projects.css';
import '../../styles/App.css';
import {
    proyecto1Img,
    proyecto1Buscar,
    proyecto1Datos,
    proyecto1Interconsulta,
    proyecto1Procedimiento,
    proyecto1Registro,
    proyecto2Img,
    proyecto3Img,
    proyecto4Img,
} from "../../assets/assets.js";

function Proyectos({ setProyectosText, setBgEffect }) {
    const [selectedHex, setSelectedHex] = useState(null);
    const [dropEffect, setDropEffect] = useState(false);
    const [rippleEffect, setRippleEffect] = useState(false); // Estado para manejar el efecto ripple
    const [lockedHex, setLockedHex] = useState(null);


    // Lista de proyectos (solo 4)
    const projects = useMemo(() => [
        {
            id: 1,
            title: 'Sistema de Gestión para Clínica',
            description: 'Desarrollado en Visual Basic para aplicaciones en Excel, este sistema permite la gestión de perfiles de pacientes en una clínica, con almacenamiento seguro y funcionalidades avanzadas de búsqueda y registro.',
            img: proyecto1Img,
            tags: ['#VisualBasic', '#Gestión', '#Salud'],
            bgColor: 'rgba(100, 300, 200, 0.1)',
            language: 'vba',
            content: (
                <div className="project-content">
                    <h2>Descripción del proyecto</h2>
                    <img src={proyecto1Img} alt="Imagen del Proyecto" />
                    <p>
                        Este sistema fue desarrollado en <strong>Visual Basic para Aplicaciones (VBA)</strong> sobre <strong>Excel</strong>,
                        y está orientado a resolver la problemática de gestión de pacientes en el área de nefrología de una institución del sector salud.
                        El problema principal radicaba en la necesidad de controlar y registrar datos de pacientes, incluyendo perfiles, interconsultas
                        y procedimientos realizados. Para dar solución a esto, se creó una aplicación que permite gestionar toda esta información de manera eficiente,
                        con un almacenamiento seguro y funcionalidades avanzadas de búsqueda. La base de datos también está en Excel, siendo utilizada únicamente
                        para guardar los datos.
                    </p>
                    <h2>Interfaz de Búsqueda</h2>
                    <p>
                        La interfaz de búsqueda fue creada utilizando tres cuadros de texto (textbox), que permiten la búsqueda por <strong>DNI</strong>,
                        <strong>Apellidos</strong> y <strong>Nombres</strong>. Además, cuenta con dos botones:
                        uno para buscar un paciente existente y otro para registrar un nuevo paciente. Los resultados de la búsqueda se muestran en un ListBox,
                        donde se podrá seleccionar el paciente deseado. Aquí puedes ver una captura de pantalla de esta interfaz:
                    </p>
                    <img src={proyecto1Buscar} alt="Interfaz de Búsqueda" />
                    <h2>Datos del Paciente</h2>
                    <p>
                        Una vez que un paciente ha sido registrado previamente, se puede acceder a su perfil de datos a través de un <strong>UserForm</strong>.
                        Este perfil está conectado con la base de datos de Excel y muestra información detallada del paciente, como su nombre, apellidos,
                        número de documento, historial clínico y otros datos relevantes. Además, en esta interfaz se encuentran dos botones:
                        uno para registrar interconsultas y otro para registrar procedimientos. Aquí tienes una captura de pantalla del perfil de paciente:
                    </p>
                    <img src={proyecto1Datos} alt="Datos del Paciente" />
                    <h2>Registro de Interconsulta</h2>
                    <p>
                        El <strong>UserForm de Interconsulta</strong> permite registrar los detalles de las interconsultas que se realizan a los pacientes,
                        incluyendo fecha, diagnóstico y otros datos relevantes para el seguimiento clínico del paciente. A continuación, se muestra una captura de pantalla de esta interfaz:
                    </p>
                    <img src={proyecto1Interconsulta} alt="Registro de Interconsulta" />
                    <h2>Registro de Procedimiento</h2>
                    <p>
                        Similar al registro de interconsultas, el <strong>UserForm de Procedimientos</strong> permite registrar todos los procedimientos médicos realizados en los pacientes,
                        incluyendo detalles como el diagnóstico, el procedimiento ejecutado, la ubicación, los operadores y otros datos importantes. A continuación se muestra la interfaz utilizada para registrar procedimientos:
                    </p>
                    <img src={proyecto1Procedimiento} alt="Registro de Procedimiento" />
                    <h2>Registro Nuevo</h2>
                    <p>
                        Para pacientes nuevos que ingresan por primera vez a la clínica, se utiliza un <strong>UserForm de Registro Nuevo</strong>,
                        donde se recopilan datos como el nombre completo, apellidos, número de documento, historial clínico, fecha de nacimiento y más.
                        Esta interfaz es esencial para mantener un control adecuado sobre los nuevos pacientes que se registran en la clínica. Aquí se muestra la captura de esta interfaz:
                    </p>
                    <img src={proyecto1Registro} alt="Registro Nuevo" />
                    <h2>Resultado final</h2>
                    <p>
                        Todo este sistema fue diseñado para mejorar la gestión de pacientes en el área de nefrología. Como resultado final, he creado un video que muestra el funcionamiento completo del sistema.
                    </p>
                    <div className="project-video">
                <iframe
                    width="780"
                    height="440"
                    src="https://www.youtube.com/embed/J574OQDs04E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
                </div>
            ),
            
        },
        {
            id: 2,
            title: 'Algoritmo de Clusterización',
            description: 'Implementación de un algoritmo de clusterización utilizando datos extraídos de Kaggle. El objetivo fue agrupar datos similares para análisis predictivo y descubrimiento de patrones.',
            img: proyecto2Img,
            tags: ['#Clusterización', '#Kaggle', '#MachineLearning'],
            bgColor: 'rgba(200, 200, 200, 0.1)',
            language: 'python'
        },
        {
            id: 3,
            title: 'Big Data con Apache Spark',
            description: 'Uso de Apache Spark y un clúster de varios workers para entrenar modelos de aprendizaje automático sobre grandes conjuntos de datos, mejorando la eficiencia y precisión del modelado.',
            img: proyecto3Img,
            tags: ['#BigData', '#ApacheSpark', '#Distribuido'],
            bgColor: 'rgba(200, 200, 200, 0.1)',
            language: 'python'
        },
        {
            id: 4,
            title: 'Detección de Fracturas con CNN',
            description: 'Desarrollo de un modelo de redes neuronales convolucionales (CNN) para la detección automática de fracturas en imágenes de rayos X, con alta precisión y velocidad de procesamiento.',
            img: proyecto4Img,
            tags: ['#CNN', '#RedesNeuronales', '#Salud'],
            bgColor: 'rgba(255, 255, 255, 0.1)', // Azul claro con baja opacidad
            language: 'python',
            content: (
                <div className="project-content">
                    <h2>Descripción del proyecto</h2>
                    <img src={proyecto4Img} alt="Imagen del Proyecto" />
                    <p>
                        Este sistema fue desarrollado en <strong>Visual Basic para Aplicaciones (VBA)</strong> sobre <strong>Excel</strong>,
                        y está orientado a resolver la problemática de gestión de pacientes en el área de nefrología de una institución del sector salud.
                        El problema principal radicaba en la necesidad de controlar y registrar datos de pacientes, incluyendo perfiles, interconsultas
                        y procedimientos realizados. Para dar solución a esto, se creó una aplicación que permite gestionar toda esta información de manera eficiente,
                        con un almacenamiento seguro y funcionalidades avanzadas de búsqueda. La base de datos también está en Excel, siendo utilizada únicamente
                        para guardar los datos.
                    </p>
                </div>
            )
        },
    ], []);

    // Funciones para manejar el cambio de texto en App.js
    const handleMouseEnter = (projectId) => {
        if (!lockedHex) { // Solo actualiza si no hay un hexágono bloqueado
            const project = projects.find(p => p.id === projectId);
            setProyectosText({
                title: project.title,
                description: project.description,
                tags: project.tags
            });
        }
    };

    const handleMouseLeave = () => {
        if (!lockedHex) { // Solo restablece si no hay un hexágono bloqueado
            setProyectosText({
                title: 'Proyectos',
                description: 'Aquí podrás ver los proyectos en los que he trabajado. Van desde proyectos de desarrollo hasta análisis de datos. Puedes ver un resumen de cada proyecto y probarlos por ti mismo, a través de los enlaces.',
                tags: ['#Desarrollo', '#AnálisisDeDatos', '#Proyectos']
            });
        }
    };


    const handleProjectClick = (projectId, event) => {
        console.log('Hexágono clicado:', projectId); 
        console.log('Target:', event.target); 
    
        const container = document.querySelector(".hex-container");
        const hexagons = container.querySelectorAll(".hexagon");
    
        if (selectedHex === projectId) {
            setLockedHex(null);
            setSelectedHex(null);
            setDropEffect(false);
            setRippleEffect(false);  // Resetea rippleEffect a false cuando se deselecciona
            setProyectosText({
                title: 'Proyectos',
                description: 'Aquí podrás ver los proyectos en los que he trabajado. Van desde proyectos de desarrollo hasta análisis de datos. Puedes ver un resumen de cada proyecto y probarlos por ti mismo, a través de los enlaces.',
                tags: ['#Desarrollo', '#AnálisisDeDatos', '#Proyectos']
            });
        } else {
            setLockedHex(projectId);
            setSelectedHex(projectId);
            setDropEffect(true);
            setRippleEffect(true);  // Activa rippleEffect cuando se selecciona

            const project = projects.find(p => p.id === projectId);
            setProyectosText({
                title: project.title,
                description: project.description,
                tags: project.tags
            });
    
            const targetRect = event.target.getBoundingClientRect();
            const hexagonElements = Array.from(hexagons);
    
            hexagonElements.forEach(hexagon => {
                const rect = hexagon.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(rect.left - targetRect.left, 2) + Math.pow(rect.top - targetRect.top, 2)
                );
                const rippleFactor = Math.min(distance / 10, 100); 
                console.log('Ripple factor:', rippleFactor); 
                hexagon.style.setProperty('--ripple-factor', rippleFactor);

            });
    
            container.classList.add('show-ripple');

            console.log('Ripple effect:', rippleEffect);
    
            setTimeout(() => {
                container.classList.remove('show-ripple');
                hexagonElements.forEach(hexagon => hexagon.style.removeProperty('--ripple-factor'));
                setRippleEffect(false);  // Resetea rippleEffect después de la animación
            }, 1000); // Duración de la animación ripple
        }
    };
    


    // Patrón de disposición de hexágonos (basado en tu ejemplo)
    const honeycomb = [3, 4, 5, 4, 3];

    // Generar la rejilla de hexágonos (solo 4 con proyectos, los demás vacíos)
    const renderHexGrid = () => {
        let projectIndex = 0;
        let hexagonIndex = 0;
        return (
            <div className={`hex-container ${rippleEffect ? 'show-ripple' : ''}`}>
                {honeycomb.map((columnCount, columnIndex) => {
                    const hexagonsInColumn = [];
                    for (let i = 0; i < columnCount; i++) {
                        const project = projectIndex < 4 ? projects[projectIndex] : null;
                        const hasImage = project && project.img;
                        hexagonsInColumn.push(
                            <div
                                key={`hex-${hexagonIndex}`}
                                className={`hexagon ${selectedHex === project?.id ? 'clicked' : ''} ${dropEffect && selectedHex !== project?.id ? 'drop' : ''}`}
                                onClick={project ? (e) => handleProjectClick(project.id, e) : undefined}
                                onMouseEnter={project ? () => handleMouseEnter(project.id) : undefined}
                                onMouseLeave={project ? handleMouseLeave : undefined}
                                style={{ backgroundColor: hasImage ? 'transparent' : '#d3d3d3' }}
                            >
                                {hasImage && (
                                    <div className="hexagon-content">
                                        <img src={project.img} alt={project.title} />
                                    </div>
                                )}
                            </div>
                        );
                        hexagonIndex++;
                        if (project) projectIndex++;
                    }
                    return (
                        <div className="hex-column" key={`col-${columnIndex}`}>
                            {hexagonsInColumn}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="projects-container">
            <div className="projects-grid">
                <div className="big-hexagon">
                    {renderHexGrid()}
                </div>
            </div>
            
            <div className={`project-details ${selectedHex ? 'show' : ''}`}>
                {selectedHex && projects.find(p => p.id === selectedHex)?.content}
            </div>
        </div>
    );
}

export default Proyectos;
