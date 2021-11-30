import './App.css';
import Presentacion from './components/Presentacion/Presentacion';
import Nav from './components/Nav/Nav';
import CardsProyectos from './components/proyectos/Index';
import Tecnologias from './components/tecnologias/Tecnologias';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Nav />

      <Presentacion />

      <CardsProyectos />

      <Tecnologias />
    </div>
  );
}

export default App;
