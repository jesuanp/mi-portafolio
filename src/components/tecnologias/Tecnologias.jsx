import React from 'react';
import s from './Tecnologias.module.css';
import { Bootstrap,
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongoDB,
    mongoose,
    nodeJS,
    npm,
    postgreSQL,
    react,
    redux,
    sequelize,
    socketIO } from './png/logos';

export default function Tecnologias(){

    return (
        <>
            <div className={s.divScroll} id="Tecnologias"></div>
            <div className={s.container}>
                <div className={s.divTitle}>
                    <h1>Tecnologías</h1>
                    <div className={s.borderBottom}></div>
                </div>

                <div className={s.divInfo}>

                    <div id='Front-Back' className={s.frontBack}>
                        <div className={s.frontEnd}>
                            <h2>Front-End</h2>
                            <div className={s.divImg}>
                                <img src={html} alt="HTML" />
                                <span>HTML 5</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={css} alt="CSS" />
                                <span>CSS 3</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={javascript} alt="javaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={react} alt="React" />
                                <span>React</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={redux} alt="Redux" />
                                <span>Redux</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={Bootstrap} alt="Bootstrap" />
                                <span>Bootstrap</span>
                            </div>
                        </div>

                        <div className={s.backEnd}>
                            <h2>Back-End</h2>
                            <div className={s.divImg}>
                                <img src={sequelize} alt="Sequelize" />
                                <span>Sequelize</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={nodeJS} alt="Node.js" />
                                <span>Node.js</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={socketIO} alt="Socket.io" />
                                <span>Socket.io</span>
                            </div>
                            <div className={`${s.divImg} ${s.extra}`}>
                                <img style={{width: "6.9rem"}} src={mongoose} alt="Mongoose" />
                                <span>Mongoose</span>
                            </div>
                            <div className={`${s.divImg} ${s.extra}`}>
                                <img  style={{width: "6.9rem"}} className={s.iconLargo} src={express} alt="Express" />
                                <span className={s.express}>Express</span>
                            </div>
                        </div>
                    </div>

                    <div id='herramientas-baseDeDatos' className={s.herramientasYBaseDeDatos}>
                        <div className={s.herramientas}>
                            <h2>Herramientas</h2>
                            <div className={s.divImg}>
                                <img src={npm} alt="npm" />
                                <span>npm</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={git} alt="git" />
                                <span>git</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={github} alt="Github" />
                                <span>github</span>
                            </div>
                        </div>

                        <div className={s.baseDeDatos}>
                            <h2>Base de datos</h2>
                            <div className={s.divImg}>
                                <img src={postgreSQL} alt="PostgreSQL" />
                                <span>PostgreSQL</span>
                            </div>
                            <div className={s.divImg}>
                                <img src={mongoDB} alt="MongoDB" />
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className={s.divInfo}> */}

                    
                    
                    
                    {/* <div className={s.divImg}>
                        <img src="" alt="" />
                    </div> */}

                    
                {/* </div> */}
            </div>
        </>
    )
}