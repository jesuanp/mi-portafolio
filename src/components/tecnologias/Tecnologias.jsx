import React from 'react';
import s from './Tecnologias.module.css';

export default function Tecnologias(){

    return (
        <>
            <div className={s.divScroll} id="Tecnologias"></div>
            <div className={s.container}>
                <div className={s.divTitle}>
                    <h1>Conocimientos</h1>
                </div>

                <div className={s.divInfo}>

                    <div id='Front-Back' className={s.frontBack}>
                        <div className={s.frontEnd}>
                            <h2>Front-End</h2>
                            <div className={s.divImg}>
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="HTML" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888847.png" alt="CSS" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javaScript" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" />
                            </div>
                            <div className={s.divImg}>
                                <img src="http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" alt="Redux" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="Bootstrap" />
                            </div>
                        </div>

                        <div className={s.backEnd}>
                            <h2>Back-End</h2>
                            <div className={s.divImg}>
                                <img src="http://assets.stickpng.com/thumbs/58482ee4cef1014c0b5e4a75.png" alt="Sequelize" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png" alt="Node.js" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="Socket.io" />
                            </div>
                            <div className={`${s.divImg} ${s.extra}`}>
                                <img style={{width: "6.9rem"}} src="https://camo.githubusercontent.com/7c669e872b214571ae0b5097e8d3db369225a806dc2ce9a436cde3497164310c/687474703a2f2f6d6f6e676f64622d746f6f6c732e636f6d2f696d672f6d6f6e676f6f73652e706e67" alt="Mongoose" />
                            </div>
                            <div className={`${s.divImg} ${s.extra}`}>
                                <img  style={{width: "6.9rem"}} className={s.iconLargo} src="https://fd-development.com/images/expressjs.png" alt="Express" />
                            </div>
                        </div>
                    </div>

                    <div id='erramientas-baseDeDatos' className={s.erramientasYBaseDeDatos}>
                        <div className={s.erramientas}>
                            <h2>Erramientas</h2>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" alt="npm" />
                            </div>
                            <div className={s.divImg}>
                                <img src="http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png" alt="git" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
                            </div>
                        </div>

                        <div className={s.baseDeDatos}>
                            <h2>Base de datos</h2>
                            <div className={s.divImg}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" />
                            </div>
                            <div className={s.divImg}>
                                <img src="https://cdn.goconqr.com/uploads/slide_property/image/269077/desktop_ac51429c-a01c-48ec-9013-a41fc9eea71e.png" alt="MongoDB" />
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