import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Components/Header/Header';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('./homes.json')
      .then((res) => {
        console.log(res)
      })
  },[])
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
