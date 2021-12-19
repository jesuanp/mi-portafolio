import React from 'react';
import s from './CardProyecto2.module.css';

export default function CardProyecto2({setState, setInfoCard}){

    const title = "App Criptomonedas";
    const description = "Para este proyecto hice una web en donde muestra una tabla con las 100 criptomonedas más reconocidas. En la tabla esta el precio y el porcentaje (de cuanto subió o bajó el precio en 24h) de cada criptomoneda. Tiene un filtro para ordenar en ascendente o descendente por el precio, el porcentaje u ordenar de la A a la Z y viceversa. También puedes buscar una criptomoneda en específico.";
    const img = "https://pbs.twimg.com/media/FG6-ZSlXwAICNv-?format=jpg&name=small";
    const tecnologias = "React, Redux";
    const link = {
        url: 'https://criptomonedas-jesuanp.vercel.app',
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