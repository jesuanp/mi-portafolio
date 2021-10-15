import React from 'react';
import s from './CardProyecto1.module.css';

export default function CardProyecto1(){

    return (
        <div className={s.card}>
            <div className={s.container}>
                <h2>nombre del videojuegos</h2>
                <img className={s.img} src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="foto del proyecto" />
                <p>Descripcion de la app</p>
                <p>Descripcion de la app</p>
                <p>Descripcion de la app</p>
                <p>Descripcion de la app</p>
                <p>Descripcion de la app</p>
                <p>Descripcion de la app</p>
                <p>Lenguajes de programacion que use</p>
            </div>
        </div>
    )
}

