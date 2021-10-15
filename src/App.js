import './App.css';
import Presentacion from './components/Presentacion/Presentacion';
import Nav from './components/Nav/Nav';
import CardsProyectos from './components/proyectos/Index';
import Tecnologias from './components/tecnologias/Tecnologias';

function App() {
  return (
    <div className="App">
      <Nav />

      <Presentacion />

      <CardsProyectos />

      <Tecnologias />
    </div>
  );
}

export default App;
