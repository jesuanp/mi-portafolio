import React from 'react';
import s from './CardProyecto1.module.css';
import proyectos from './proyectos';

export default function CardProyecto1({setState, setInfoCard}){

    return (
        <>
            {
                proyectos.map(e => (

                    <div className={s.card} key={e.id} onClick={()=>{setState(true); setInfoCard(e)}}>
                        <div className={s.container}>

                            <h2>{e.title}</h2>

                            <img className={s.img} src={e.img} alt="foto del proyecto" />

                            <span>{e.description}</span>

                            <div className={s.verMas}>
                                <p className={s.p}>Ver más</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

