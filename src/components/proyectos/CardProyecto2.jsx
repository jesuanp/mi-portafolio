import React from 'react';
import s from './CardProyecto2.module.css';

export default function CardProyecto2({setState}){

    return (
        <div className={s.card} onClick={()=>setState(true)}>
            <div className={s.container}>
                <h2>nombre del videojuegos</h2>
                <img className={s.img} src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="foto del proyecto" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis eos necessitatibus at doloremque, illum repellendus magni sapiente. Est architecto, deleniti similique rerum atque nemo ipsa consequatur sit veniam laborum debitis sapiente facere repudiandae nam sint ea delectus dolores? Quaerat id commodi necessitatibus ullam veritatis odio est repellat, corporis sed.</span>
                <p>Lenguajes de programacion que use</p>
            </div>
        </div>
    )
}