import './App.css';
import Presentacion from './components/Presentacion/Presentacion';
import Nav from './components/Nav/Nav';
import CardsProyectos from './components/proyectos/Index';
import Tecnologias from './components/tecnologias/Tecnologias';
import Footer from './components/Footer/Footer';
import SobreMi from './components/SobreMi/SobreMi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Nav />

      <Presentacion />

      <SobreMi />

      <Tecnologias />

      <CardsProyectos />

      <Footer />
    </div>
  );
}

export default App;
