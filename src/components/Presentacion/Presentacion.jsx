import React from 'react';
import s from './Presentacion.module.css';
import foto from './image/Profile-linkedin-2.jpg';

export default function Presentacion(){

	return (
		<div className={s.texts}>
			<div>
				<h1 className={s.h1}>Jesuan Patermina</h1>
				<p className={s.p}>Desarrollador web full-stack</p>
				<div>
					<a className={s.descargaCV} href="https://drive.google.com/file/d/1dRyD1YlUFA-TWXgpMA8430BqUq-jT2LN/view?usp=sharing" target="_blank" rel="noopener noreferrer">Ver CV</a>
				</div>
			</div>

			<div className={s.divImg}>
				<img className={s.img} src={foto} alt="Mi foto" />
			</div>
		</div>
	)
}
