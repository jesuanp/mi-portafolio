import React, {useState} from 'react';
import s from './Nav.module.css';

export default function Nav(){

	const [stateMenu, setStateMenu] = useState(false);

	return (
		<nav className={`${s.nav} ${stateMenu && s.navLargo}`}>
			<div className={s.links}>
				<a className={s.a} href="#Sobre-mi">Sobre mí</a>
				<a className={s.a} href="#Tecnologias">Tecnologías</a>
				<a className={s.a} href="#Proyectos">Proyectos</a>
				<a className={s.a} href="#Contacto">Contacto</a>
			</div>

			<div className={s.divSpanMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
				<span className={s.spanMenu} onClick={()=>setStateMenu(state => !state)}>Menu</span>
			</div>

			<div className={s.menu}>
				<ul className={`${s.ul}`}>
					<li className={s.li} onClick={()=>setStateMenu(false)}><a className={s.a} href="#Sobre-mi">Sobre mí</a></li>
					<li className={s.li} onClick={()=>setStateMenu(false)}><a className={s.a} href="#Tecnologias">Tecnologias</a></li>
					<li className={s.li} onClick={()=>setStateMenu(false)}><a className={s.a} href="#Proyectos">Proyectos</a></li>
					<li className={s.li} onClick={()=>setStateMenu(false)}><a className={s.a} href="#Contacto">Contacto</a></li>
				</ul>
			</div>
		</nav>
	)
}