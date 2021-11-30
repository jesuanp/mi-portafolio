import React from 'react';
import s from './CardProyecto1.module.css';

export default function CardProyecto1({setState}){

    return (
        <div className={s.card} onClick={()=>setState(true)}>
            <div className={s.container}>
                <h2>nombre del videojuegos</h2>
                <img className={s.img} src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="foto del proyecto" />
                <span>Descripcion de la app</span>
                <span>Descripcion de la app</span>
                <span>Descripcion de la app</span>
                <span>Descripcion de la app</span>
                <span>Descripcion de la app</span>
                <span>Descripcion de la app</span>
                <p className={s.p}>Lenguajes de programacion que use</p>
            </div>
        </div>
    )
}

