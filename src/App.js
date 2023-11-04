import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';

const USER = "usuario"
const PASS = "demo"

export default function App() {
  let history = useHistory();
  //let location = useLocation();
  const [globalState, setGlobalState] = useState({
    auth:{
      entro:false
    },
ui:{
  modoOscuro: false
}
  });
/*useEffect (()=> {
  if ((location && location.pathname !== "/login") && !globalState.auth.entro) 
  history.push("/login");
  console.log(globalState)
},[globalState,location, history])*/
  const handleOnAuthenticate = (values)=> {
    if (values.username === USER && values.password === PASS){
      const validUser = { ...globalState };
      validUser.auth.entro = true;
      setGlobalState(validUser)

      history.push("/");
    }
  }

  
  return (
    <Router>
      <div>
       {globalState.auth.entro && (
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Inicio de sesion</Link>
            </li>
            <li>
              <Link to="/contact">Users</Link>
            </li>
          </ul>
        </nav>
      )}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login onAuthenticate={handleOnAuthenticate} globalState={globalState}/>
          </Route>
          <Route path="/contact" render={() => {
            if (!globalState.auth.entro) return <Redirect to="/login"/>
            return<Contact/>
            }}/>
            
          <Route path="/" render={() => {
            if (!globalState.auth.entro) return <Redirect to="/login"/>
            return<Home/>
            }} />
          
        </Switch>
      </div>
    </Router>
  );
}




