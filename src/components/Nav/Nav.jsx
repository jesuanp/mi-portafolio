import React from 'react';
import s from './Nav.module.css';

export default function Nav(){

	return (
		<nav className={s.nav}>
			<div className={s.links}>
				<a className={s.a} href="#">Proyectos</a>
				<a className={s.a} href="#">Tecnologias</a>
				<a className={s.a} href="#">Contacto</a>
			</div>
		</nav>
	)
}