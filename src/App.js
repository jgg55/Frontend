//import logo from './logo.svg';
import './App.css';

//importar componentes

import { BrowserRouter as Router } from 'react-router-dom'
import CompRutas from './Configuracion/Rutas';
import CompNavbar from './Configuracion/Navbar';
import CompFooter from './Configuracion/Footer';

function App() {

  //Menu de navegacion
  return (
    <div className="App">
   
      <Router >
        <CompNavbar />
        <CompRutas />
        <CompFooter />
      </Router>
    </div>
  );
}

export default App;
