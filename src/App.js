import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Redirect,

} from "react-router-dom";
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAppContext } from './contexts/AppContext';
export default function App() {
  const{user }= useAppContext();

  
  return (
    <Router>
      <div 
      // style={{ 
      //   backgroundColor: isDarkMode ? "#000" : "#fff",
      //   color: !isDarkMode ? "#000" : "#fff"
      //   }}
        >
        <Navbar  /> {/* Agrega la Navbar */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            {user ? <Contact /> : <Redirect to="/login" />}
          </Route>
          <Route path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



