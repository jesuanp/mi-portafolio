import React from 'react';
import s from './EmergenProy.module.css';
import Corousel from './Carousel'

export default function EmergenProy({state, setState}){

    return (
        <div className={`${s.ventanaEmergenteOculta} ${state && s.ventanaEmergenteVisible}`}>
            <div className={s.cardVentana}>

                <div>
                    <button className="btn btn-dark" onClick={()=>setState(false)}>Cerrar</button>
                </div>
                {/* <div>
                    descripción
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem maxime sit totam, porro autem officiis impedit ullam praesentium? Numquam, accusamus delectus! Consequuntur repellat saepe sapiente quas tempora quod explicabo at magni nostrum ipsam distinctio repudiandae iusto, quos a minus neque ratione sit aut officia asperiores quia veritatis. Vel, dolorem!</span>
                </div> */}
                
                <div>
                    <Corousel />
                </div>

            </div>
        </div>
    )
}