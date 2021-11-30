import React, {useState} from 'react';
import s from './Index.module.css';
import CardProyecto1 from './CardProyecto1';
import CardProyecto2 from './CardProyecto2';
import EmergenProy from './EmergeProy/EmergenProy'

export default function CardsProyectos(){

    const [state, setState] = useState(false)

    return (
        <>
        <EmergenProy state={state} setState={setState} />
        <div className={s.container}>
            <h1 id="Proyectos">Mis Proyectos</h1>
            <div className={s.cards}>
                <CardProyecto1 setState={setState} />
                <CardProyecto2 setState={setState} />
            </div>
        </div>
        </>
    )
}