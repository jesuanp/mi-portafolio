import React from 'react';
import s from './EmergenProy.module.css';

export default function EmergenProy({state, setState, infoCard}){

    return (
        <div className={`${s.ventanaEmergenteOculta} ${state && s.ventanaEmergenteVisible}`}>
            <div className={s.cardVentana}>

                <div className={s.divBtn}>
                    <button className={`btn btn-close ${s.btnClose}`} onClick={()=>setState(false)}></button>
                </div>

                <div className={s.containerInfo}>

                    <div className={s.divImg}>
                        <img src={infoCard && infoCard.img} className={s.img} alt="imagen del proyecto" />
                    </div>

                    <div>

                        <div className={s.divH3}>
                            <h3>
                                {infoCard && infoCard.title}
                            </h3>
                        </div>

                        <div className={s.divSpan}>

                            <div className={s.spanTitle}>
                                <span>
                                    Descripción:
                                </span>
                            </div>

                            <span>
                                {infoCard && infoCard.description}
                            </span>
                        </div>

                        <div className={s.divSpan}>
                            <div className={s.spanTitle}>
                                <span>
                                    Tecnologías implementadas:
                                </span>
                            </div>

                            <span>
                                {infoCard && infoCard.tecnologias}
                            </span>
                        </div>

                        <div className={s.divUrl}>
                            <div className={s.divLink}>
                                <a href={infoCard && infoCard.link.url} target="_blank" without rel="noreferrer">{infoCard && infoCard.link.tipo}</a>
                            </div>

                        { infoCard && infoCard.link.tipoDos
                            ?   (   
                                    <div className={s.divLink}>
                                        <a href={infoCard && infoCard.link.urlDos} target="_blank" without rel="noreferrer">{infoCard && infoCard.link.tipoDos}</a>
                                    </div>
                                )
                            :   (
                                    null
                                )
                        }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}