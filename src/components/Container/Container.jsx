import React from 'react';
import Nav from '../Nav/Nav';
import s from './Container.module.css';

export default function Container(){

	let imagen = "https://www.eleconomista.com.mx/__export/1581119523386/sites/eleconomista/img/2020/02/07/que-son-esports.jpg";

	return (
		<div id="About">
			<div className={s.separador}>
				<div className={s.containerNav}>
					<Nav />
				</div>
				<img className={s.img} src={imagen} alt="mi foto" />
				<div className={s.containerCenter}>
					<h1 className={s.h1} >Hello world</h1>
					<h1 className={s.test} id="Sobre-mi">Sobre mi</h1>
					<h1 className={s.test} id="Skills">Skills</h1>
					<h1 className={s.test} id="Contact">Contact</h1>
				</div>
			</div>
		</div>
	)
}