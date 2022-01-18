import React from 'react';
import s from './CardProyecto2.module.css';
import img from './images/wather.png';

export default function CardProyecto2({setState, setInfoCard}){

    const title = "Wather App";
    const description = "En esta pagina puedes buscar una ciudad y ver el clima que hace actualmente, también tiene un historial donde se guardan todas la ciudades que buscas.";
    const tecnologias = "React, Redux";
    const link = {
        url: 'https://wather-app-jesuanp.vercel.app',
        tipo: 'Pagina web del proyecto',
    };

    const info = {
        title,
        description,
        img,
        tecnologias,
        link
    }


    return (
        <div className={s.card} onClick={()=>{setState(true); setInfoCard(info)}}>
            <div className={s.container}>

                <h2>{title}</h2>

                <img className={s.img} src={img} alt="foto del proyecto" />

                <span>{description}</span>
                
                <div className={s.verMas}>
                    <p className={s.p}>Ver más</p>
                </div>

            </div>
        </div>
    )
}