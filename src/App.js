
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss'
// Components]
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Router>

        <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
        </Switch>

      </Router>
    </div>
    
  );
}

export default App;
