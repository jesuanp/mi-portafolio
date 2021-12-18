import React, {useState} from 'react';
import s from './Index.module.css';
import CardProyecto1 from './CardProyecto1';
import CardProyecto2 from './CardProyecto2';
import EmergenProy from './EmergeProy/EmergenProy'

export default function CardsProyectos(){

    const [state, setState] = useState(false)

    const [infoCard, setInfoCard] = useState(null)

    return (
        <>
        <EmergenProy state={state} setState={setState} infoCard={infoCard} />
        <div className={s.container}>
            <div id="Proyectos"></div>
            <br />
            <br />
            <br />
            <h1 className={s.proyectos} >Mis Proyectos</h1>
            <div className={s.cards}>
                <CardProyecto1 setState={setState} setInfoCard={setInfoCard} />
                <CardProyecto2 setState={setState} setInfoCard={setInfoCard} />
            </div>
        </div>
        </>
    )
}