import React from 'react';
import s from './Index.module.css';
import CardProyecto1 from './CardProyecto1';
// import EmergenProy from './EmergeProy/EmergenProy';
import {Outlet} from 'react-router-dom';

export default function CardsProyectos({state, setState, setInfoCard}){

    // const [state, setState] = useState(false);

    // const [infoCard, setInfoCard] = useState(null);

    return (
        <>
        <Outlet/>
        {/* <Routes>
            <Route path='/ventana-emergente' element={state ? <EmergenProy state={state} setState={setState} infoCard={infoCard} /> : <Navigate to='/' /> } />
        </Routes> */}
        <div id="Proyectos"></div>

        <div className={s.container}>
            <h1>Mis Proyectos</h1>
            <div className={s.boderBottom}></div>
            <div className={s.cards}>
                <div className={s.cardsProyectos}>
                    <CardProyecto1 setState={setState} setInfoCard={setInfoCard} />
                </div>
            </div>
        </div>
        </>
    )
}