import React from 'react';
import s from './CardProyecto2.module.css';
import img from './images/videogames.png'

export default function CardProyecto1({setState, setInfoCard}){


    const title = "App Videogames";
    const description = "En esta pagina web se puede ver una variedad de videojuegos o buscar un videojuego en específico (estos juegos los obtengo de una api rest de rawg), los mismo se pueden ordenar de forma ascendente o descendente según rating o de forma alfabética, también se pueden filtrar por genero, plataformas en las que corre el videojuego. Se puede también agregar un videojuego el cual se guarda en la base de datos. A este juego se le puede poner el nombre, el rating, la fecha de.";
    const tecnologias = "React, Redux, NodeJS, Express, PostgreSQL, Sequelize."
    const link = {
        url: 'https://youtu.be/P1OC0ICplMg',
        tipo: 'Video del proyecto',
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

