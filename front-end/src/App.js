import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Components/Header/Header';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('homes.json')
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log("Error is:-", error)
      })
  },[])
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/property">
            <h1>I am property route</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
