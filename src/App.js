import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Redirect,
  useHistory
} from "react-router-dom";
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';

const USER = "usuario"
const PASS = "demo"

export default function App() {
  let history = useHistory();
  const [globalState, setGlobalState] = useState({
    auth: {
      entro: false,
      usuario: null // Agrega una propiedad para el nombre de usuario
    },
    ui: {
      modoOscuro: false
    }
  });

  const handleOnAuthenticate = (values) => {
    if (values.username === USER && values.password === PASS) {
      const validUser = { ...globalState };
      validUser.auth.entro = true;
      validUser.auth.usuario = values.username; // Establece el nombre de usuario
      setGlobalState(validUser);

      history.push("/");
    }
  }

  const toggleDarkMode = () => {
    const updatedState = { ...globalState };
    updatedState.ui.modoOscuro = !updatedState.ui.modoOscuro;
    setGlobalState(updatedState);
  }

  return (
    <Router>
      <div>
        <Navbar globalState={globalState} toggleDarkMode={toggleDarkMode} /> {/* Agrega la Navbar */}
        <Switch>
          <Route path="/login">
            <Login onAuthenticate={handleOnAuthenticate} globalState={globalState} />
          </Route>
          <Route path="/contact">
            {globalState.auth.entro ? <Contact /> : <Redirect to="/login" />}
          </Route>
          <Route path="/">
            {globalState.auth.entro ? <Home /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



