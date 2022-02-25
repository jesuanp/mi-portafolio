import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Index';
import EmergenProy from './components/proyectos/EmergeProy/EmergenProy';

// react router dom
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {

  const [state, setState] = useState(false);

  const [infoCard, setInfoCard] = useState(null);

  return (
      <Routes>

        <Route path='/' element={<Home state={state} setState={setState} setInfoCard={setInfoCard} />} >
          <Route path='/ventana-emergente' element={state ? <EmergenProy state={state} setState={setState} infoCard={infoCard} /> : <Navigate to='/' /> } />
        </Route>

      </Routes>
  );
}

export default App;
