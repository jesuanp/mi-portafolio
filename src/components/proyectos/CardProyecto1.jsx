import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './CardProyecto1.module.css';
import proyectos from './proyectos';

export default function CardProyecto1({setState, setInfoCard}){

    return (
        <>
            {
                proyectos.map(e => (

                    <NavLink to='/ventana-emergente' key={e.id} onClick={()=>{setState(true); setInfoCard(e)}} className={s.NavLink}>
                        <div className={s.card} >
                            <div className={s.container}>

                                <h2>{e.title}</h2>

                                <img className={s.img} src={e.img} alt="foto del proyecto" />

                                <span>{e.description}</span>

                                <div className={s.verMas}>
                                    <span className={s.span}>Ver más</span>
                                </div>

                            </div>
                        </div>
                    </NavLink>
                ))
            }
        </>
    )
}

