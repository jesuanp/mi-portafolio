import React from 'react';
import s from './Presentacion.module.css';

export default function Presentacion(){

	return (
		<div className={s.texts}>
			<div>
				<h1 className={s.h1}>Jesuan Patermina</h1>
				<p className={s.p}>Desarrollador web full-stack</p>
				<div>
					<a href="../../docs/CV-JESUAN.pdf" download="CV-JESUAN.pdf" className={s.descargaCV}>Descargar CV</a>
				</div>
			</div>

			<div className={s.divImg}>
				<img className={s.img} src="https://pbs.twimg.com/media/FHGHz4JXsAAExOn?format=jpg&name=small" alt="Mi foto" />
			</div>
		</div>
	)
}
