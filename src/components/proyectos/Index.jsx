import React from 'react';
import s from './Index.module.css';
import CardProyecto1 from './CardProyecto1';
import CardProyecto2 from './CardProyecto2';

export default function CardsProyectos(){

    return (
        <div className={s.container}>
            <h1>Mis Proyectos</h1>
            <div className={s.cards}>
                <CardProyecto1 />
                <CardProyecto2 />
            </div>
        </div>
    )
}