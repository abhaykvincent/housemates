
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <div className="page">
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </div>
        </Switch>

      </Router>
    </div>
    
  );
}

export default App;
