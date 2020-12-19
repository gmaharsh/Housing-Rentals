import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Properties from './Components/Properties/Properties';
import Property from './Components/Properties/Property/Property';
import Auth from './Auth';
import Message from './Components/Properties/Property/Message/Message';


function App() {
  
  return (
    
    <div className="App">
        <div className="app_body">
          <Router>
            <Header />
          <Switch>
              <Route path="/message">
                <Message />
              </Route>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="/detailProperty">
                <Property />
              </Route>
              <Route path="/property">
                <Properties />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
