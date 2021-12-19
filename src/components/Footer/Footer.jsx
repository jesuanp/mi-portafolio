import React from 'react';
import s from './Footer.module.css';
import {svgLinkedin, svgGithub, svgMail} from './imagenes-svg';

export default function Footer () {

    return (
        <div className={s.footer}>

            <div className={s.contacto}>
                <h2>Contacto</h2>
            </div>

            <div className={s.redes}>
                <div className='d-flex flex-column align-items-center'>
                    <div >{svgMail}</div>
                    <span>jespaterm@gmail.com</span>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <a className={s.linkedin} href='https://www.linkedin.com/in/jesuan-patermina/' target="_blank" without rel="noreferrer">{svgLinkedin}</a>
                    <span>/in/jesuan-patermina</span>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <a className={s.github} href='https://github.com/jesuanp' target="_blank" without rel="noreferrer">{svgGithub}</a>
                    <span>github.com/jesuanp</span>
                </div>
            </div>
        </div>
    )
}