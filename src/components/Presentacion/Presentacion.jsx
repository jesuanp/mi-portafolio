import React from 'react';
import s from './Presentacion.module.css';

export default function Presentacion(){

	return (
		<div className={s.texts}>
			<div>
				<h1 className={s.h1}>Jesuan Patermina</h1>
				<p className={s.p}>Desarrollador web full-stack</p>
				<div>
					<a href="../../docs/CV-JESUAN.pdf" download className={s.descargaCV}>Descargar CV</a>
				</div>
			</div>
			<img className={s.img} src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="Mi foto" />
		</div>
	)
}
