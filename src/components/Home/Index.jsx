import React from "react";
import Nav from "../Nav/Nav";
import Presentacion from '../Presentacion/Presentacion';
import CardsProyectos from '../proyectos/Index';
import Tecnologias from '../tecnologias/Tecnologias';
import Footer from '../Footer/Footer';
import SobreMi from '../SobreMi/SobreMi';

const Home = ({state, setState, setInfoCard}) => {

    return (
        <>
            <Nav />
            <Presentacion />
            <SobreMi />
            <Tecnologias />
            <CardsProyectos state={state} setState={setState} setInfoCard={setInfoCard} />
            <Footer />
        </>
    )
}

export default Home;
