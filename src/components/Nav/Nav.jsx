import React from 'react';
import s from './Nav.module.css';

export default function Nav(){

	return (
		<div className={s.enlaces}>
			<a className={s.a} href="#About">About</a>
			<a className={s.a} href="#Sobre-mi">Sobre mi</a>
			<a className={s.a} href="#Skills">Skills</a>
			<a className={s.a} href="#Contact">Contact</a>
		</div>
		)
}