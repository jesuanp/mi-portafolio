import React from 'react';
import s from './SobreMi.module.css';

export default function SobreMi () {

    return (
        <>
            <div id='Sobre-mi'></div>
            <div className={s.container}>
                <h1>Sobre mí</h1>
                <div className={s.borderBottom}></div>
                <p>
                    Soy una persona muy comprometida con mis trabajos, organizado y listo para nuevos retos que amplíen mis conocimientos, por lo que busco siempre aprender cada vez más en mis proyectos.
                </p>
            </div>
        </>
    )
}